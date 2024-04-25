const countriesContainer = document.querySelector('.countries-container')
fetch("https://restcountries.com/v3.1/all")
  .then((resolve) => resolve.json())
  .then((data) => {
    data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      const cardHTML = `
      <img src="https://flagcdn.com/is.svg" alt="flag" />
      <div class="card-text">
      <h3 class="card-title">Iceland</h3>
      <p><b>Population: </b>81,770,900</p>
      <p><b>Region: </b>Europe</p>
      <p><b>Capital: </b>Berlin</p>
      </div>
      `
      countryCard.innerHTML = cardHTML
      countriesContainer.append(countryCard)
    })
  })





/*   const cardImg = document.createElement('img')
  cardImg.src = "https://flagcdn.com/is.svg"
  countryCard.append(cardImg) */