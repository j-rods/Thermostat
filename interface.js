$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.degrees);

  $('#temp-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.degrees);
  })

  $('#temp-down').on('click', function() {
    thermostat.down();
    $('#temperature').text(thermostat.degrees);
  })

})



