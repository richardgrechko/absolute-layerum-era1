function E(n) {
	return new Decimal(n);
}
var game = {
	number: E(1),
	layerRequired: E(5),
	setts: {
		tab: "stats"
	},
	tabs: `<button onclick="funcs.setTab(1)">Stats</button><button onclick="funcs.setTab(2)">Upgrades</button><button onclick="funcs.setTab(3)">Update Logs</button><button onclick="funcs.setTab(4)>Options</button>`,
	stats: "",
	numberUpgrades: [],
	statsPerSecond: E(0.1),
	options: `<button onclick="funcs.hardReset()" style="background-color: #f99; color: #f55;">HARD RESET!</button>`,
};
