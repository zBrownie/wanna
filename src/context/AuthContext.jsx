import { useState, useEffect } from "react";
import { createContext } from "use-context-selector";
import WebService from "./../services/webservice";
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [userApp, setUserApp] = useState(null);
  const [isLoading, setLoading] = useState("idle");
  const [erro, setErro] = useState(null);
  const handleLogin = async (data) => {
    setLoading("loading");
    try {
      const response = await WebService.post("auth", data);
      console.log(response);
      if (response.status !== 200) throw new Error(response.statusText);
      setUserApp(response.data);
    } catch (error) {
      handlerErro(error);
    }
  };
  const handleLogout = () => {};
  const handleCreateAccount = async (data) => {
    setLoading("loading");
    try {
      const response = await WebService.post("register", data);
      if (response.status !== 200) throw new Error(response.statusText);
      setUserApp(response.data);
    } catch (error) {
      handlerErro(error);
    }
  };

  const handlerErro = (erro) => {
    setLoading("error");
    setErro({
      code: erro.code,
      message: erro.message,
    });
    console.warn({ erro });
    console.warn(`CODE: ${erro.code} Message: ${erro.message}`);
  };
  useEffect(() => {
    if (userApp != null) {
      const tokenLocal = window.localStorage.getItem("wanna-token");
      if (tokenLocal != null || tokenLocal !== undefined) {
        if (userApp.token !== tokenLocal) {
          // validar
          return;
        }
      }
      window.localStorage.setItem("wanna-token", tokenLocal);
    }
  }, [userApp]);
  return (
    <AuthContext.Provider
      value={{
        userApp,
        handleLogin,
        handleLogout,
        handleCreateAccount,
        erro,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
