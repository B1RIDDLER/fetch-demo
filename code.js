// Selecting our HTML elements
const input = document.querySelector('input');
const button = document.querySelector('button');
const countryDiv = document.querySelector('.country-data');

// Add an event listener to our button
button.addEventListener('click', function () {
    // Grab what the user types into the input box
    const country = input.value.trim();
// Fetch our data from
fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
        const countryData = data[0];
        console.log(countryData);
        // destructuring version: const [countryData] = data;

        const html = `
        <h2>${countryData.name}</h2>
        
        <img src="${countryData.flag}" alt="Flag of ${countryData.name}" title="flag of ${countryData.name}" class="flag"> 
        
        <h3>${countryData.region}</h3>
        <h4>Capital: ${countryData.capital}</h4>
        <h4>Population: ${countryData.population}</h4>
        
        `
    


        countryDiv.innerHTML = html;
    // const image = document.createElement('img');
    // image.src = countryData.flag;
    // image.classList.add('flag');
    // countryDiv.append(image);
});
});
