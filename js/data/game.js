function E(n) {
	return new Decimal(n);
}
var game = {
	number: E(1),
	layerRequired: E(5),
	setts: {
		tab: "stats"
	},
	tabs: `<div onclick="funcs.setTab(1)" style="background-color: #999; color: #fff">Stats</div><div onclick="funcs.setTab(2)" style="background-color: #999; color: #fff">Upgrades</div><div onclick="funcs.setTab(3)" style="background-color: #999; color: #fff">Options</div>`,
	stats: "",
	numberUpgrades: [],
	statsPerSecond: this.numberUpgrades[1].getMultiplier(),
	options: `<div onclick="funcs.hardReset()" style="background-color: #f99; color: #f55">HARD RESET!</div>`,
};
