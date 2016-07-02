// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '603682516969-jm24bvvd4ndumj09trar1jf05b0v9ol7.apps.googleusercontent.com',
        'clientSecret'  : '4NifqliyuK_jMZElZcDLEeOt',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};