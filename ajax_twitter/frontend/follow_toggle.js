const APIUtil= require('./api_util.js');

class FollowToggle {
  constructor($el){
    this.userId = $el.data('userid');
    this.followState = $el.data('followstate');
    this.$el = $el;
    this.render();
    this.setEventHandlers();
  }
  
  render() {
    if (this.followState === false) {
      $(this.$el).text('Follow');
    } else {
      $(this.$el).text('Unfollow');
    }
    this.$el.prop('disabled', false);
  }
  
  setEventHandlers(){
    this.$el.on('click', (e) => {
    e.preventDefault();
    this.handleClick();
    });
  }
  
  handleClick() {
    this.$el.prop('disabled', true);
    
    const id = this.userId;
    
    if (this.followState === false) {
    APIUtil.followUser(id).then(() => {
          this.followState = true;
          this.render();
        });
    } else {
    APIUtil.unfollowUser(id).then(() => {
          this.followState = false;
          this.render();
      });
    }
  }
} 



module.exports = FollowToggle;