let tmp = {};
tmp.number = E(1.001);
tmp.layerRequired = E(1.7976931348623157e+308);
tmp.layer = "1 Un"
let layers = [
  ["", "Un", "Bi", "Tr", "Te", "Pe", "He", "Hp", "Oc", "En"],
  ["Đe"],
  ["Hec"],
]
function Layer(n) {
  n = n.floor();
  let k = "";
  if (n.gte(1)) {
    k = layers[0][n];
  } else if (n.gte(10)) {
    k = `${layers[1][1]}<sup>${Layer(n.sub(10))}</sup>`
  } else if (n.gte(100)) {
    k = `${layers[2][1]}<sub>${Layer(n.sub(100))}</sub>`
  } else if (n.gte(1000)) {
    k = `${Layer(n.div(1000))}<sub>(${Layer(n.mod(1000))})</sub>`
  } else if (n.gte(E(10).pow(9))) {
    k = `${Layer(n.div(E(10).pow(9)))}<sup>{${Layer(n.mod(E(10).pow(9)))}}</sup>`
  } else if (n.gte(E(10).pow(18))) {
    let logBillion = n.log(E(10).pow(9));
    k = `<sup>{${Layer(n.log(E(10).pow(9)))}}</sup>${Layer(n.div(E(10).pow(9).pow(logBillion.floor())))}`
  } else {
    console.error("Can't set a layer less than 1")
  }
  return k;
}
function update() {
  tmp.number = tmp.number.mul(1.001).pow(1.0001);
  tmp.layer = formatNumber(tmp.number.div(tmp.layerRequired.pow(tmp.number.log(tmp.layerRequired).floor()))) + " " + Layer(tmp.number.log(tmp.layerRequired).add(1))
}
setInterval(update, 16);
