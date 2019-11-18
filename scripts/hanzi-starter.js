function onStart() {
  if (window.HanziWriter != null) {
    var hanzi = document.getElementById("hanzi");
    var entry = document.getElementById("character-target");
    if (hanzi != null && entry != null) {
      var leniency = 1.0;
      if (document.getElementById("leniency"))
        leniency = document.getElementById("leniency").innerHTML * 1;
      
      prepareHanzi(
        hanzi.innerHTML, 
        entry, 
        leniency,
        document.getElementById("pinyin"),
        document.getElementById("hint-button")
      );
    }
  }
}

function waitForScript() {
  setTimeout(function() {
    if (window.HanziWriter != null) onStart();
    else waitForScript();
  }, 10);
}

waitForScript();