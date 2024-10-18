import { swapApi } from "../constants/swapApi.js";

export async function fetchPlanet(id) {
  const response = await fetch(`${swapApi}planets/${id}`);
  if (!response.ok) throw new Error("Failed to load planet. Please try again.");
  const data = await response.json();
  return data;
}
