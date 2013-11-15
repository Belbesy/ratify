var NominatedBadges = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.NominatedBadge.all(function(err, nominatedBadges) {
      self.respondWith(nominatedBadges, {type:'NominatedBadge'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , nominatedBadge = geddy.model.NominatedBadge.create(params);

    if (!nominatedBadge.isValid()) {
      this.respondWith(nominatedBadge);
    }
    else {
      nominatedBadge.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(nominatedBadge, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.NominatedBadge.first(params.id, function(err, nominatedBadge) {
      if (err) {
        throw err;
      }
      if (!nominatedBadge) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(nominatedBadge);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.NominatedBadge.first(params.id, function(err, nominatedBadge) {
      if (err) {
        throw err;
      }
      if (!nominatedBadge) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(nominatedBadge);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.NominatedBadge.first(params.id, function(err, nominatedBadge) {
      if (err) {
        throw err;
      }
      nominatedBadge.updateProperties(params);

      if (!nominatedBadge.isValid()) {
        self.respondWith(nominatedBadge);
      }
      else {
        nominatedBadge.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(nominatedBadge, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.NominatedBadge.first(params.id, function(err, nominatedBadge) {
      if (err) {
        throw err;
      }
      if (!nominatedBadge) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.NominatedBadge.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(nominatedBadge);
        });
      }
    });
  };

};

exports.NominatedBadges = NominatedBadges;
