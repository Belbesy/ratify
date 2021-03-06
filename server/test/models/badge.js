var assert = require('assert')
  , tests
  , Badge = geddy.model.Badge;

tests = {

  'after': function (next) {
    // cleanup DB
    Badge.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var badge = Badge.create({});
    badge.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
