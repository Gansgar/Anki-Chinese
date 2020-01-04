(function(d) {
  try { 
    Typekit.config
  } catch(e) {
    var config = {
      kitId: 'wps6sgm',
      scriptTimeout: 3000,
      async: true
    }
    var h = d.documentElement
    var t = setTimeout(function() {
      h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
    }, config.scriptTimeout)
    var tk = d.createElement("script")
    var f = false
    var s = d.getElementsByTagName("script")[0]
    var a
    
    h.className += " wf-loading";
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
    tk.async = true;
    tk.onload = tk.onreadystatechange = function() {
      a = this.readyState;
      if (f || a && a != "complete" && a != "loaded") return;
      f = true;
      clearTimeout(t);
      try {
        Typekit.load(config)
      } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s)
  }
})(document);
