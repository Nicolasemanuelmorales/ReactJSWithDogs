import { Switch, Route, Redirect } from "react-router-dom";
import Favoritos from "../views/Favoritos/favoritos.view";
import Home from "../views/Home/home.view";

function Routes() {
  const NotFoundRedirect = () => <Redirect to="/home" />;

  return (
    <Switch>
      <Route component={Home} path="/home" />
      <Route component={Favoritos} path="/favoritos" />
      <Route component={NotFoundRedirect} />
    </Switch>
  );
}
export default Routes;
