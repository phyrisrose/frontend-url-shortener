import { postData } from "../../app/ajax";
import { API } from "../../constants";

export function shortenUrl(longUrl = "") {
  return postData(`${API.BASE}/links`, {
    url: longUrl,
  });
}
