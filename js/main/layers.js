let tmp = {};
tmp.number = E(0.0001);
tmp.layerRequired = E(5);
tmp.layer = "";
let layers = [
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
]
function rainbowTransition(hue,saturation=200,luminence=200) {
  hue = E(hue).floor();
  saturation = Math.floor(saturation);
  luminance = Math.floor(luminence);
  let k;
  if (hue >= 0) {
    k = `hsl(${hue.mod(255)}, ${Math.floor(saturation/2.55)}%, ${Math.floor(luminance/2.55)}%)`;
  } else if (hue >= 1e12) {
    k = "rgb(255, 255, 255)";
  }
  return k;
}
function Layer(n) {
  n = n.floor();
  let k = "";
  if (n.gte(E(52).pow(1e10))) {
    k = "[" + n.log(26).add(1).floor() + " letters]"
  } else if (n.gte(52**25)) {
    k = "[Layer " + n + ", " + n.log(26).add(1).floor() + " letters]"
  } else if (n.gte(52**2)) {
    k = Layer(n.div(52).floor()) + Layer(n.mod(52))
  } else if (n.gte(52)) {
    k = layers[0][n.div(52).floor()] + Layer(n.mod(52))
  } else if (n.gte(0)) {
    k = layers[0][n];
  } else {
    k = " "
  }
  return k;
}
function AbsLayerum(n) {
  return (n.gte(tmp.layerRequired.pow(52**25)) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
    + " <p style=\"color: "
    + rainbowTransition(n.log(tmp.layerRequired).floor())
    + ";\">"
    + Layer(n.log(tmp.layerRequired))
    + "</p>"
}
function update() {
  tmp.number = tmp.number.add(0.0002).div(1.0001).pow(1.0001);
  tmp.layer = AbsLayerum(E(10).tetrate(tmp.number));
  document.getElementById("app").innerHTML = `${tmp.layer}`;
}
setInterval(update, 16);
