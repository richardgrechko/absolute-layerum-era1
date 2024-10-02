function E(n) {
	return new Decimal(n);
}
var game = {
	number: E(1),
	layerRequired: E(5),
	setts: {
		exportString: ""
	},
	tabs: `<button onclick="funcs.setTab(1)">Stats</button><button onclick="funcs.setTab(2)">Upgrades</button><button onclick="funcs.setTab(3)">Update Logs</button><button onclick="funcs.setTab(4)">Options</button>`,
	stats: "",
	numberUpgrades: [],
	statsPerSecond: E(0.1),
	autoNumUP: false,
	gotAutoNumUP: false,
};
