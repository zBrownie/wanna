import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import HomePage from "../pages/HomePage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={HomePage} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}
