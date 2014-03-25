exports.index = function (req, res) {
  res.render('index', {
    title: 'Node Philly 2014'
  });
};

exports.sponsor = function (req, res) {
  res.render('sponsor', {
    title: 'Node Philly 2014 :: Sponsorship'
  });
};
