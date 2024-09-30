function E(n) {
	return new Decimal(n);
}
var game = {
	number: E(1),
	layerRequired: E(5),
	setts: {
		exportString: ""
	},
	tabs: `<button @click="setTab(1)">Stats</button><button @click="setTab(2)">Upgrades</button><button @click="setTab(3)">Update Logs</button><button @click="setTab(4)">Options</button>`,
	stats: "",
	numberUpgrades: [],
	statsPerSecond: E(0.1),
	options: `<button @click="hardReset()" style="background-color: #f99; color: #f55;">HARD RESET!</button><p><button @click="exportGame()">Export</button><button @click="loadGame(setts.exportString)">Import</button><p><textarea v-model="setts.exportString" rows="16" cols="64">Your exported save goes here</textarea>`,
};
