
/*
 * GET home page.
 */
exports.tweets = function(req, res){
    var twit = require('twit');
    var twitconfig = require('../twitter_cred.json');

    var t = new twit(
        {
            consumer_key:twitconfig.consumer_key,
            consumer_secret:twitconfig.consumer_secret,
            access_token:twitconfig.access_token,
            access_token_secret:twitconfig.access_token_secret
        }
    );

    var response = t.get('statuses/user_timeline', { screen_name: 'NodePhilly' }, function(err, response) {
            if (err)
                console.log("Error: " + err);
            else {
                var tweets = [];
                var tweetpics = [];
                for (index = 0; index < response.length; ++index) {
                    tweets.push({
                        created_at: response[index].created_at,
                        text: response[index].text
                    });
                    if (response[index].entities.media != undefined) {
                        tweetpics.push({
                            created_at: response[index].created_at,
                            text: response[index].text,
                            media: response[index].entities.media[0].media_url
                        })
                    }
                }
            }
            console.log(tweets);
            console.log(tweetpics);
            //res.send(tweetpics);
            res.render('twitter', { tweets: tweets, tweetpics: tweetpics });
        }
    );
};



function parseCreatedDate(date)
{
    var date = new Date(date);
    console.log(date);
    //return date.substr(0, 11) + ' ' + hour + ':' + date.substr(13) + ampm;
}