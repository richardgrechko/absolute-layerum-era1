let tmp = {};
tmp.number = E(0.0001);
tmp.layerRequired = E(5);
tmp.layer = "";
let layers = [
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
]
function rainbowTransition(hue,saturation=255,luminance=255) {
  hue = E(hue).floor();
  saturation = Math.floor(saturation);
  luminance = Math.floor(luminance);
  let k;
  if (hue < 0) {
    k = rainbowTransition(hue.mod(255),saturation,luminance);
  } else if (hue >= 0) {
    k = `rgb(${}, ` +
        `${}, ` +
        `${})`;
  } else if (hue >= 255) {
    k = "rgb(" + E(255).sub(hue.mul(luminance-((saturation/255)*(luminance/255))).floor()) + ", " + Math.floor(luminance-((saturation/255)*(luminance/255))) + ", " + Math.floor(luminance-((saturation/255)*(luminance/255))) + ")";
  } else if (hue >= 510) {
    k = "rgb(" + Math.floor(luminance-((saturation/255)*(luminance/255))) + ", " + Math.floor(luminance-((saturation/255)*(luminance/255))) + ", " + hue.mul(luminance-((saturation/255)*(luminance/255))).sub(510).floor() + ")";
  } else if (hue >= 765) {
    k = "rgb(" + Math.floor(luminance-((saturation/255)*(luminance/255))) + ", " + E(1275).sub(hue.mul(luminance-((saturation/255)*(luminance/255))).floor()) + ", " + Math.floor(luminance-((saturation/255)*(luminance/255))) + ")";
  } else if (hue >= 1020) {
    k = "rgb(" + hue.mul(luminance-((saturation/255)*(luminance/255))).sub(1020).floor() + ", " + Math.floor(luminance-((255-saturation/255)*(luminance/255))) + ", " + Math.floor(luminance-((255-saturation/255)*(luminance/255))) + ")";
  } else if (hue >= 1275) {
    k = "rgb(" + Math.floor(luminance-((saturation/255)*(luminance/255))) + ", " + Math.floor(luminance-((saturation/255)*(luminance/255))) + ", " + E(1275).sub(hue.mul(luminance-((saturation/255)*(luminance/255))).floor()) + ")";
  } else if (hue >= 1530) {
    k = rainbowTransition(E(1530).sub(hue),saturation,luminance);
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
