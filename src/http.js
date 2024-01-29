export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error("Failed to fetch places");
      throw error;
    }
    return responseData.places
}