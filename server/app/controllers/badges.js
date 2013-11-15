var Badges = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Badge.all(function(err, badges) {
      self.respondWith(badges, {type:'Badge'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , badge = geddy.model.Badge.create(params);

    if (!badge.isValid()) {
      this.respondWith(badge);
    }
    else {
      badge.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(badge, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Badge.first(params.id, function(err, badge) {
      if (err) {
        throw err;
      }
      if (!badge) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(badge);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Badge.first(params.id, function(err, badge) {
      if (err) {
        throw err;
      }
      if (!badge) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(badge);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Badge.first(params.id, function(err, badge) {
      if (err) {
        throw err;
      }
      badge.updateProperties(params);

      if (!badge.isValid()) {
        self.respondWith(badge);
      }
      else {
        badge.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(badge, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Badge.first(params.id, function(err, badge) {
      if (err) {
        throw err;
      }
      if (!badge) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Badge.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(badge);
        });
      }
    });
  };

};

exports.Badges = Badges;
