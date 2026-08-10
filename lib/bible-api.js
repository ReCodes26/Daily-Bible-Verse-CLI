import { getDailyBibleVerseString } from "./bible-verses.js";

export async function getDailyVerse() {
  try {
    const verseString = getDailyBibleVerseString(); // Retrive the daily Bible verse string by getting the current date.
    const response = await fetch(`https://bible-api.com/${verseString}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching daily Bible verse:", error);
  }
}
