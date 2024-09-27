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
	numberUpgrades: [
		new NumberUpgrade("Stat Quickener 1","Your numbers exponentiate!",E(5),E(1.1),E(1.025)),
		new NumberUpgrade("Stat Quickener 2","literal faster stats",E(5).pow(10),E(1.2),E(1.05)),
		new NumberUpgrade("Stat Quickener 3","intense speed",E(5).pow(52),E(1.35),E(1.1)),
		new NumberUpgrade("Stat Quickener 4","OH GOD",E(5).pow(260),E(1.5),E(1.15)),
		new NumberUpgrade("Stat Quickener 5","ok thats too much bru",E(5).pow(260),E(2),E(1.2)),
		new NumberUpgrade("Stat Quickener 6","I'm done.",E(5).pow(260),E(3),E(1.4)),
	],
	statsPerSecond: this.numberUpgrades[0].getMultiplier().mul(this.numberUpgrades[1].getMultiplier()),
	options: `<div onclick="funcs.hardReset()" style="background-color: #f99; color: #f55">HARD RESET!</div>`,
};
