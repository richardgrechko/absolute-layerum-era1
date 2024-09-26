var dt1 = Date.now(), dt2 = Date.now();
var tmp = {
  number: E(1),
  multi: E(1),
  rank: E(1),
  prestige: E(0),
  transcension: E(0),
  grades: "Z⇓",
  autoMultiGot: false,
  autoRankGot: false,
  autoPrestigeGot: false,
  autoTranscensionGot: false,
  statsPerSecond: E(0.01),
  layerRequired: E(5),
  multiRequirement: E(25),
  autoMultiReq: E(2),
  autoMulti: false,
  rankRequirement: E(4),
  autoRankReq: E(4),
  autoRankup: false,
  prestigeRequirement: E(100),
  autoPrestigeReq: E(6),
  autoPrestige: false,
  transcensionRequirement: E(10),
  autoTranscensionReq: E(2),
  autoTranscension: false,
  setts: {
    tab: "stats"
  },
  tabs: Elements.addButton("Stats", "setTab(1)", {backgroundColor: "#999", color: "#fff"})
  + Elements.addButton("Options", "setTab(2)", {backgroundColor: "#999", color: "#fff"}),
  stats: "",
  options: Elements.addButton("HARD RESET", "hardReset()", {backgroundColor: "#f00", color: "#f55"}),
};
function addStatButtons(n, previous, previousauto, hue, saturation=100, luminance) {
  let q;
  if (n == "rank") {
    q = Elements.setHTML(
      Elements.setHTML(
        "Rank {{formatNumber(rank)}} ({{grades}})"
        , "tiny",
        {color: rainbowTransition(tmp[n].log(tmp.layerRequired).floor().log(1.05), 100, 50), shadowX: 0, shadowY: 0, shadowBlur: (tmp[n].gte(100) ? "10px" : (tmp[n].log(tmp.layerRequired).floor().div(10))), shadowColor: rainbowTransition(tmp[n].log(tmp.layerRequired).floor().div(10), 100, 60)}
      )
      +
      Elements.addButton(
        (previous.gte(tmp[n + "Requirement"])) ? titleCase(n + " up!") : ("Not enough to " + n + " up")
      , `${n}up()`, {backgroundColor: rainbowTransition(hue, saturation, luminance), color: rainbowTransition(hue, saturation, luminance+20)})
      +
      Elements.addButton(
        (tmp[previousauto].gte(tmp["auto" + titleCase(n) + "Req"])) ? ((tmp["auto" + Titlecase(n)]) ? "Auto: ON" : "Auto: OFF") : "Unable to automate"
      , `auto${Titlecase(n)}up()`, {backgroundColor: rainbowTransition(hue, saturation, luminance), color: rainbowTransition(hue, saturation, luminance+20)})
    , "div", {width: "400px"})
  } else {
    q = Elements.setHTML(
      Elements.setHTML(
        titleCase(n + " " + funcs.formatNumber(tmp[n]))
        , "tiny",
        {color: rainbowTransition(hue, saturation, luminance)}
      )
      +
      Elements.addButton(
        (previous.gte(tmp[n + "Requirement"])) ? titleCase(n + "!") : ("Not enough to " + n)
      , `${n}()`, {backgroundColor: rainbowTransition(hue, saturation, luminance), color: rainbowTransition(hue, saturation, luminance+20)})
      +
      Elements.addButton(
        (tmp[previousauto].gte(tmp["auto" + titleCase(n) + "Req"])) ? ((tmp["auto" + Titlecase(n)]) ? "Auto: ON" : "Auto: OFF") : "Unable to automate"
      , `auto${Titlecase(n)}()`, {backgroundColor: rainbowTransition(hue, saturation, luminance), color: rainbowTransition(hue, saturation, luminance+20)})
    , "div", {width: "400px"})
  }
  return q;
}
const funcs = {
  setTab: function(n) {
    let tabs = ["stats", "options"];
    for (let i = 0; i < tabs.length; i++) {
      document.getElementsByClassName(tabs[i]).style.display = "none";
    }
    document.getElementsByClassName(tmp.setts.tab).style.display = "block";
  },
  abbreviate: function(n) {
    n = n.floor();
    let h = n.sub(1).div(100).floor();
    let t = n.sub(1).div(10).floor().mod(10);
    let o = n.sub(1).floor().mod(10);
    let k;
    let abbrevs = [
      ["", "M", "B", "T", "Qu", "Qi", "Se", "Sp", "Oc", "Nn"],
      ["", "U", "D", "T", "Qu", "Qi", "Se", "Sp", "Oc", "Nn"],
      ["", "De", "Vg", "Tg", "Qa", "Qg", "Sx", "Sg", "Og", "No"],
      ["", "Ce", "Dc", "Tc", "Qd", "Qc", "Sc", "Si", "Oc", "Nc"],
    ]
    if (n.gte(2)) {
      if (h.gte(1)) {
        k = abbrevs[1][o] + abbrevs[2][t] + abbrevs[3][h]
      } else if (t.gte(1)) {
        k = abbrevs[1][o] + abbrevs[2][t]
      } else if (o.gte(1)) {
        k = abbrevs[0][o]
      }
    }
  },
  formatNumber: function(n, prec=2, prec1000=0, lim=E(3003)) {
    n = E(n);
    let e = n;
    if (n.gte(E(10).tetrate(5))) {
      let slog = n.slog();
      e = "10^^" + slog.floor() + ";" + E(10).pow(slog.sub(slog.floor())).toFixed(prec);
    } else if (n.gte(E(10).pow(E(10).pow(6)))) {
      let log = n.log(10);
      e = "10^" + this.formatNumber(log);
    } else if (n.gte(E(10).pow(lim))) {
      let log = n.log(10);
      e = E(10).pow(log.sub(log.floor())).toFixed(prec) + "e" + log.floor();
    } else if (n.gte(E(10).pow(6))) {
      let log = n.log(1000);
      e = E(1000).pow(log.sub(log.floor())).toFixed(prec) + this.abbreviate(log);
    } else if (n.gte(1000)) {
      e = n.toFixed(prec1000);
    } else if (n.gte(E(10).pow(-prec))) {
      let log = n.log(10);
      e = E(10).pow(log.sub(log.floor())).toFixed(prec) + "e" + log.floor();
    } else if (n.gte(0)) {
      e = n.toFixed(prec)
    } else if (n.eq(0)) {
      e = E(0);
    } else {
      e = "-" + this.formatNumber(n.negate(), prec, prec1000, lim)
    }
    return e;
  },
  update: function() {
    dt2 = Date.now();
    let dt = (dt2 - dt1) / 1000;
    dt1 = Date.now();
    tmp.number = tmp.number.mul(E(5).pow(tmp.statsPerSecond.div(1/dt)));
    tmp.statsPerSecond = tmp.multi.div(E(40)).mul(tmp.number.mul(2).log(2).mul(6).log(6)).mul(E(2).pow(tmp.rank.sub(1))).mul(E(1e3).pow(tmp.prestige)).mul(E(1e30).pow(tmp.transcension))
    tmp.rankRequirement = E(4).mul(E(16).pow(tmp.rank.sub(1)))
    tmp.prestigeRequirement = E(100).mul(E(2).pow(tmp.prestige))
    tmp.transcensionRequirement = E(10).mul(E(2.5).pow(tmp.transcension)).floor()
    if (tmp.prestige.gte(tmp.autoMultiReq)) {
      tmp.autoMultiGot = true;
    }
    if (tmp.prestige.gte(tmp.autoRankReq)) {
      tmp.autoRankGot = true;
    }
    if (tmp.prestige.gte(tmp.autoPrestigeReq)) {
      tmp.autoPrestigeGot = true;
    }
    if (tmp.transcension.gte(tmp.autoTranscensionReq)) {
      tmp.autoTranscensionGot = true;
    }
    tmp.grades = rankGrades(tmp.rank);
    tmp.stats = Elements.setHTML("Epilepsy warning when you get high stats! This is an inspiration of \"SamirDevs AFK Incremental\"", "tiny", {color: "#f77"})
    + addStatButtons("multi", "number", "prestige", 360, 100, 50)
    + addStatButtons("rank", "multi", "prestige", 120, 100, 50)
    + addStatButtons("prestige", "rank", "prestige", 240, 100, 50)
    + addStatButtons("transcension", "prestige", "transcension", 360, 0, 50)
    + Elements.setHTML("", "p") + Elements.setHTML("Stats: " + Elements.setHTML("{{formatNumber(number.log(layerRequired))}}", "default"), "small", {}, "v-if=\"tmp.number.lte(E(5)).pow(52*(53**9))\"") + Elements.setHTML("Stats: ", "small", {}, "v-else") + Elements.setHTML(Layer(tmp.number.log(tmp.layerRequired).floor()), "default", {color: rainbowTransition(tmp.number.log(tmp.layerRequired).floor().log(1.05), 100, 50), shadowX: 0, shadowY: 0, shadowBlur: (tmp.number.gte(tmp.layerRequired.pow(100)) ? "10px" : (tmp.number.log(tmp.layerRequired).floor().div(10))), shadowColor: rainbowTransition(tmp.number.log(tmp.layerRequired).floor().div(10), 100, 60)}) + Elements.setHTML(" (+{{statsPerSecond}} stats/sec)", "small") + Elements.setHTML("", "p") + Elements.setHTML("This is also {{number}} a.", "tiny");
    document.getElementById("tabs").innerHTML = tmp.tabs;
    document.getElementsByClassName("stats").innerHTML = tmp.stats;
    document.getElementsByClassName("options").innerHTML = tmp.options;
    setTimeout(this.update, dt*1000);
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

setInterval(funcs.saveGame, 30000);
