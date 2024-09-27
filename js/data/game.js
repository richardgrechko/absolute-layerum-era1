var game = {
	number: E(1),
	statsPerSecond: E(0),
	setts: {
		tab: "stats"
	},
	tabs: `<div onclick="funcs.setTab(1)" style="background-color: #999; color: #fff">Stats</div><div onclick="funcs.setTab(2)" style="background-color: #999; color: #fff">Upgrades</div><div onclick="funcs.setTab(3)" style="background-color: #999; color: #fff">Options</div>`,
	stats: `<div class="small center" style="color: #900">Epilepsy warning when you get high stats! This is an inspiration of "SamirDevs AFK Incremental"<p></div><div class="small center">Stats: </div><div class="default">{E(5).pow(game.number.log(game.layerRequired).sub(game.number.log(game.layerRequired).floor()))}</div><div class="small center" style="color: {{rainbowTransition(number.log(layerRequired).floor().log(1.05), 80, 70)}}; text-shadow: 0 0 {{(game.number.gte(game.layerRequired.pow(100)) ? "10px" : "{{game.number.log(game.layerRequired).floor().div(10)}}" + "px")}} {{rainbowTransition(game.number.log(game.layerRequired).floor().div(10), 60, 80)}};">{{Layer(game.number.log(game.layerRequired).floor())}}</div><p><div class="tiny center">(+{{statsPerSecond}} stats/sec)</div>`,
	numberUpgrades: [],
	options: `<div onclick="funcs.hardReset()" style="background-color: #f99; color: #f55">HARD RESET!</div>`,
};
