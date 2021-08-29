import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import HomePage from "../pages/HomePage";
import LoginPage from "./../pages/LoginPage/index";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}
