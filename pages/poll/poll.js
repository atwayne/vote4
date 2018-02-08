Page({
  data: {
    options: ['', '']
  },
  deletOption: function (e) {
    var option = e.target.dataset.option;
    this.data.options.splice(option, 1);
    this.refreshOptions();
  },
  addOption: function () {
    this.data.options.push('');
    this.refreshOptions();
  },
  refreshOptions: function () {
    this.setData({ options: this.data.options });
  },
  submitPoll: function (e) {
    var poll = e.detail.value;
    poll.options = this.data.options;
    console.log(poll);
  }
})