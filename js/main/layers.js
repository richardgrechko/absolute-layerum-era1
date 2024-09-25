let tmp = {};
tmp.number = E(0.0001);
tmp.layerRequired = E(5);
tmp.layer = "";
let layers = [
  "abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ",
]
function rainbowTransition(hue,saturation=255,luminance=255) {
  let k;
  if (hue >= 0) {
    k = "rgb(" + 255-(saturation/255) + ", " + Math.floor((hue)*(255-((saturation/255)*(luminance/255)))) + ", " + luminance + ")";
  } else if (hue >= 255) {
    k = "rgb(" + Math.floor((255-hue)*(255-((saturation/255)*(luminance/255)))) + ", " + 255-(saturation/255) + ", " + luminance + ")";
  } else if (hue >= 510) {
    k = "rgb(" + luminance + ", " + 255-(saturation/255) + ", " + Math.floor((hue-510)*(255-((saturation/255)*(luminance/255)))) + ")";
  } else if (hue >= 765) {
    k = "rgb(" + luminance + ", " + Math.floor((765-hue)*(255-((saturation/255)*(luminance/255)))) + ", " + 255-(saturation/255) + ")";
  } else if (hue >= 1020) {
    k = "rgb(" + Math.floor((hue-1020)*(255-((saturation/255)*(luminance/255)))) + ", " + luminance + ", " + 255-(saturation/255) + ")";
  } else if (hue >= 1275) {
    k = "rgb(" + 255-(saturation/255) + ", " + luminance + ", " + Math.floor((1275-hue)*(255-((saturation/255)*(luminance/255)))) + ")";
  } else if (hue >= 1530) {
    k = rainbowTransition(1530-hue,saturation,luminance);
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
  return (n.gte(tmp.layerRequired.pow(1000000)) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
    + " <div style=\"color: "
    + rainbowTransition(n.log(tmp.layerRequired).floor())
    + ";\">"
    + Layer(n.log(tmp.layerRequired))
    + "</div>"
}
function update() {
  tmp.number = tmp.number.add(0.0002).div(1.0001).pow(1.0001);
  tmp.layer = AbsLayerum(E(10).tetrate(tmp.number));
  document.getElementById("app").innerHTML = `${tmp.layer}`;
}
setInterval(update, 16);
