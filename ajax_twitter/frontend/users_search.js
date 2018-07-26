class UsersSearch {
  constructor($el) {
    this.input = $el.find('input');
    this.ul = $("<ul class='users'></ul>");
    this.$el = $el;
  }
}

module.exports = UsersSearch;