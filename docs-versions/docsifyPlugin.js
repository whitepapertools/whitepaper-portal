window.$docsify = {
  plugins: [
    function(hook, vm) {
      hook.init(function() {
        var elem = document.getElementById('sidebar-toggle');
        elem.style.visibility = 'false';
      });
    }
  ]
};
