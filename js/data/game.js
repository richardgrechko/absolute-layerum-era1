var tmp = {
	number: E(1),
	statsPerSecond: E(0),
	setts: {
		tab: "stats"
	},
	tabs: new AddButton("Stats", "funcs.setTab(1)", "background-color: #999; color: #fff")
	+ new AddButton("Upgrades", "funcs.setTab(2)", "background-color: #999; color: #fff")
	+ new AddButton("Options", "funcs.setTab(3)", "background-color: #999; color: #fff"),
	stats: "",
	upgrades: "",
	options: new AddButton("HARD RESET", "funcs.hardReset()", "background-color: #f00; color: #f55"),
};
