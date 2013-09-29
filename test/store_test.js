module('Store');

test('Ember Data version', function() {
  equal(DS.VERSION, '1.0.0-beta.2');
});

test('store uses DS.FixtureAdapter', function() {
  var store   = App.__container__.lookup('store:main'),
      adapter = store.adapterForType('application'),
      name    = adapter.constructor.toString();

  equal(name, 'DS.FixtureAdapter');
});

