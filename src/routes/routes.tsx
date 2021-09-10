import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import colors from "../assets/colors";
import Loader from "../components/loader/loader.component";
import { IRootState } from "../redux/reducers/rootReducer";
import Favoritos from "../views/Favoritos/favoritos.view";
import Home from "../views/Home/home.view";

function Routes() {
  const NotFoundRedirect = () => <Redirect to="/home" />;
  const loader = useSelector((state: IRootState) => state.loader.value);

  return (
    <>
      <Switch>
        <Route component={Home} path="/home" />
        <Route component={Favoritos} path="/favoritos" />
        <Route component={NotFoundRedirect} />
      </Switch>
      <Loader open={loader} size={50} color={colors.COLOR_PRINCIPAL} />
    </>
  );
}
export default Routes;
