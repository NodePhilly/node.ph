
/*
 * GET home page.
 */

exports.tweets = function (req, res, next) {
    getTwitterData('tweets', function (err, tweets) {
        if (err) {
            return next(err);
        }
        res.send(tweets);
    });
};

exports.tweetpics = function (req, res, next) {
    getTwitterData('tweetpics', function (err, tweetpics) {
        if (err) {
            return next(err);
        }
        res.send(tweetpics);
    });
};

function getTwitterData(type, callback) {
    var tweets = [];
    var tweetpics = [];

    var twit = require('twit');
    var twitconfig = require('../twitter_cred.json');

    var t = new twit(
        {
            consumer_key: twitconfig.consumer_key,
            consumer_secret: twitconfig.consumer_secret,
            access_token: twitconfig.access_token,
            access_token_secret: twitconfig.access_token_secret
        }
    );

    t.get('statuses/user_timeline', { screen_name: 'NodePhilly' }, function (err, res) {
        if (err) {
            console.log("Error: " + err);
        } else {
            for (index = 0; index < res.length; ++index) {
                tweets.push({
                    created_at: res[index].created_at,
                    text: res[index].text
                });
                if (res[index].entities.media !== undefined) {
                    tweetpics.push({
                        created_at: res[index].created_at,
                        text: res[index].text,
                        media: res[index].entities.media[0].media_url
                    });
                }
            }
        }
        console.log(Date.now());
        if (type === 'tweets') {
            console.log('sending tweets');
            return callback(null, tweets);
        } else if (type === 'tweetpics') {
            console.log('sending tweetpics');
            return callback(null, tweetpics);
        }
    });
}

function parseCreatedDate(date) {
    console.log(new Date(date));
    //return date.substr(0, 11) + ' ' + hour + ':' + date.substr(13) + ampm;
}