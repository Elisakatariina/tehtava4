// Haetaan JSON-data Githubista
fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507/data')
// Muunnetaan vastaus JSON muotoon
.then(function (response) { 
  return response.json(); 
})
// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
    // Kutsutaan funktiota ja välitetään sille json-vastaus
    kerro(responseJson);
  })
// Jos tuli jokin virhe
.catch(function (error) { 
  document.getElementById("tehtava4").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
});
function kerro(data){
  var teksti = "";
  //otsikot
  teksti = teksti + "<h1>Autolla Tampereelle</h1>";
  teksti = teksti + "<p>Millainen keli siellä on?</p>";
  for (var i = 0; i < data.presets.length; i++) {
    teksti = teksti + "<h3>" + data.presets[i].measuredTime + "</h3>" 
    teksti = teksti + "<p><img src='https://weathercam.digitraffic.fi/" + data.presets[i].id + ".jpg' alt='kuva' ></p>";
  }
  document.getElementById("tehtava4").innerHTML = teksti;
}
