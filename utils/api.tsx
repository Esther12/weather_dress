export const getLatLong = async () => {
  const zip = window.localStorage.getItem("myZip");
  if (zip == null) {
    return { lat: "", lon: "", have: false };
  } else {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},CA&appid=${process.env.NEXT_PUBLIC_API_URL}`
      );

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return { lat: "", lon: "", have: false };
      }

      const data = await response.json();
      return { lat: data.lat, lon: data.lon, have: true };
    } catch (error) {
      console.error("Fetch error:", error);
      return { lat: "", lon: "", have: false };
    }
  }
};
