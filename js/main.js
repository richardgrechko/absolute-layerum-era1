var dt1 = Date.now(), dt2 = Date.now();
let layers = [
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
]
let grades = [
  "ZFEDCBASQX",
  ["⇓", "↓", "÷", "--", "-", "", "+", "++", "×", "↑"]
]
let swears = ["arse", "arsehead", "arsehole", "ass", "asshole", "bastard", "bitch", "bloody", "bollocks", "brotherfucker", "bugger", "bullshit", "childfucker", "cock", "cocksucker", "crap", "cunt", "dammit", "damn", "damned", "dick", "dickhead", "dumbass", "dyke", "fatherfucker", "fuck", "fucker", "fucking", "gay", "goddammit", "goddamn", "goddamned", "goddamnit", "godsdamn", "hell", "holyshit", "horseshit", "jackass", "jesuschrist", "kike", "motherfucker", "nigga", "nigger", "nigra", "pigfucker", "piss", "prick", "pussy", "shit", "shitass", "shite", "siblingfucker", "sisterfuck", "sisterfucker", "slut", "spastic", "twat", "wanker"];
var tmp = {
  number: E(1),
  setts: {
    tab: "stats"
  },
  tabs: new Button("Stats", "setTab(1)", "background-color: #999; color: #fff")
  + new Button("Upgrades", "setTab(2)", "background-color: #999; color: #fff")
  + new Button("Options", "setTab(3)", "background-color: #999; color: #fff"),
  stats: "",
  upgrades: "",
  options: Elements.addButton("HARD RESET", "hardReset()", {backgroundColor: "#f00", color: "#f55"}),
};
function Layer(n) {
  // try AbsLayerumNotation(E(5).pow(364571724/3.3266683)) and see!
  n = n.floor();
  let k = "";
  if (n.gte(E(52).mul(E(53).pow(1e10)))) {
    k = "[" + formatNumber(n.log(53).floor()) + " letters]"
  } else if (n.gte(52*(53**25))) {
    k = "[Layer " + formatNumber(n) + ", " + n.mul(52).log(53).floor() + " letters]"
  } else if (n.gte(52*53)) {
    k = Layer(n.div(53).floor()) + Layer(n.mod(53))
  } else if (n.gte(52)) {
    k = layers[1][n.div(52).floor()] + Layer(n.mod(52))
  } else if (n.gte(0)) {
    k = layers[0][n];
  } else {
    k = " "
  }
  for (let i = 0; i < swears.length; i++) {
    if (k.includes(swears[i])) {
      for (let j = 0; i < k.length; j++) {
        if (k[j] = k[j].toUpperCase()) {
          k.replace(k[j].toUpperCase(), "#")
        } else if (k[j] = k[j].toLowerCase()) {
          k.replace(k[j].toLowerCase(), "#")
        }
      }
    }
  }
  return k;
}
function AbsLayerumNotation(n) {
  return (n.gte(tmp.layerRequired.pow(52*(53**9))) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
  + Layer(n.log(tmp.layerRequired))
}
const funcs = {
  setTab: function(n) {
    let tabs = ["stats", "upgrades", "options"];
    for (let i = 0; i < tabs.length; i++) {
      document.getElementById(tabs[i]).style.display = "none";
    }
    document.getElementById(tmp.setts.tab).style.display = "block";
    this.setTab()
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
    tmp.number = tmp.number.mul(tmp.statsPerSecond.div(1/dt)));
    tmp.statsPerSecond = Upgrade.getMultiplier();
    tmp.stats = new Element("Epilepsy warning when you get high stats! This is an inspiration of \"SamirDevs AFK Incremental\"<p>", "tiny center", `color: "#f88"`)
    + new Element("Stats: " + (tmp.number.lte(E(5)).pow(52*(53**9)) ? new Element("{{formatNumber(number.log(layerRequired))}}", "default")  : ""), "small center")
    + new Element(Layer(tmp.number.log(tmp.layerRequired).floor()) + "<p>", "default", `color: ${rainbowTransition(tmp.number.log(tmp.layerRequired).floor().log(1.05), 80, 70)}; text-shadow: 0 0 ${(tmp.number.gte(tmp.layerRequired.pow(100)) ? "10px" : (tmp.number.log(tmp.layerRequired).floor().div(10) + "px"))} ${rainbowTransition(tmp.number.log(tmp.layerRequired).floor().div(10), 60, 80)};`
    + new Element(" (+{{statsPerSecond}} stats/sec)<p>", "small center")
    + new Element("Number: {{number}}", "tiny center");
    tmp.upgrades = new Upgrade("Multiplier", "Your numbers exponentiate!", E(5), E(1.05), E(1.1));
    document.getElementById("tabs").innerHTML = tmp.tabs;
    document.getElementById("stats").innerHTML = tmp.stats;
    document.getElementById("upgrades").innerHTML = tmp.upgrades;
    document.getElementById("options").innerHTML = tmp.options;
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
      this.setTab(1);
    }
  }
}
let onCreate = function()
{
  let initialGame = funcs.getSaveCode();
  tmp.setts.tab = "stats";
  funcs.loadGame(initialGame);
  funcs.update();
  funcs.updateAuto();
}
var app = new Vue({
  el: "#app",
  data: tmp,
  computed: false,
  methods: funcs,
  created: onCreate,
});
setInterval(funcs.saveGame, 30000);
