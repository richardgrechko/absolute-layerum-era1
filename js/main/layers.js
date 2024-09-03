let tmp = {};
tmp.number = E(1.001);
tmp.layerRequired = E(1.7976931348623157e+308);
tmp.layer = "1 Nul"
let layers = [
  ["Nul", "Un", "Bi", "Tr", "Te", "Pe", "He", "Hp", "Oc", "En"],
  "Đe",
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
]
function Layer(n) {
  n = n.floor();
  let k = "";
  if (n.gte(E(10).tetrate(3))) {
    k = "ʘ<sub>{" + Layer(n.log(10)) + "}</sub>"
  } else if (n.gte(E(10).pow(10))) {
    let logThousand = n.log(E(1000));
    k = "<sub>{" + Layer(n.div(E(1000).pow(logThousand.floor()))) + "}</sub>" + Layer(logThousand)
  } else if (n.gte(1000)) {
    k = Layer(n.div(1000)) + "<sub>(" + Layer(n.mod(1000)) + ")</sub>"
  } else if (n.gte(100)) {
    k = "<span>" + layers[2][n.div(100).floor()] + "</span>[" + Layer(n.mod(100)) + "]"
  } else if (n.gte(10)) {
    k = "<span>" + layers[1] + "</span><sup>" + Layer(n.sub(10)) + "</sup>"
  } else if (n.gte(0)) {
    k = "<span>" + layers[0][n] + "</span>";
  } else {
    k = " "
  }
  return k;
}
function update() {
  tmp.number = tmp.number.mul(1.001).pow(1.001);
  tmp.layer = formatNumber(tmp.number.div(tmp.layerRequired.pow(tmp.number.log(tmp.layerRequired).floor()))) + " " + Layer(tmp.number.log(tmp.layerRequired));
  document.getElementById("app").innerHTML = `${tmp.layer}`;
}
setInterval(update, 16);
