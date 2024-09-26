let tmp = {
  number: E(1),
  multi: E(1),
  rank: E(1),
  prestige: E(0),
  transcension: E(0),
  autoMultiGot: false,
  autoRankGot: false,
  autoPrestigeGot: false,
  autoTranscendGot: false,
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
  transcensionRequirement: E(100),
  autoTranscensionReq: E(2),
  autoTranscend: false,
  layer: "",
  setts: {
    tab: "stats"
  }
};
const funcs = {
  update: function() {
    dt2 = Date.now();
    let dt = (dt2 - dt1) / 1000;
    dt1 = Date.now();
    tmp.number = tmp.number.mul(E(5).pow(tmp.statsPerSecond.div(1000/dt)));
    tmp.statsPerSecond = tmp.multi.div(E(40)).mul(tmp.number.mul(2).log(2).mul(6).log(6)).mul(E(2).pow(tmp.rank.sub(1))).mul(E(1e3).pow(tmp.prestige)).mul(E(1e30).pow(tmp.transcension))
    tmp.layer = AbsLayerum(tmp.number);
    document.getElementById("app").innerHTML = `${tmp.layer + "<p>" + stats()}`;
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
      tmp.autoTranscendGot = true;
    }
    document.getElementById("options").innerHTML = "<button style=\"background-color: #daa; color: #977; width: 200px; height: 80px; font-size: 32px;\" onclick=\"alert(\"funcs.hardreset();\">HARD RESET!!</button>";
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
  hardreset: function() {
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
      tmp.setts.tab = "stats";
    }
  }
}
let onCreate = function()
{
    initialGame = funcs.getSaveCode();

    funcs.loadGame();

    funcs.update();
}
var app = new Vue({
    el: "#app",
    data: tmp,
    computed: computed,
    methods: functions,
    created: onCreate
});
