import { combineReducers, Reducer } from "redux";
import { ILoaderReducer, loaderReducer } from "./LoaderReducer";
import { IAction } from "../actions/types";
import { IFavoritoReducer, favoritoReducer } from "./favoritoReducer";

export interface IRootState {
  loader: ILoaderReducer;
  favoritos: IFavoritoReducer;
}

const appReducer: Reducer<IRootState> = combineReducers({
  loader: loaderReducer,
  favoritos: favoritoReducer,
});

const rootReducer = (state: any, action: IAction) => {
  return appReducer(state, action);
};

export default rootReducer;
