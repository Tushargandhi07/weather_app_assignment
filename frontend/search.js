

search.addEventListener('click', async () => {
    let search = document.getElementById('search');
    let city = document.getElementById('city');
    let region = document.getElementById('region');
    let country = document.getElementById('country');
    let temperature = document.getElementById('temperature');
    let location = document.getElementById('location').value;
    // console.log(location);

    try {
        const response = await fetch(`http://localhost:4440/weather/${location}`);
        const data = await response.json();
        console.log(data);
        // console.log(data.location.name);
        city.innerText = data.location.name;
        region.innerText = data.location.region;
        country.innerText = data.location.country;
        temperature.innerText = `${data.current.temperature}°C`;
    } catch (error) {
        console.log(error);
    }

});    