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
    it('by 3', function() {
      thermostat.up(3)
      expect(thermostat.degrees).toBe(23);
    });

    it('throws error if above 25 and powerSavingMode is on', function() {
      expect(function() {
        thermostat.up(6)
      }).toThrowError(TypeError, "can't go above 25")
    });
  });

  describe('decreases temperature', function() {
    it('by 3', function() {
      thermostat.down(3)
      expect(thermostat.degrees).toBe(17);
    });
    it(":minimum degrees is 10", function() {
      thermostat.down(10)
      expect(function() {
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
});
