describe('thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('degrees', function() {
    it('starts at 20', function() {
      expect(thermostat.degrees()).toEqual(20);
    });
  });
});
