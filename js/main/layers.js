function AbsoluteLayerumNotation(n) {
  return (n.gte(tmp.layerRequired.pow(52*(53**9))) ? "" : formatNumber(n.div(tmp.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
  + Layer(n.log(tmp.layerRequired))
}
function multi() {
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
