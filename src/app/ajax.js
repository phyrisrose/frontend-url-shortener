import { API } from "../constants";

/**
 * @todo check that this works
 * specifically, get parameters
 */
export async function getData(url = "") {
  const response = await fetch(url, {
    cache: "no-cache",
    headers: {
      // "Content-Type": "application/json",
      "GB-Access-Token": API.KEY,
    },
    referrerPolicy: "no-referrer",
  });
  return response.json();
}

export async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "GB-Access-Token": API.KEY,
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}
