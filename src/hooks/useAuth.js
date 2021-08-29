import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
  const user = useContextSelector(AuthContext, (state) => state.userApp);
  const login = useContextSelector(AuthContext, (state) => state.handleLogin);
  const logout = useContextSelector(AuthContext, (state) => state.handleLogout);
  const createAccount = useContextSelector(
    AuthContext,
    (state) => state.handleCreateAccount
  );
  const erro = useContextSelector(AuthContext, (state) => state.erro);
  const isLoading = useContextSelector(AuthContext, (state) => state.isLoading);

  return { user, login, logout, createAccount, erro, isLoading };
}

export default useAuth;
