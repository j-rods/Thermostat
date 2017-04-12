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
    if ($(this).text() == 'On') {
      $('#switch-power-mode').text('Off')
    } else {
      $('#switch-power-mode').text('On')
    }
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.degrees);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
})
