export function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  throw new ErrorEvent("NETWORK response not ok");
}

export function handleError(error) {
  console.error("API call failed" + error);
  throw error;
}
