let tmp = {};
tmp.tetr = E(1.001);
tmp.number = E(1);
tmp.layerRequired = E(1.7976931348623157e+308);
tmp.layer = E(0);
let layers = [
  ["Nul", "Un", "Bi", "Tr", "Te", "Pe", "He", "Hp", "Oc", "En"],
  "Đe",
  ["", "Rank", "Tier", "Tetr", "Pent"],
  ["", "Э", "Ю", "Я"],
  " abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ",
  ["", "ς", "ϱ", "ϸ"],
]
function Layer(n) {
  n = n.floor();
  let k = "";
  if (n.gte(E(10).tetrate(5))) {
    let slog = n.slog();
    k = "<|" + Layer(slog) + "|>:" + Layer(E(10).pow(slog.add(1).sub(slog.floor())))
  } else if (n.gte(E(10).pow(E(10).pow(10)))) {
    k = "<sub>{" + Layer(n.log(10)) + "}</sub>ʘ"
  } else if (n.gte(E(10).pow(10))) {
    let logMillion = n.log(E(1000000));
    k = "<sub>{" + Layer(logMillion) + "}</sub>" + Layer(n.div(E(1000000).pow(logMillion.sub(1).floor())))
  } else if (n.gte(1000000)) {
    k = Layer(n.div(1000000)) + "<sub>[" + Layer(n.mod(1000000)) + "]</sub>"
  } else if (n.gte(250000)) {
    k = layers[5][n.div(250000).floor()] + "(" + Layer(n.mod(250000)) + ")"
  } else if (n.gte(51000)) {
    k = "Ω<sup>" + Layer(n.sub(50000)) + "</sup>"
  } else if (n.gte(1000)) {
    k = layers[4][n.div(1000).floor()] + "(" + Layer(n.mod(1000)) + ")"
  } else if (n.gte(250)) {
    k = layers[3][n.div(250).floor()] + "(" + Layer(n.mod(250)) + ")"
  } else if (n.gte(50)) {
    k = layers[2][n.div(50).floor()] + " " + Layer(n.mod(50))
  } else if (n.gte(10)) {
    k = layers[1] + "<sup>" + Layer(n.sub(10)) + "</sup>"
  } else if (n.gte(0)) {
    k = layers[0][n];
  } else {
    k = " "
  }
  return k;
}
function AbsLayerum(n) {
  return (n.gte(tmp.layerRequired.pow(1000000)) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor())))) + " " + Layer(n.log(tmp.layerRequired))
}
function update() {
  tmp.tetr = tmp.number.add(0.001).pow(1.001);
  tmp.number = tmp.number.add(E(10).tetrate(tmp.tetr));
  tmp.layer = AbsLayerum(tmp.number);
  document.getElementById("app").innerHTML = `${tmp.layer}`;
}
setInterval(update, 16);
