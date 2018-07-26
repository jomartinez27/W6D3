const FollowToggle = require("./follow_toggle.js");
const UserSearch = require('./users_search.js');

$( () => {
  // Your code here
  const followButtons = $('.follow-toggle');
  followButtons.each((index, element) => {
    new FollowToggle($(element));
  });
  
  const usersSearchs = $('.users-search');
  usersSearchs.each((index, user) => {
    new UserSearch($(user));
  });
});