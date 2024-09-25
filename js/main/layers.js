let tmp = {};
tmp.number = E(1.0001);
tmp.multi = E(0.01);
tmp.rank = E(1);
tmp.layerRequired = E(5);
tmp.layer = "";
let layers = [
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
]
function rainbowTransition(hue,saturation=200,luminence=200) {
  hue = E(hue).floor();
  saturation = Math.floor(saturation);
  luminance = Math.floor(luminence);
  let k;
  if (hue >= 0) {
    k = `hsl(${hue.mod(360)}, ${Math.floor(saturation/2.55)}%, ${Math.floor(luminance/2.55)}%)`;
  }
  return k;
}
function Layer(n) {
  n = n.floor();
  let k = "";
  if (n.gte(E(52).mul(E(53).pow(1e10)))) {
    k = "[" + n.log(53).floor() + " letters]"
  } else if (n.gte(52*(53**25))) {
    k = "[Layer " + n + ", " + n.mul(52).log(53).floor() + " letters]"
  } else if (n.gte(52*53)) {
    k = Layer(n.div(53).floor()) + Layer(n.mod(53))
  } else if (n.gte(52)) {
    k = layers[1][n.div(52).floor()] + Layer(n.mod(52))
  } else if (n.gte(0)) {
    k = layers[0][n];
  } else {
    k = " "
  }
  return k;
}
function AbsLayerum(n) {
  return "<small color=\"#f00\">Warning: Epilepsy when you get high stats!</small>"
  + "<p></p><small>You have </small>"
  + (n.gte(tmp.layerRequired.pow(52*(53**9))) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
  + " <small style=\"color: "
  + rainbowTransition(E(5).pow(n.log(tmp.layerRequired).floor()).log(6))
  + ";\">"
  + Layer(n.log(tmp.layerRequired))
  + ".</small> <small>(+" 
  + formatNumber(tmp.multi)
  + " stats/sec)</small>"
}
function update() {
  tmp.number = tmp.number.mul(E(5).pow(tmp.multi.div(60)));
  tmp.multi = tmp.multi.mul(1.001).add(tmp.rank.div(1000));
  tmp.layer = AbsLayerum(tmp.number);
  document.getElementById("app").innerHTML = `${tmp.layer}`;
}
setInterval(update, 16);
