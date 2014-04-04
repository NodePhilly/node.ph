var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.index = function (req, res){
  res.render('sponsor');
};

exports.charge = function (req, res) {
  var params = {
    amount: req.body.amount,
    currency: 'USD',
    description: 'Node Philly 2014 Sponsorship',
    card: req.body.token
  };

  stripe.charges.create(params, function (err, result) {
    if (err) {
      return res.send(500);
    }

    res.send();
  });
};

exports.chargeSuccess = function (req, res) {
  res.render('sponsor/success');
};

exports.chargeError = function (req, res) {
  res.render('sponsor/error');
};
