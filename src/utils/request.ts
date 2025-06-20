const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

export async function request(url: string) {
  const output = await fetch(`${BACKEND_URL}${url}`);

  return output;
}
