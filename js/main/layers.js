let tmp = {};
tmp.number = E(1.001);
tmp.layerRequired = E(1.7976931348623157e+308);
tmp.layer = "1 Nul";
let layers = [
  ["Nul", "Un", "Bi", "Tr", "Te", "Pe", "He", "Hp", "Oc", "En"],
  "Đe",
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  " abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ",
  ["", "ς", "ϱ", "ϸ"],
]
function Layer(n) {
  n = n.floor();
  let k = "";
  if (n.gte(E(10).pow(E(10).pow(24)))) {
    k = "ʘ<sub>{" + Layer(n.log(10)) + "}</sub>"
  } else if (n.gte(E(10).pow(24))) {
    let logMillion = n.log(E(1000000));
    k = "<sub>{" + Layer(n.div(E(1000000).pow(logMillion.floor()))) + "}</sub>" + Layer(n.div(E(1000000).pow(logMillion.sub(1).floor())))
  } else if (n.gte(1000000)) {
    k = Layer(n.div(1000000)) + "<sub>[" + Layer(n.mod(1000000)) + "]</sub>"
  } else if (n.gte(250000)) {
    k = "<span>" + layers[4][n.div(250000).floor()] + "</span>(" + Layer(n.div(250000)) + ")"
  } else if (n.gte(51000)) {
    k = "<span>Ω</span><sup>" + Layer(n.sub(50000)) + "</sup>"
  } else if (n.gte(1000)) {
    k = "<span>" + layers[3][n.div(1000).floor()] + "</span>(" + Layer(n.mod(1000)) + ")"
  } else if (n.gte(100)) {
    k = "<span>" + layers[2][n.div(100).floor()] + "</span>(" + Layer(n.mod(100)) + ")"
  } else if (n.gte(10)) {
    k = "<span>" + layers[1] + "</span><sup>" + Layer(n.sub(10)) + "</sup>"
  } else if (n.gte(0)) {
    k = "<span>" + layers[0][n] + "</span>";
  } else {
    k = " "
  }
  return k;
}
function CONVERT_AbsLayerumNotation(n) {
  return (n.gte(tmp.layerRequired.pow(1000000)) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor())))) + " " + Layer(n.log(tmp.layerRequired))
}
function update() {
  tmp.number = tmp.number.mul(1.001).pow(1.001);
  tmp.layer = (tmp.number.gte(tmp.layerRequired.pow(1000000)) ? "" : formatNumber(tmp.number.div(tmp.layerRequired.pow(tmp.number.log(tmp.layerRequired).floor())))) + " " + Layer(tmp.number.log(tmp.layerRequired));
  document.getElementById("app").innerHTML = `${tmp.layer}`;
}
setInterval(update, 16);
