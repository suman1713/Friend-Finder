//require friends data
var friends = require("../data/friends");

module.exports = function(app) {
  // get friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // post user data:
  app.post("/api/friends", function(req, res) {
    
    // analyze/culminate data / determine best match for each clown
    var match = {
      name: "",
      photo: "",
      friendDiff: Infinity
    };

      var userData = req.body;
      var userScores = userData.scores;

        // Calculate difference between the users scores vs database users scores
        var diff;

    // iterate over all friend possibilities in database
    for (var i = 0; i < friends.length; i++) {
            var f = friends[i];
            diff = 0;
            console.log(f.name);

              // iterate over all scores for all friends in database
              for (var j = 0; j < f.scores.length; j++) {
                    var fScore = f.scores[j];
                    var uScore = userScores[j];

                      // find difference between the scores and sum them into 'diff' varabile
                      diff += Math.abs(parseInt(uScore) - parseInt(fScore));
              }

            // If the sum of differences is less then the differences of the current "best match"
            if (diff <= match.friendDiff) {
            // Reset the bestMatch to be the new friend.
                match.name = f.name;
                match.photo = f.photo;
                match.friendDiff = diff;
            }
    }
    // Push user data into database array.
    friends.push(userData);

    // Return a JSON with user's 'match.'
    res.json(match);
  });
};
