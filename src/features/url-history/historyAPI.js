import { getData } from "../../app/ajax";
import { API } from "../../constants";

export function shortenUrl() {
  return getData(`${API.BASE}/links`);
}
