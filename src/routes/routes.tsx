import { Switch, Route } from "react-router-dom";
import Favorite from "../views/Favorite/favorite.view";
import Home from "../views/Home/home.view";

function Routes() {
  return (
    <Switch>
      <Route component={Home} path="/home" />
      <Route component={Favorite} path="/favorite" />
    </Switch>
  );
}
export default Routes;
