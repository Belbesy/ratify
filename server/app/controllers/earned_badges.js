var EarnedBadges = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.EarnedBadge.all(function(err, earnedBadges) {
      self.respondWith(earnedBadges, {type:'EarnedBadge'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , earnedBadge = geddy.model.EarnedBadge.create(params);

    if (!earnedBadge.isValid()) {
      this.respondWith(earnedBadge);
    }
    else {
      earnedBadge.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(earnedBadge, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.EarnedBadge.first(params.id, function(err, earnedBadge) {
      if (err) {
        throw err;
      }
      if (!earnedBadge) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(earnedBadge);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.EarnedBadge.first(params.id, function(err, earnedBadge) {
      if (err) {
        throw err;
      }
      if (!earnedBadge) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(earnedBadge);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.EarnedBadge.first(params.id, function(err, earnedBadge) {
      if (err) {
        throw err;
      }
      earnedBadge.updateProperties(params);

      if (!earnedBadge.isValid()) {
        self.respondWith(earnedBadge);
      }
      else {
        earnedBadge.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(earnedBadge, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.EarnedBadge.first(params.id, function(err, earnedBadge) {
      if (err) {
        throw err;
      }
      if (!earnedBadge) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.EarnedBadge.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(earnedBadge);
        });
      }
    });
  };

};

exports.EarnedBadges = EarnedBadges;
