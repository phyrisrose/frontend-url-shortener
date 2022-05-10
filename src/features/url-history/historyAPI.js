import { getData } from "../../app/ajax";
import { API } from "../../constants";

export function getHistory() {
  return getData(`${API.BASE}/links`);
}
