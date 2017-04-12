'use strict';

function Thermostat() {
  this.degrees = 20
  this.powerSavingMode = true
}

Thermostat.prototype.degrees = function() {
  return 20
}

Thermostat.prototype.up = function() {
  if(this.powerSavingMode === true) {
    if(this.degrees + 1 > 25) {
      throw new TypeError("can't go above 25")
    }
  } else if(this.powerSavingMode === false) {
    if(this.degrees + 1 > 32) {
      throw new TypeError("can't go above 32")
    }
  }
    this.degrees += 1
}

Thermostat.prototype.down = function(degree) {
  if(this.degrees - 1 < 10 ) {
    throw new TypeError("can't go below 10")
  } else {
  this.degrees -= 1
  }
}

Thermostat.prototype.changeMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
}

Thermostat.prototype.resetTemp = function() {
  this.degrees = 20
}

Thermostat.prototype.energyUsage = function() {
  if(this.degrees >= 18 && this.degrees < 25) {
    return "medium-usage"
  } else if(this.degrees < 18) {
    return "low-usage"
  } else {
    return "high-usage"
  }
}
