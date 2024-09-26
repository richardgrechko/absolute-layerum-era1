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
  multiRequirement: E(625),
  autoMultiReq: E(4),
  autoMulti: false,
  rankRequirement: E(4),
  autoRankReq: E(4),
  autoRankup: false,
  prestigeRequirement: E(100),
  autoPrestigeReq: E(2),
  autoPrestige: false,
  transcensionRequirement: E(100),
  autoTranscensionReq: E(2),
  autoTranscend: false,
  layer: ""
};
const funcs = {
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
  }
}
let onCreate = function()
{
    initialGame = funcs.getSaveCode();

    funcs.loadGame();

    requestAnimationFrame(funcs.update);
}
var app = new Vue({
    el: "#app",
    data: tmp,
    methods: funcs,
    created: onCreate
});
