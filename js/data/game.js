var game = {
	number: E(1),
	statsPerSecond: E(0),
	setts: {
		tab: "stats"
	},
	tabs: new AddButton("Stats", "funcs.setTab(1)", "background-color: #999; color: #fff")
	+ new AddButton("Upgrades", "funcs.setTab(2)", "background-color: #999; color: #fff")
	+ new AddButton("Options", "funcs.setTab(3)", "background-color: #999; color: #fff"),
	stats: new SetHTML("Epilepsy warning when you get high stats! This is an inspiration of \"SamirDevs AFK Incremental\"<p>", "tiny center", `color: "#f88"`)
		+ new SetHTML("Stats: " + (this.number.lte(E(5)).pow(52*(53**9)) ? new SetHTML("{{formatNumber(number.log(layerRequired))}}", "default")  : ""), "small center")
		+ new SetHTML(Layer(this.number.log(this.layerRequired).floor()) + "<p>", "default", `color: ${rainbowTransition(this.number.log(this.layerRequired).floor().log(1.05), 80, 70)}; text-shadow: 0 0 ${(this.number.gte(tmp.layerRequired.pow(100)) ? "10px" : (this.number.log(this.layerRequired).floor().div(10) + "px"))} ${rainbowTransition(this.number.log(this.layerRequired).floor().div(10), 60, 80)};`)
		+ new SetHTML(" (+{{statsPerSecond}} stats/sec)<p>", "small center")
		+ new SetHTML("Number: {{number}}", "tiny center"),
	upgrades: "",
	options: new AddButton("HARD RESET", "funcs.hardReset()", "background-color: #f00; color: #f55"),
};
