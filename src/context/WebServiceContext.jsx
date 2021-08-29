import { useState } from "react";
import { createContext } from "use-context-selector";
import WebService from "./../services/webservice";
export const WebServiceContext = createContext(null);

export default function WebServiceProvider({ children }) {
  const [isLoading, setLoading] = useState("idle");
  const [erro, setErro] = useState(null);
  const [data, setData] = useState(null);

  const getProducts = async () => {
    setLoading("loading");
    setErro(null);
    setData(null);
    try {
      const response = await WebService.get("/");
      if (response.status !== 200) throw new Error(response.statusText);
      setData(response.data);
    } catch (error) {
      setLoading("error");
      setErro(error);
    }
  };

  return (
    <WebServiceContext.Provider value={{ isLoading, erro, data, getProducts }}>
      {children}
    </WebServiceContext.Provider>
  );
}
