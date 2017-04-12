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
});
