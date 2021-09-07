import { FAVORITO, IAction } from "./types";

const favoritoAction = (value: string[]): IAction => ({
  type: FAVORITO,
  payload: value,
});

export default favoritoAction;
