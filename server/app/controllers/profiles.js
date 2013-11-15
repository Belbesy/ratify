var Profiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Profile.all(function(err, profiles) {
      self.respondWith(profiles, {type:'Profile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , profile = geddy.model.Profile.create(params);

    if (!profile.isValid()) {
      this.respondWith(profile);
    }
    else {
      profile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(profile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Profile.first(params.id, function(err, profile) {
      if (err) {
        throw err;
      }
      if (!profile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(profile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Profile.first(params.id, function(err, profile) {
      if (err) {
        throw err;
      }
      if (!profile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(profile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Profile.first(params.id, function(err, profile) {
      if (err) {
        throw err;
      }
      profile.updateProperties(params);

      if (!profile.isValid()) {
        self.respondWith(profile);
      }
      else {
        profile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(profile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Profile.first(params.id, function(err, profile) {
      if (err) {
        throw err;
      }
      if (!profile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Profile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(profile);
        });
      }
    });
  };

};

exports.Profiles = Profiles;
