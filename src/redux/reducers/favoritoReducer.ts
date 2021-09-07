import { FAVORITO, IAction } from "../actions/types";

export interface IFavoritoReducer {
  value: string[];
}

const initialState = {
  value: [""],
};

export function favoritoReducer(
  state = initialState,
  action: IAction
): IFavoritoReducer {
  switch (action.type) {
    case FAVORITO:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
