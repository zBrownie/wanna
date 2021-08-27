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

  return { user, login, logout, createAccount };
}

export default useAuth;
