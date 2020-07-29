
AFRAME.registerComponent('navigate-on-click', {
    schema: {
      url: {default: ''}
    },

    init: function () {
      var data = this.data;
      var el = this.el;

      el.addEventListener('click', function () {
        window.top.location.href = data.url;
      });
    }
  }); 

	function startTimer() {
	timeoutID = window.setTimeout(goInactive, 2000);
	document.querySelector('#cam').emit('idle');
}