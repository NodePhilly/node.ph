exports.index = function (req, res){
  if (req.query && req.query.amount) {
    res.render('sponsor/result', {
      message: 'Thank you for your $' + (req.query.amount / 100) + ' sponsorship! A receipt should have been sent to your inbox. If you have any questions at all, please contact the Node Philly Team at team@node.ph'
    });
  } else {
    res.render('sponsor', {
      publishableKey: 'pk_test_sW4GNqFfDoNHa4uZH05BIU4w'
    });
  }
};
