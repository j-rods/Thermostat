function Thermostat() {
  this.degrees = 20
}

Thermostat.prototype.degrees = function() {
  return 20
}

Thermostat.prototype.increase = function(degree) {
  this.degrees = this.degrees + degree
}
