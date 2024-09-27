var game = {
	number: E(1),
	statsPerSecond: E(0),
	setts: {
		tab: "stats"
	},
	tabs: AddButton("Stats", "funcs.setTab(1)", "background-color: #999; color: #fff")
	+ AddButton("Upgrades", "funcs.setTab(2)", "background-color: #999; color: #fff")
	+ AddButton("Options", "funcs.setTab(3)", "background-color: #999; color: #fff"),
	stats: SetHTML("Epilepsy warning when you get high stats! This is an inspiration of \"SamirDevs AFK Incremental\"<p>", "tiny center", `color: "#f88"`)
		+ SetHTML("Stats: " + (this.number.lte(E(5)).pow(52*(53**9)) ? SetHTML("{{formatNumber(number.log(layerRequired))}}", "default")  : ""), "small center")
		+ SetHTML(Layer(this.number.log(this.layerRequired).floor()) + "<p>", "default", `color: ${rainbowTransition(this.number.log(this.layerRequired).floor().log(1.05), 80, 70)}; text-shadow: 0 0 ${(this.number.gte(tmp.layerRequired.pow(100)) ? "10px" : (this.number.log(this.layerRequired).floor().div(10) + "px"))} ${rainbowTransition(this.number.log(this.layerRequired).floor().div(10), 60, 80)};`)
		+ SetHTML(" (+{{statsPerSecond}} stats/sec)<p>", "small center")
		+ SetHTML("Number: {{number}}", "tiny center"),
	numberUpgrades:
	{
		statsBoost: NumberUpgrade("Stats Boost",
			"Your numbers exponentiate!",
			E(5),
			E(1.1),
			E(1.05),
			E(1.1)),
	},
	options: AddButton("HARD RESET", "funcs.hardReset()", "background-color: #f00; color: #f55"),
};
