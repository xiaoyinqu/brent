var JSX = require('node-jsx').install(),
  React = require('react'),
  TweetsApp = require('./components/TweetsApp.react'),
  Tweet = require('./models/Tweet');

module.exports = {

  index: function(req, res) {
      var eductaion = {'school' : 'Pomona College',
                       'start'  : '02/05/2010',
                       'end'    : '02/22/2014',
                       'description' : 'my education'}
      var markup = React.renderComponentToString(
        TweetsApp({
            tweets: tweets
        })
      );

      // Render our 'home' template
      res.render('profile', {
        markup: markup, // Pass rendered react markup
        state: JSON.stringify(tweets) // Pass current state to client side
      });
  }
}
