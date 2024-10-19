export async function fetchDataByUrl(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not load data for this URL: ${url}`);
  }
  const data = await response.json();
  return data;
}
