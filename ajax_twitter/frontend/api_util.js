const APIUtil = {
  
  followUser: function(id){
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'json'
    });
  },
  
  unfollowUser: function(id){
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json'
    });
  },
  
  searchUsers: function(queryVal, success){
    return $.ajax({
      url: "users/search",
      method: "GET",
      dataType: "json"
    });
  }
};


module.exports = APIUtil;