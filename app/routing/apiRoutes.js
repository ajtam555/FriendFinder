var friends = require('../data/friends.js');
var path = require('path');
var express = require('express');
var router = express.Router();

router.post('/api/friends', function(req, res) {
    var newFriend = req.body;
    friends.push(newFriend);
    console.log(newFriend);
    return res.json(newFriend);
});

router.get('/api/friends', function(req, res) {
    var friendsData = friends.get();
    console.log(friendsData);
    return res.json(friendsData);
});

module.exports = router;

