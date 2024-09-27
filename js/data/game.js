var game = {
	number: E(1),
	statsPerSecond: E(0),
	setts: {
		tab: "stats"
	},
	tabs: [new AddButton("Stats", "funcs.setTab(1)", "background-color: #999; color: #fff"),
		new AddButton("Upgrades", "funcs.setTab(2)", "background-color: #999; color: #fff"),
		new AddButton("Options", "funcs.setTab(3)", "background-color: #999; color: #fff")] + "",
	stats: `<div class="small center" style="color: #900">Epilepsy warning when you get high stats! This is an inspiration of "SamirDevs AFK Incremental"<p></div><div class="small center">Stats: </div><div class="default">{E(5).pow(game.number.log(game.layerRequired).sub(game.number.log(game.layerRequired).floor()))}</div><div class="small center" style="color: ${rainbowTransition(number.log(layerRequired).floor().log(1.05), 80, 70)}; text-shadow: 0 0 ${(game.number.gte(game.layerRequired.pow(100)) ? "10px" : `${game.number.log(game.layerRequired).floor().div(10)}px`)} ${rainbowTransition(game.number.log(game.layerRequired).floor().div(10), 60, 80)};">{{Layer(game.number.log(game.layerRequired).floor())}}</div><p><div class="tiny center">(+{{statsPerSecond}} stats/sec)</div>`,
	numberUpgrades: [],
	options: AddButton("HARD RESET", "funcs.hardReset()", "background-color: #f00; color: #f55"),
};
