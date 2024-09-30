function E(n) {
	return new Decimal(n);
}
var game = {
	number: E(1),
	layerRequired: E(5),
	setts: {
		tab: "stats"
	},
	tabs: `<button class="tiny" onclick="funcs.setTab(1)" style="background-color: #999; color: #fff; width: 150px; height: 100px;">Stats</button><button class="tiny" onclick="funcs.setTab(2)" style="background-color: #999; color: #fff; width: 150px; height: 100px;">Upgrades</button><button class="tiny" onclick="funcs.setTab(3)" style="background-color: #999; color: #fff; width: 150px; height: 100px;">Update Logs</button><button class="tiny" onclick="funcs.setTab(4)" style="background-color: #999; color: #fff; width: 150px; height: 100px;">Options</button>`,
	stats: "",
	numberUpgrades: [],
	statsPerSecond: E(0.1),
	options: `<button onclick="funcs.hardReset()" style="background-color: #f99; color: #f55; width: 250px; height: 150px;">HARD RESET!</button>`,
};
