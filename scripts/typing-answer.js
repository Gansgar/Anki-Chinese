window.typing_field = document.getElementById("typing-pinyin")

function init_type_question() {
  window.answer_bak = window.answer;
  window.pinyin = window.answer = undefined;
  if (document.getElementById("typeans") === null && typing_field !== null) {
    pinyin = typing_field.innerText.trim();

    typing_field.hidden = false;
    typing_field.innerHTML = "<input type='text' id='typeans' onkeypress='_myTypeAnsKey()'>";
  }
}

function init_type_answer() {
  if (pinyin !== undefined && answer_bak !== undefined) {
    document.getElementById("typing-orig").hidden = true;
    typing_field.innerHTML = "Loading...";
    typing_field.hidden = false;

    checkDiffPatchMatch()
  }
}

function set_result() {
  var dmp = new diff_match_patch(); 
  result = dmp.diff_main(answer_bak, pinyin);
  answer_bak = undefined;

  var get_span = (mod, text) => `<span class='type${mod}'>${text}</span>`;

  var stringTyped = "";
  var stringCorrect = "";
  for (e of result) {
    if (e[0] < 0)
      stringTyped += get_span("Bad", e[1])
    else if(e[0] > 0)
      stringCorrect += get_span("Missed", e[1])
    else {
      var tmp = get_span("Good", e[1])
      stringTyped += tmp; 
      stringCorrect += tmp;
    }
  }

  typing_field.innerHTML = "<code id='typeans'>" + stringTyped + "<br>↓<br>" + stringCorrect + "</code>";
  typing_field.hidden = false
}

function checkDiffPatchMatch() {
  if (window.diff_match_patch != null)
    set_result();
  else {
    setTimeout(function() {
        checkDiffPatchMatch();
    }, 200);
  }
}

function _myTypeAnsKey() {
  if (window.event.keyCode === 13 && window.study !== undefined && window.study.drawAnswer !== undefined)
    study.drawAnswer()
    
  answer = document.getElementById("typeans").value.trim();
}

init_type_question()