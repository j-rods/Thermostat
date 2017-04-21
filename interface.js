$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('#temp-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temp-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  })

  $('#switch-power-mode').click(function() {
    thermostat.changeMode();
    if (thermostat.powerSavingMode) {
      $('#switch-power-mode').text('Off')
    } else {
      $('#switch-power-mode').text('On')
    }
    updateTemperature();
  })

  // displayWeather("London");

  // $("#select-city").submit(function(event) {
  //   event.preventDefault();
  //   var city = $("#current-city").val();
  //   displayWeather(city);
  // });

  // function displayWeather(city) {
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //   var token = '&appid=8f8430248a87f9381ea0d091ae6f4cf1';
  //   var units = '&units=metric';
  //   $.get(url + token + units, function(data) {
  //     $("#current-temperature").text(data.main.temp);
  //   });
  // }

  function updateTemperature() {
    $('#temperature').text(thermostat.degrees);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
})
