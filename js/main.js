var dt1 = Date.now(), dt2 = Date.now();
let tmp = {
  number: E(1),
  multi: E(1),
  rank: E(1),
  prestige: E(0),
  transcension: E(0),
  grades: "Z⇓",
  automultiGot: false,
  autorankGot: false,
  autoprestigeGot: false,
  autotranscensionGot: false,
  statsPerSecond: E(0.01),
  layerRequired: E(5),
  multiRequirement: E(25),
  automultiReq: E(2),
  automulti: false,
  rankRequirement: E(4),
  autorankReq: E(4),
  autorankup: false,
  prestigeRequirement: E(100),
  autoprestigeReq: E(6),
  autoprestige: false,
  transcensionRequirement: E(10),
  autotranscensionReq: E(2),
  autotranscension: false,
  setts: {
    tab: "stats"
  },
  tabs: Elements.addButton("Stats", "setTab(1)", {backgroundColor: "#999", color: "#fff"})
  + Elements.addButton("Options", "setTab(2)", {backgroundColor: "#999", color: "#fff"}),
  stats: "",
  options: Elements.addButton("HARD RESET", "hardReset()", {backgroundColor: "#f00", color: "#f55"}),
};
function rainbowTransition(hue,saturation=80,luminence=80) {
  hue = E(hue).floor();
  saturation = Math.floor(saturation);
  luminance = Math.floor(luminence);
  return `hsl(${hue.add(1).mod(360)}, ${Math.floor(saturation)}%, ${Math.floor(luminance)}%)`;
}
function setTab(n) {
  let tabs = ["stats", "options"]
  for (let i = 0; i < tabs.length; i++) {
    document.getElementsByClassName(tabs[i]).style.display = "none";
  }
  document.getElementsByClassName(tabs[n-1]).style.display = "block";
}
function titleCase(n) {
  n[0].replace(n[0], n[0].toUpperCase());
  return n;
}
function addStatButtons(n, previous, previousauto, hue, saturation=100, luminance) {
  let q;
  if (n == "rank") {
    q = Elements.setHTML(
      Elements.setHTML(
        titleCase("Rank {{rank}} ({{grades}})")
        , "tiny",
        {color: rainbowTransition(tmp[n].log(tmp.layerRequired).floor().log(1.05), 100, 50), shadowX: 0, shadowY: 0, shadowBlur: (tmp[n].gte(100) ? "10px" : (tmp.number.log(tmp.layerRequired).floor().div(10), 100, 60)}
      )
      +
      Elements.addButton(
        (previous.gte(tmp[n + "Requirement"])) ? titleCase(n + " up!") : ("Not enough to " + n + " up")
      , `${n}()`, {backgroundColor: rainbowTransition(hue, saturation, luminance), color: rainbowTransition(hue, saturation, luminance+20)})
      +
      Elements.addButton(
        (tmp[previousauto].gte(tmp["auto" + n + "Req"])) ? ((tmp["auto" + n]) ? "auto: ON" : "auto: OFF") : "unable to automate"
      , `auto${n}()`, {backgroundColor: rainbowTransition(hue, saturation, luminance), color: rainbowTransition(hue, saturation, luminance+20)})
    , "div", {width: "400px"})
  } else {
    q = Elements.setHTML(
      Elements.setHTML(
        titleCase(n + " " + tmp[n])
        , "tiny",
        {color: rainbowTransition(hue, saturation, luminance), shadowX: 0, shadowY: 0, shadowBlur: (tmp[n].gte(100) ? "10px" : (hue, saturation, luminance)}
      )
      +
      Elements.addButton(
        (previous.gte(tmp[n + "Requirement"])) ? titleCase(n + " up!") : ("Not enough to " + n + " up")
      , `${n}()`, {backgroundColor: rainbowTransition(hue, saturation, luminance), color: rainbowTransition(hue, saturation, luminance+20)})
      +
      Elements.addButton(
        (tmp[previousauto].gte(tmp["auto" + n + "Req"])) ? ((tmp["auto" + n]) ? "Auto: ON" : "Auto: OFF") : "Unable to automate"
      , `auto${n}()`, {backgroundColor: rainbowTransition(hue, saturation, luminance), color: rainbowTransition(hue, saturation, luminance+20)})
    , "div", {width: "400px"})
  }
  return q;
}
const funcs = {
  update: function() {
    dt2 = Date.now();
    let dt = (dt2 - dt1) / 1000;
    dt1 = Date.now();
    tmp.number = tmp.number.mul(E(5).pow(tmp.statsPerSecond.div(1000/dt)));
    tmp.statsPerSecond = tmp.multi.div(E(40)).mul(tmp.number.mul(2).log(2).mul(6).log(6)).mul(E(2).pow(tmp.rank.sub(1))).mul(E(1e3).pow(tmp.prestige)).mul(E(1e30).pow(tmp.transcension))
    tmp.rankRequirement = E(4).mul(E(16).pow(tmp.rank.sub(1)))
    tmp.prestigeRequirement = E(100).mul(E(2).pow(tmp.prestige))
    tmp.transcensionRequirement = E(10).mul(E(2.5).pow(tmp.transcension)).floor()
    if (tmp.prestige.gte(tmp.automultiReq)) {
      tmp.automultiGot = true;
    }
    if (tmp.prestige.gte(tmp.autorankReq)) {
      tmp.autorankGot = true;
    }
    if (tmp.prestige.gte(tmp.autoprestigeReq)) {
      tmp.autoprestigeGot = true;
    }
    if (tmp.transcension.gte(tmp.autotranscensionReq)) {
      tmp.autotranscensionGot = true;
    }
    tmp.grades = rankGrades(tmp.rank);
    tmp.stats = Elements.setHTML("Epilepsy warning when you get high stats! This is an inspiration of \"SamirDevs AFK Incremental\"", "tiny", {color: "#f77"})
    + addStatButtons("multi", "number", "prestige", 360, 100, 50)
    + addStatButtons("rank", "multi", "prestige", 120, 100, 50)
    + addStatButtons("prestige", "rank", "prestige", 240, 100, 50)
    + addStatButtons("transcension", "prestige", "transcension", 360, 0, 50)
    + Elements.setHTML("", "p") + Elements.setHTML("{{number.log(layerRequired)}}", "default", {}, "if=\"tmp.number.lte(E(5)).pow(52*(53**9))\"") + Elements.setHTML("Stats: ", "default", {}, "else") + Elements.setHTML("{{number.log(layerRequired)}} ", "small", {color: rainbowTransition(tmp.number.log(tmp.layerRequired).floor().log(1.05)), shadowX: 0, shadowY: 0, shadowBlur: (tmp.number.gte(5**100) ? "10px" : (tmp.number.log(tmp.layerRequired).floor().div(10))}) + Elements.setHTML(" (+{{statsPerSecond}} stats/sec)", "small") + Elements.setHTML("", "p") + Elements.setHTML("This is also {{number}}a.", "tiny");
    document.getElementById("tabs").innerHTML = tmp.tabs;
    document.getElementsByClassName("stats").innerHTML = tmp.stats;
    document.getElementsByClassName("options").innerHTML = tmp.options;
  },
  getSaveCode: function() {
    return btoa(unescape(encodeURIComponent(JSON.stringify(tmp))));
  },
  saveGame: function(){
    let str = funcs.getSaveCode();
    localStorage.setItem("AbsoluteLayerumGameSave", str);
  },
  loadGame: function(importString) {
    let loadVal = function(v, alt) {
      return v !== undefined ? v : alt;
    }

    let item = importString !== undefined ? importString : localStorage.getItem("AbsoluteLayerumGameSave");
    if(item !== null)
    {
      let obj;
      try
      {
        obj = JSON.parse(decodeURIComponent(escape(atob(item))));
      }
        catch(e)
      {
        alert("Error: " + e);
        return;
      }
      tmp.number = loadVal(E(obj.number), E(1));
      tmp.statsPerSecond = loadVal(E(obj.statsPerSecond), E(0.01));
      tmp.multi = loadVal(E(obj.multi), E(1));
      tmp.rank = loadVal(E(obj.rank), E(1));
      tmp.prestige = loadVal(E(obj.prestige), E(0));
      tmp.transcension = loadVal(E(obj.transcension), E(0));
    }
  },
  hardReset: function() {
    let times = 3;
    do {
      if (!confirm("Are you sure you want to reset all your progress?\nYou will lose everything.\nClick " + times + " more times and you will lose everything.")) {
        break;
      }
      times--;
    } while (times > 0)
    if (times === 0) {
      localStorage.removeItem("AbsoluteLayerumGameSave");
      this.loadGame(this.getSaveCode());
      this.saveGame();
      setTab(1);
    }
  }
}
let onCreate = function()
{
    let initialGame = funcs.getSaveCode();

    funcs.loadGame(initialGame);

    funcs.update();
}
var app = new Vue({
  el: "#app",
  data: tmp,
  computed: false,
  methods: funcs,
  created: onCreate,
});
