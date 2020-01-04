var hanziWriter;

function loadCharacter(char, onComplete, onError) {
  if (" ()-/".includes(char)) {
    onError("Invalid char")
    return
  }
  
  var r = new XMLHttpRequest;
  r.overrideMimeType("application/json");
  r.open("GET", "https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/" + char + ".json", !0);
  r.send(null);
  r.onerror = function(t) {
    document.body.append("An error occured during transation (" + t + ")");
  }
  r.onreadystatechange = function() {
    if (r.readyState === XMLHttpRequest.DONE) {
      if (r.status === 200)
        onComplete(JSON.parse(r.responseText))
      else if (r.status === 404) {
        onError("Character couldn't be found")
      } else
        document.body.append("An error occured during download of data (" + r.status + ")");
    }
  }
}

function prepareHanzi(hanzi, target_div, leniency, pinyin_elem, hint_button) {
  if (hanziWriter != null)
    hanziWriter.cancelQuiz();

  //while(target_div.firstChild)
  //  target_div.removeChild(target_div.firstChild);
  let size = Math.min(target_div.clientWidth, 512, window.innerHeight * 2/3);
  let style_e = target_div.getElementsByClassName("background-svg")[0].style;
  style_e.width = style_e.height = size;

  var index = 0;
  var currentStroke;

  // removing all color
  let pinyin_text = "";
  if (pinyin_elem != null) {
    pinyin_elem.innerHTML = pinyin_elem.innerText;
    pinyin_text = pinyin_elem.innerText;
  }

  var nextCharacter = function() {  // delay so animation finished
    if (++index < hanzi.length) {
      hanziWriter.setCharacter(hanzi[index]);
      startQuiz();
    } else {
      hanziWriter.cancelQuiz();
      if (hint_button != null)
        hint_button.hidden = true;
      if (pinyin_elem != null)
        pinyin_elem.innerHTML = pinyin_text + " ("+hanzi+ ") ✓";
    }
  };

  var data = {
    width: size,
    height: size,
    showCharacter: false,
    showOutline: false,
    highlightOnComplete: true,
    strokeColor: '#000',
    leniency: leniency,
    padding: 0,
    charDataLoader: loadCharacter,
    onLoadCharDataError: nextCharacter
  };

  hanziWriter = HanziWriter.create(target_div.id, hanzi[0], data);

  function startQuiz() {
    currentStroke = -1;
    if (pinyin_elem != null) { 
      var split = pinyin_split(pinyin_text, true, true);
      var text = "";
      let i = 0;
      var hanz = hanzi.substr(0, index)
      for(let ele of split) {
        if (Array.isArray(ele)) {
          if (i == hanz.replace(/\s/g, '').length) {
            text += "<u>" + ele[0] + "</u>";
          } else
            text += ele.toString()
          i++
        } else {
          text += ele
          i += ele.replace(/\s/g, '').length
        }
      }
      pinyin_elem.innerHTML = text + " (" + hanz + "…)";
    
      /* In case I want the color back
      var elems = pinyin_elem.getElementsByTagName("span");
      for(let i=0; i<elems.length; i++) {
        elems[i].textDecoration = (i == index) ? "underline" : "none";
      }*/
    }
    hanziWriter.quiz({
      onComplete: function(summaryData) {
        setTimeout(nextCharacter, 1000);
      },
      onCorrectStroke: function(strokeData) {
        currentStroke = strokeData.strokeNum; 
      }
    });
  }

  startQuiz();

  if (hint_button != null) {
    hint_button.onclick = function() {
    // hanziWriter.showOutline();
    // setTimeout(function() {
    //   hanziWriter.hideOutline();
    // }, 3000);
      hanziWriter.highlightStroke(currentStroke + 1)
    }
  }

}
