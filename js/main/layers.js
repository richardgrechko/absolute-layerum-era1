let tmp = {};
tmp.number = E(1);
tmp.multi = E(1);
tmp.statsPerSecond = E(0.01);
tmp.layerRequired = E(5);
tmp.multiRequirement = E(625);
tmp.autoMultiReq = E(4);
tmp.autoMulti = false;
tmp.rank = E(1);
tmp.rankRequirement = E(4);
tmp.autoRankupReq = E(4);
tmp.autoRankup = false;
tmp.prestige = E(0);
tmp.prestigeRequirement = E(100);
tmp.layer = "";
let layers = [
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
]
let grades = [
  "ZFEDCBASVXY",
  ["⇓", "↓", "÷", "--", "-", "", "+", "++", "×", "↑"]
]
let swears = ["arse", "arsehead", "arsehole", "ass", "asshole", "bastard", "bitch", "bloody", "bollocks", "brotherfucker", "bugger", "bullshit", "childfucker", "cock", "cocksucker", "crap", "cunt", "dammit", "damn", "damned", "dick", "dickhead", "dumbass", "dyke", "gay", "fatherfucker", "fuck", "fucker", "fucking", "goddammit", "goddamn", "goddamned", "goddamnit", "godsdamn", "hell", "holyshit", "horseshit", "jackass", "jesuschrist", "kike", "motherfucker", "nigga", "nigra", "pigfucker", "piss", "prick", "pussy", "shit", "shitass", "shite", "siblingfucker", "sisterfuck", "sisterfucker", "slut", "spastic", "twat", "wanker"];
function rainbowTransition(hue,saturation=80,luminence=80) {
  hue = E(hue).floor();
  saturation = Math.floor(saturation);
  luminance = Math.floor(luminence);
  return `hsl(${hue.add(1).mod(360)}, ${Math.floor(saturation)}%, ${Math.floor(luminance)}%)`;
}
function rankGrades(n) {
  n = n.floor();
  let G;
  if (n >= 1) {
    G = grades[0][n.div(10).add(1).mod(10)] + grades[1][n.sub(1).mod(10)]
  }
  return G;
}
function Layer(n) {
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
  for (let i of swears) {
    if (k.includes(swears[i])) {
      for (let j = 0; i < swears[i].length; j++) {
        if (k[j] = swears[i][j].toUpperCase()) {
          k.replace(swears[i][j].toUpperCase(), "#")
        } else if (k[j] = swears[i][j].toLowerCase()) {
          k.replace(swears[i][j].toLowerCase(), "#")
        }
      }
    }
  }
  return k;
}
function AbsLayerum(n) {
  return "<small style=\"color: #f77;\">Epilepsy warning when you get high stats!</small> "
  + "<small style=\"color: #7f7;\">This is based of Samir's AFK Incremental in Roblox!</small>"
  + "<p><small>You have </small>"
  + (n.gte(tmp.layerRequired.pow(52*(53**9))) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
  + "<small style=\"color: "
  + rainbowTransition(n.log(tmp.layerRequired).floor().mul(5).root(n.log(tmp.layerRequired).floor().log(5)))
  + "; text-shadow: 0 0 " 
  + (tmp.number.gte(E(5).pow(100)) ? "10" : (n.log(tmp.layerRequired).floor().div(10)))
  + "px "
  + rainbowTransition(n.log(tmp.layerRequired).floor().mul(5).root(n.log(tmp.layerRequired).floor().log(5)))
  + ";\">"
  + Layer(n.log(tmp.layerRequired))
  + ".</small> "
  + (tmp.number.gte(5) ? ("<tiny>This is also " + formatNumber(tmp.number) + " a.</tiny>") : "")
  + " <small>(+" 
  + formatNumber(tmp.statsPerSecond)
  + " stats/sec)</small>"
}
function AbsLayerumNotation(n) {
  return (n.gte(tmp.layerRequired.pow(52*(53**9))) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
  + Layer(n.log(tmp.layerRequired))
}
function stats() {
  return "<small style=\"color: #f99;\">x" + formatNumber(tmp.multi) + " Multiplier </small>"
  + "<button style=\"background-color: #fcc; color: #b88; width: 200px; height: 80px; font-size: 20px;\" onclick=\"multiply()\">"
  + (tmp.number.lt(tmp.multiRequirement) ? "Can't Reset" : ("Reset for x" + formatNumber(tmp.number.div(625).log(6).div(tmp.multi.mul(6).log(6)).mul(E(2).pow(tmp.rank.sub(1))).root(2).div(15)) + " Multi"))
  + "</button>"
  + ((tmp.multi.gte(tmp.autoMultiReq) || tmp.prestige.gte(1)) ? ("<button style=\"background-color: #daa; color: #977; width: 200px; height: 80px; font-size: 32px;\" onclick=\"autoMulti()\">"
  + "Auto: " + ((tmp.autoMulti) ? "ON" : "OFF")
  + "</button>") : "")
  + "<p>"
  + "<small style=\"color: "
  + rainbowTransition(tmp.rank.mul(5).root(tmp.rank.log(tmp.layerRequired).floor().log(5)), 100, 100)
  + "; text-shadow: 0 0 " 
  + (tmp.number.gte(E(5).pow(100)) ? "10" : (n.log(tmp.layerRequired).floor().div(10)))
  + "px "
  + rainbowTransition(tmp.rank.mul(5).root(tmp.rank.log(tmp.layerRequired).floor().log(5)))
  + ";\">Rank " + formatNumber(tmp.rank)
  + " (" 
  + rankGrades(tmp.rank)
  + ") </small>"
  + "<button style=\"background-color: #cfc; color: #8b8; width: 200px; height: 80px; font-size: 20px;\" onclick=\"rankup()\">"
  + (tmp.multi.lt(tmp.rankRequirement) ? "Can't Rank up" : "Rank up!")
  + "</button>"
  + ((tmp.multi.gte(tmp.autoRankupReq) || tmp.prestige.gte(1)) ? ("<button style=\"background-color: #ada; color: #797; width: 200px; height: 80px; font-size: 32px;\" onclick=\"autoRankup()\">"
  + "Auto: " + ((tmp.autoRankup) ? "ON" : "OFF")
  + "</button>") : "")
  + "<p>"
  + "<small style=\"color: #9ff;\">" + formatNumber(tmp.prestige) + " Prestiges </small>"
  + "<button style=\"background-color: #cff; color: #8bb; width: 200px; height: 80px; font-size: 20px;\" onclick=\"prestige()\">"
  + (tmp.rank.lt(tmp.prestigeRequirement) ? "Can't Prestige" : "Prestige!")
  + "</button>"
}
function multiply() {
  if (tmp.number.gte(tmp.multiRequirement)) {
    tmp.multi = tmp.multi.add(tmp.number.div(625).log(6).div(tmp.multi.mul(6).log(6)).mul(E(2).pow(tmp.rank.sub(1))).root(2).div(15));//yes
    tmp.number = E(1); // Reset Back to 1 a.
  }
}
function autoMulti() {
  tmp.autoMulti = !tmp.autoMulti;
}
function rankup() {
  if (tmp.multi.gte(tmp.rankRequirement)) {
    tmp.rank = tmp.rank.add(tmp.prestige());
    tmp.rankRequirement = tmp.rankRequirement.mul(8).floor();
    tmp.number = E(1); // Reset Back to 1 a. (again)
    tmp.multi = E(1); // Reset Back to x1 Multi.
  }
}
function autoRankup() {
  tmp.autoRankup = !tmp.autoRankup;
}
function prestige() {
  if (tmp.rank.gte(tmp.prestigeRequirement)) {
    tmp.rank = tmp.rank.add(tmp.prestige());
    tmp.rankRequirement = tmp.rankRequirement.mul(8).floor();
    tmp.number = E(1); // Reset Back to 1 a. (for the 3rd time)
    tmp.multi = E(1); // Reset Back to x1 Multi. (again)
    tmp.rank = E(1); // Reset Back to Rank 1.
  }
}
function update() {
  tmp.number = tmp.number.mul(E(5).pow(tmp.statsPerSecond.div(60)));
  tmp.statsPerSecond = tmp.multi.div(E(100)).mul(tmp.number.mul(2).log(2).mul(6).log(6)).mul(E(2).pow(tmp.rank.sub(1)))
  tmp.layer = AbsLayerum(tmp.number);
  document.getElementById("app").innerHTML = `${tmp.layer + "<p>" + stats()}`;
  tmp.rankRequirement = E(4).mul(E(16).pow(tmp.rank.sub(1)))
}
function updateAuto() {
  if (tmp.autoMulti) {
    multiply();
  }
  if (tmp.autoRankup) {
    rankup();
  }
}
setInterval(update, 16);
setInterval(updateAuto, 250);
