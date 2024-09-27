var game = {
	number: E(1),
	statsPerSecond: E(0),
	setts: {
		tab: "stats"
	},
	tabs: [new AddButton("Stats", "funcs.setTab(1)", "background-color: #999; color: #fff"),
		new AddButton("Upgrades", "funcs.setTab(2)", "background-color: #999; color: #fff"),
		new AddButton("Options", "funcs.setTab(3)", "background-color: #999; color: #fff")] + "",
	stats: [new SetHTML("Epilepsy warning when you get high stats! This is an inspiration of \"SamirDevs AFK Incremental\"<p>", "tiny center", `color: "#f88"`),
		new SetHTML("Stats: " + (game.number.lte(E(5)).pow(52*(53**9)) ? new SetHTML("{{formatNumber(number.log(layerRequired))}}", "default")  : ""), "small center"),
		new SetHTML("{{Layer(game.number.log(game.layerRequired).floor())<p>", "default", `color: {{rainbowTransition(number.log(layerRequired).floor().log(1.05), 80, 70)}; text-shadow: 0 0 ${(game.number.gte(game.layerRequired.pow(100)) ? "10px" : "{{number.log(layerRequired).floor().div(10)}}px")} {{rainbowTransition(number.log(layerRequired).floor().div(10), 60, 80)}};`),
		new SetHTML(" (+{{statsPerSecond}} stats/sec)<p>", "small center"),
		new SetHTML("Number: {{number}}", "tiny center")] + "",
	numberUpgrades:
	{
		statsBoost: new NumberUpgrade("Stats Boost",
			"Your numbers exponentiate!",
			E(5),
			E(1.1),
			E(1.1)),
		poweringStats: new NumberUpgrade("Powering Stats",
			"stats go exponentiat",
			E(5).pow(100),
			E(1.1),
			E(1.05)),
	},
	options: AddButton("HARD RESET", "funcs.hardReset()", "background-color: #f00; color: #f55"),
};
