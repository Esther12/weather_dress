
export const getLatLong = async () => {
    
    const zip = window.localStorage.getItem("myZip");
    console.log(process.env.API_KEY,  "env q", zip?.toString(), "zip", typeof(zip));
    if (zip == null) {
        return { lat: '', lon: '', have: false };
    } else {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip},CA&appid=${process.env.API_KEY}`);
        const data = await response.json();
        return { lat: data.lat, lon: data.lon, have: true }
    }

}