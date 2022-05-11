import { getData, deleteData } from "../../app/ajax";
import { API } from "../../constants";

export function getHistory() {
  return getData(`${API.BASE}/links`);
}

export function expireUrl(slug) {
  return deleteData(`${API.BASE}/links/${slug}`);
}
