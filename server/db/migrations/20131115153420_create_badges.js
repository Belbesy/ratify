var CreateBadges = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('title', 'string');
          t.column('desc', 'string');
          t.column('img', 'string');
          t.column('cost', 'int');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('badge', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('badge', callback);
  };
};

exports.CreateBadges = CreateBadges;
