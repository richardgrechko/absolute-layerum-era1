let layers = [
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
]
let grades = [
  "ZFEDCBASQX",
  ["⇓", "↓", "÷", "--", "-", "", "+", "++", "×", "↑"]
]
let swears = ["arse", "arsehead", "arsehole", "ass", "asshole", "bastard", "bitch", "bloody", "bollocks", "brotherfucker", "bugger", "bullshit", "childfucker", "cock", "cocksucker", "crap", "cunt", "dammit", "damn", "damned", "dick", "dickhead", "dumbass", "dyke", "gay", "fatherfucker", "fuck", "fucker", "fucking", "gay", "goddammit", "goddamn", "goddamned", "goddamnit", "godsdamn", "hell", "holyshit", "horseshit", "jackass", "jesuschrist", "kike", "motherfucker", "nigga", "nigger", "nigra", "pigfucker", "piss", "prick", "pussy", "shit", "shitass", "shite", "siblingfucker", "sisterfuck", "sisterfucker", "slut", "spastic", "twat", "wanker"];
function rainbowTransition(hue,saturation=80,luminence=80) {
  hue = E(hue).floor();
  saturation = Math.floor(saturation);
  luminance = Math.floor(luminence);
  return `hsl(${hue.add(1).mod(360)}, ${Math.floor(saturation)}%, ${Math.floor(luminance)}%)`;
}
function rankGrades(n) {
  n = n.floor();
  return grades[0][n.sub(1).div(10).floor().mod(10)] + grades[1][n.sub(1).mod(10)];
}
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
function multiply() {
  if (tmp.number.gte(tmp.multiRequirement)) {
    tmp.multi = tmp.multi.add(tmp.number.div(tmp.multiRequirement).log(6).div(tmp.multi.mul(6).log(6)).mul(E(2).pow(tmp.rank.sub(1))).root(2).div(15)).mul(E(1e3).pow(tmp.prestige)).mul(E(1e30).pow(tmp.transcension));//yes
    tmp.number = E(1); // Reset Back to 1 a.
  }
}
function autoMulti() {
  tmp.autoMulti = !tmp.autoMulti;
}
function rankup() {
  if (tmp.multi.gte(tmp.rankRequirement)) {
    tmp.rank = tmp.rank.add(E(2).pow(tmp.prestige)).add(E(10).pow(tmp.transcension));
    tmp.number = E(1); // Reset Back to 1 a. (again)
    tmp.multi = E(1); // Reset Back to x1 Multi.
  }
}
function autoRankup() {
  tmp.autoRankup = !tmp.autoRankup;
}
function prestige() {
  if (tmp.rank.gte(tmp.prestigeRequirement)) {
    tmp.prestige = tmp.prestige.add(E(2).pow(tmp.transcension));
    tmp.number = E(1); // Reset Back to 1 a. (for the 3rd time)
    tmp.multi = E(1); // Reset Back to x1 Multi. (again)
    tmp.rank = E(1); // Reset Back to Rank 1.
  }
}
function autoPrestige() {
  tmp.autoPrestige = !tmp.autoPrestige;
}
function transcend() {
  if (tmp.prestige.gte(tmp.transcensionRequirement)) {
    tmp.transcension = tmp.transcension.add(1)
    tmp.number = E(1); // Reset Every Previous progress before Transcend
    tmp.multi = E(1); 
    tmp.rank = E(1); 
    tmp.prestige = E(1); 
  }
}
function autoTranscend() {
  tmp.autoTranscend = !tmp.autoTranscend;
}
function updateAuto() {
  if (tmp.autoMulti) {
    multiply();
  }
  if (tmp.autoRankup) {
    rankup();
  }
  if (tmp.autoPrestige) {
    prestige();
  }
  if (tmp.autoTranscend) {
    transcend();
  }
}
setInterval(funcs.update, 16);
setInterval(updateAuto, 250);
setInterval(funcs.saveGame, 30000);
