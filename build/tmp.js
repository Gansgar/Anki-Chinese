const syllables = [
	"a",
	"ai",
	"an",
	"ang",
	"ao",
	"ba",
	"bai",
	"ban",
	"bang",
	"bao",
	"bei",
	"ben",
	"beng",
	"bi",
	"bian",
	"biao",
	"bie",
	"bin",
	"bing",
	"bo",
	"bu",
	"ca",
	"cai",
	"can",
	"cang",
	"cao",
	"ce",
	"cei",
	"cen",
	"ceng",
	"cha",
	"chai",
	"chan",
	"chang",
	"chao",
	"che",
	"chen",
	"cheng",
	"chi",
	"chong",
	"chou",
	"chu",
	"chua",
	"chuai",
	"chuan",
	"chuang",
	"chui",
	"chun",
	"chuo",
	"ci",
	"cong",
	"cou",
	"cu",
	"cuan",
	"cui",
	"cun",
	"cuo",
	"da",
	"dai",
	"dan",
	"dang",
	"dao",
	"de",
	"dei",
	"den",
	"deng",
	"di",
	"dian",
	"diao",
	"die",
	"ding",
	"diu",
	"dong",
	"dou",
	"du",
	"duan",
	"dui",
	"dun",
	"duo",
	"e",
	"ei",
	"en",
	"er",
	"fa",
	"fan",
	"fang",
	"fei",
	"fen",
	"feng",
	"fo",
	"fou",
	"fu",
	"ga",
	"gai",
	"gan",
	"gang",
	"gao",
	"ge",
	"gei",
	"gen",
	"geng",
	"gong",
	"gou",
	"gu",
	"gua",
	"guai",
	"guan",
	"guang",
	"gui",
	"gun",
	"guo",
	"ha",
	"hai",
	"han",
	"hang",
	"hao",
	"he",
	"hei",
	"hen",
	"heng",
	"hm",
	"hng",
	"hong",
	"hou",
	"hu",
	"hua",
	"huai",
	"huan",
	"huang",
	"hui",
	"hun",
	"huo",
	"ji",
	"jia",
	"jian",
	"jiang",
	"jiao",
	"jie",
	"jin",
	"jing",
	"jiong",
	"jiu",
	"ju",
	"juan",
	"jue",
	"jun",
	"ka",
	"kai",
	"kan",
	"kang",
	"kao",
	"ke",
	"kei",
	"ken",
	"keng",
	"kong",
	"kou",
	"ku",
	"kua",
	"kuai",
	"kuan",
	"kuang",
	"kui",
	"kun",
	"kuo",
	"lü",
	"la",
	"lai",
	"lan",
	"lang",
	"lao",
	"le",
	"lüe",
	"lei",
	"leng",
	"li",
	"lia",
	"lian",
	"liang",
	"liao",
	"lie",
	"lin",
	"ling",
	"liu",
	"long",
	"lou",
	"lu",
	"luan",
	"lun",
	"luo",
	"m",
	"ma",
	"mai",
	"man",
	"mang",
	"mao",
	"me",
	"mei",
	"men",
	"meng",
	"mi",
	"mian",
	"miao",
	"mie",
	"min",
	"ming",
	"miu",
	"mo",
	"mou",
	"mu",
	"n",
	"nü",
	"na",
	"nai",
	"nan",
	"nang",
	"nao",
	"ne",
	"nüe",
	"nei",
	"nen",
	"neng",
	"ng",
	"ni",
	"nian",
	"niang",
	"niao",
	"nie",
	"nin",
	"ning",
	"niu",
	"nong",
	"nou",
	"nu",
	"nuan",
	"nuo",
	"o",
	"ou",
	"pa",
	"pai",
	"pan",
	"pang",
	"pao",
	"pei",
	"pen",
	"peng",
	"pi",
	"pian",
	"piao",
	"pie",
	"pin",
	"ping",
	"po",
	"pou",
	"pu",
	"qi",
	"qia",
	"qian",
	"qiang",
	"qiao",
	"qie",
	"qin",
	"qing",
	"qiong",
	"qiu",
	"qu",
	"quan",
	"que",
	"qun",
	"ran",
	"rang",
	"rao",
	"re",
	"ren",
	"reng",
	"ri",
	"rong",
	"rou",
	"ru",
	"rua",
	"ruan",
	"rui",
	"run",
	"ruo",
	"sa",
	"sai",
	"san",
	"sang",
	"sao",
	"se",
	"sei",
	"sen",
	"seng",
	"sha",
	"shai",
	"shan",
	"shang",
	"shao",
	"she",
	"shei",
	"shen",
	"sheng",
	"shi",
	"shou",
	"shu",
	"shua",
	"shuai",
	"shuan",
	"shuang",
	"shui",
	"shun",
	"shuo",
	"si",
	"song",
	"sou",
	"su",
	"suan",
	"sui",
	"sun",
	"suo",
	"ta",
	"tai",
	"tan",
	"tang",
	"tao",
	"te",
	"teng",
	"ti",
	"tian",
	"tiao",
	"tie",
	"ting",
	"tong",
	"tou",
	"tu",
	"tuan",
	"tui",
	"tun",
	"tuo",
	"wa",
	"wai",
	"wan",
	"wang",
	"wei",
	"wen",
	"weng",
	"wo",
	"wu",
	"xi",
	"xia",
	"xian",
	"xiang",
	"xiao",
	"xie",
	"xin",
	"xing",
	"xiong",
	"xiu",
	"xu",
	"xuan",
	"xue",
	"xun",
	"ya",
	"yan",
	"yang",
	"yao",
	"ye",
	"yi",
	"yin",
	"ying",
	"yong",
	"you",
	"yu",
	"yuan",
	"yue",
	"yun",
	"za",
	"zai",
	"zan",
	"zang",
	"zao",
	"ze",
	"zei",
	"zen",
	"zeng",
	"zha",
	"zhai",
	"zhan",
	"zhang",
	"zhao",
	"zhe",
	"zhei",
	"zhen",
	"zheng",
	"zhi",
	"zhong",
	"zhou",
	"zhu",
	"zhua",
	"zhuai",
	"zhuan",
	"zhuang",
	"zhui",
	"zhun",
	"zhuo",
	"zi",
	"zong",
	"zou",
	"zuan",
	"zui",
	"zun",
	"zuo",
	"zu"
]
// const syllables = loadSyllables();

