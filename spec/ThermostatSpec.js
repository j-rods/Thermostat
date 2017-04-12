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
      thermostat.increase(3)
      expect(thermostat.degrees).toBe(23);
    });
  });
});
