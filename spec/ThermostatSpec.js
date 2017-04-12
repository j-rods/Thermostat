'use strict';

describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('degrees', function() {
    it('starts at 20', function() {
      expect(thermostat.degrees).toEqual(20);
    });
  });

  describe('increases temperature', function() {
    it('by 1', function() {
      thermostat.up()
      expect(thermostat.degrees).toBe(21);
    });

    it('throws error if above 25 and powerSavingMode is on', function() {
      expect(function() {
        for(var i = 0; i < 6; i++) {
        thermostat.up()
      }
      }).toThrowError(TypeError, "can't go above 25")
    });
    it('throws error if above 32 and powerSavingMode if off', function(){
      thermostat.changeMode()
      expect(function() {
        for(var i = 0; i < 13; i++) {
        thermostat.up()
      }
      }).toThrowError(TypeError, "can't go above 32")
    });
  });

  describe('decreases temperature', function() {
    it('by 3', function() {
      thermostat.down()
      thermostat.down()
      thermostat.down()
      expect(thermostat.degrees).toBe(17);
    });
    it(":minimum degrees is 10", function() {
      for(var i = 0; i < 10; i++) {
      thermostat.down()
    }      expect(function() {
        thermostat.down(1)
      }).toThrowError(TypeError, "can't go below 10")
    });
  });

  describe('power saving switch', function() {
    it("set to false", function() {
      thermostat.changeMode()
      expect(thermostat.powerSavingMode).toBe(false);
    });
  });

  describe('reset temperature', function() {
    it("to 20", function() {
      thermostat.up()
      thermostat.up()
      thermostat.resetTemp()
      expect(thermostat.degrees).toBe(20);
    });
  });

  describe('energy usage', function() {
    it('default set to medium-usage', function() {
      expect(thermostat.energyUsage()).toBe("medium-usage")
    });
    it('set to low-usage', function(){
      for(var i = 0; i < 4; i++) {
      thermostat.down()
      }
      expect(thermostat.energyUsage()).toBe("low-usage")
    });
    it('set to high-usage', function(){
      thermostat.changeMode()
      for(var i = 0; i < 6; i++) {
      thermostat.up()
    }
      expect(thermostat.energyUsage()).toBe("high-usage")
    });
  });
});
