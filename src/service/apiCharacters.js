import { swapApi } from "../constants/swapApi.js";

export async function fetchCharacters(page = 7) {
  const response = await fetch(`${swapApi}people?page=${page}`);
  if (!response.ok)
    throw new Error("Failed to load characters. Please try again.");
  const data = await response.json();
  return data;
}

export async function fetchCharactersDetails(id) {
  const response = await fetch(`${swapApi}people/${id}`);
  if (!response.ok)
    throw new Error("Failed to load character. Please try again.");
  const data = await response.json();
  return data;
}
