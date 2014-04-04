var payButton = document.getElementById('pay');
var amountInput = document.getElementById('amount');

var handler = StripeCheckout.configure({
  key: 'pk_live_MQhN5CuHpu9maQ07HQlVpFMB',
  token: function (token) {
    var data = {
      token: token.id,
      amount: amountInput.value
    };

    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
      if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
        location.href = '/sponsor/charge/success';
      } else if (req.readyState === XMLHttpRequest.DONE && req.status !== 200) {
        location.href = '/sponsor/charge/error';
      }
    };

    req.open("POST", "/sponsor/charge", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(data));
  }
});

payButton.addEventListener('click', function (e) {
  e.preventDefault();

  handler.open({
    name: 'Node Philly',
    description: '2014 Conference Sponsorship',
    image: '/images/yo-philly-nodes.png',
    amount: amountInput.value,
    allowRememberMe: false,
  });
});
