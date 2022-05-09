import { postData } from "../../app/ajax";
import { API } from "../../constants";

/** @todo does this need to be async? */
export function shortenUrl(longUrl = "") {
  return postData(`${API.BASE}/links`, {
    url: longUrl,
  });
}
