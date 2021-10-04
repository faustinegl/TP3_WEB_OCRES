
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      
      for(i=0;i<4;i++){
        // On récupère l'information principal
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);

        // Modifier le DOM
        document.getElementById('day'+i+'-forecast-main').innerHTML = main;
        document.getElementById('day'+i+'-forecast-more-info').innerHTML = description;
        document.getElementById('icon'+i+'-weather-container').innerHTML = icon;
        document.getElementById('day'+i+'-forecast-temp').innerHTML = `${temp}°C`;
      }
      
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


