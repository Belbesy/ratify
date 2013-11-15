var assert = require('assert')
  , tests
  , EarnedBadge = geddy.model.EarnedBadge;

tests = {

  'after': function (next) {
    // cleanup DB
    EarnedBadge.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var earnedbadge = EarnedBadge.create({});
    earnedbadge.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