const normalizePinyin = pinyin => {
  pinyin = pinyin.normalize('NFD').replace(/\u0304|\u0301|\u030c|\u0300/g, '')
  return pinyin.normalize('NFC').replace(/(\w|ü)[1-5]/gi, '$1').toLowerCase()
}

const split = (text, everything=false, wrapInList=false) => {
  const list = []
  let prevWordFound = false
  let wordEnd = text.length
  while (wordEnd > 0) {
    let count = wordEnd
    let wordFound = false
    while (count > 0) {
      const word = text.substring(wordEnd - count, wordEnd)
      if (syllables.includes(normalizePinyin(word))) {
        wordFound = true
        list.push(wrapInList ? [word] : word)
        wordEnd -= (count - 1)
        break
      }
      count--
    }
    if (!wordFound && everything) {
      const prevIndex = list.length - 1
      const prevEntry = list[prevIndex]
      if (wordEnd === text.length || typeof prevEntry === 'object' || prevWordFound) {
        list.push(text[wordEnd - 1])
      }
      else if (typeof prevEntry === 'string') {
        list[prevIndex] = text[wordEnd - 1] + prevEntry
      }
    }
    wordEnd --
    prevWordFound = wordFound
  }
  return list.reverse()
}

window.pinyin_split = split;var hanziWriter;

function loadCharacter(char, onComplete) {
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
      else
        document.body.append("An error occured during download of data (" + r.status + ")");
    }
  }
}

function prepareHanzi(hanzi, target_div, leniency, pinyin_elem, hint_button) {
  if (hanziWriter != null)
    hanziWriter.cancelQuiz();

  while(target_div.firstChild)
    target_div.removeChild(target_div.firstChild);
        
  var data = {
    width: target_div.clientWidth,
    height: target_div.clientWidth,
    showCharacter: false,
    showOutline: false,
    highlightOnComplete: true,
    leniency: leniency,
    padding: 0,
    charDataLoader: loadCharacter
  };

  hanziWriter = HanziWriter.create(target_div.id, hanzi[0], data);

  // removing all color
  let pinyin_text = "";
  if (pinyin_elem != null) {
    pinyin_elem.innerHTML = pinyin_elem.innerText;
    pinyin_text = pinyin_elem.innerText;
  }

  var index = 0;
  var currentStroke;

  function startQuiz() {
    currentStroke = -1;
    if (pinyin_elem != null) { 
      var split = pinyin_split(pinyin_text, true, true);
      var text = "";
      let i = 0;
      for(let ele of split) {
        if (Array.isArray(ele)) {
          if (i == index)
            text += "<u>" + ele[0] + "</u>";
          else
            text += ele[0];
          i++;
        } else
          text += ele;
      }
      pinyin_elem.innerHTML = text;
    
      /* In case I want the color back
      var elems = pinyin_elem.getElementsByTagName("span");
      for(let i=0; i<elems.length; i++) {
        elems[i].textDecoration = (i == index) ? "underline" : "none";
      }*/
    }
    hanziWriter.quiz({
      onComplete: function(summaryData) {
        setTimeout(function() {  // delay so animation finished
          if (++index < hanzi.length) {
              
              hanziWriter.setCharacter(hanzi[index]);
              startQuiz();
          } else {
            hanziWriter.cancelQuiz();
            target_div.innerHTML = "✓";
            target_div.classList.add("done");
          }
        }, 1000);
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
