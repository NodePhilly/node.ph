
/*
 * GET home page.
 */
exports.tweets = function(req, res){
    var twit = require('twit');

    var t = new twit(
        {
            consumer_key:'JhNVwgWLMwaqR8pglFLbQ',
            consumer_secret:'LB4NNhUkWvTTBUe9A6i1xOPSmmLtquRZIKvxp2genwU',
            access_token:'126735617-g5CyGPPrb9jnbHzfmbgn4zNDZM5VNiBDN0dvK4TZ',
            access_token_secret:'UMdk9L0K3cYsHLGxepYb7gWkJF8x6tJmKDi6BIrzc'
        }
    );

    var response = t.get('statuses/user_timeline', { screen_name: 'NodePhilly' }, function(err, response) {
            if (err)
                console.log("Error: " + err);
            else {
                for (index = 0; index < response.length; ++index) {
                    console.log(response[index].created_at);
                    console.log(response[index].text);
                }
            }
            return response;
        }
    );

    res.send(response);
};