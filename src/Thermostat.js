function Thermostat() {
  this.degrees = 20
}

Thermostat.prototype.degrees = function() {
  return 20
}

Thermostat.prototype.up = function(degree) {
  this.degrees = this.degrees + degree
}

Thermostat.prototype.down = function(degree) {
  if(this.degrees - degree < 10 ) {
    throw new TypeError("can't go below 10")
  } else {
  this.degrees = this.degrees - degree
  }
}
