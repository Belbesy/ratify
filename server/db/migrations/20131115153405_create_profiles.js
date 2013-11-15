var CreateProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('title', 'string');
          t.column('e', 'string');
          t.column('desc', 'string');
          t.column('img', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('profile', def, callback);
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
    this.dropTable('profile', callback);
  };
};

exports.CreateProfiles = CreateProfiles;
