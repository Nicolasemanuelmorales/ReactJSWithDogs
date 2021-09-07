import { urls } from "../utils/apiUrls";
import axiosNoAuth from "../utils/axiosNoAuth";

const url = urls.apiUrlDogs;
const search = "v1/images/search";

export function getRandomDog(): Promise<any> {
  return axiosNoAuth<any>(`${url}/${search}`, "GET", {});
}
