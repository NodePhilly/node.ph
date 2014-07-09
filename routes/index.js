var fs = require('fs');
var path = require('path');

exports.index = function (req, res) {

  fs.readdir(path.resolve('./public/images/homepageimages'), function (err, files) {
    if (err) {
      return res.send(500, err);
    }

    var low = 0;
    var high = files.length;
    var imageIndex = Math.floor(Math.random() * (high - low) + low);
    var titleImageUrl = files[imageIndex];

    res.render('index', {
      title: 'Node Philly',
      titleImageUrl: titleImageUrl
    });
  });

};
