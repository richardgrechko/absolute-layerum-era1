function E(n) {
	return new Decimal(n);
}
let game = {
	number: E(1),
	exponent: E(0),
	layerStyle: "color: {{funcs.rainbowTransition(number.log(layerRequirement).floor().root(1.1).add(1).log(1.01))}}; text-shadow: 0 0 {{number.log(layerRequirement).floor().root(1.1).add(1).log(1.01)}}em currentColor, 0 0 {{number.log(layerRequirement).floor().root(1.1).add(1).log(1.01).div(1.41)}}em currentColor, 0 0 {{number.log(layerRequirement).floor().root(1.1).add(1).log(1.01).div(2)}}em currentColor;",
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
