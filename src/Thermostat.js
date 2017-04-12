function Thermostat() {
  this.degrees = 20
  this.powerSavingMode = true
}

Thermostat.prototype.degrees = function() {
  return 20
}

Thermostat.prototype.up = function(degree) {
  if(this.powerSavingMode === true) {
    if(this.degrees + degree > 25) {
      throw new TypeError("can't go above 25")
    }
  } else if(this.powerSavingMode === false) {
    if(this.degrees + degree > 32) {
      throw new TypeError("can't go above 32")
    }
  }
    this.degrees = this.degrees + degree
}

Thermostat.prototype.down = function(degree) {
  if(this.degrees - degree < 10 ) {
    throw new TypeError("can't go below 10")
  } else {
  this.degrees = this.degrees - degree
  }
}

Thermostat.prototype.changeMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
}
