import { useContextSelector } from "use-context-selector";
import { WebServiceContext } from "./../context/WebServiceContext";

function useWebService() {
  const isLoading = useContextSelector(
    WebServiceContext,
    (state) => state.isLoading
  );
  const erro = useContextSelector(WebServiceContext, (state) => state.erro);
  const data = useContextSelector(WebServiceContext, (state) => state.data);
  const getProducts = useContextSelector(
    WebServiceContext,
    (state) => state.getProducts
  );
  return { isLoading, erro, data, getProducts };
}

export default useWebService;
