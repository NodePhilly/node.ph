exports.index = function (req, res) {
  res.render('index', {
    title: 'Node Philly 2014'
  });
};

exports.sponsor = require('./sponsor');
