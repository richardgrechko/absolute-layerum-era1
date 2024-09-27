var dt1 = Date.now(), dt2 = Date.now();
let layers = [
	"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
	" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
]
let grades = [
	"ZFEDCBASQX",
	["⇓", "↓", "÷", "--", "-", "", "+", "++", "×", "↑"]
]
let swears = ["arse", "arsehead", "arsehole", "ass", "asshole", "bastard", "bitch", "bloody", "bollocks", "brotherfucker", "bugger", "bullshit", "childfucker", "cock", "cocksucker", "crap", "cunt", 
              "dammit", "damn", "damned", "dick", "dickhead", "dumbass", "dyke", "fatherfucker", "fuck", "fucker", "fucking", "gay", "goddammit", "goddamn", "goddamned", "goddamnit", "godsdamn", "hell", 
              "holyshit", "horseshit", "jackass", "jesuschrist", "kike", "motherfucker", "nigga", "nigger", "nigra", "pigfucker", "piss", "prick", "pussy", "shit", "shitass", "shite", "siblingfucker", "sisterfuck", 
              "sisterfucker", "slut", "spastic", "twat", "wanker"];
let onCreate = function()
{
	let initialGame = funcs.getSaveCode();
	funcs.loadGame(initialGame);
	funcs.update();
}
var app = new Vue({
	el: "#app",
	data: game,
	computed: false,
	methods: funcs,
	created: onCreate,
});
var game = {
	number: E(1),
	layerRequired: E(5),
	setts: {
		tab: "stats"
	},
	tabs: `<div onclick="funcs.setTab(1)" style="background-color: #999; color: #fff">Stats</div><div onclick="funcs.setTab(2)" style="background-color: #999; color: #fff">Upgrades</div><div onclick="funcs.setTab(3)" style="background-color: #999; color: #fff">Options</div>`,
	stats: "",
	numberUpgrades: [
		new NumberUpgrade("Stat Quickener 1","Your numbers exponentiate!",E(5),E(1.1),E(1.025)),
		new NumberUpgrade("Stat Quickener 2","literal faster stats",E(5).pow(10),E(1.2),E(1.05)),
		new NumberUpgrade("Stat Quickener 3","intense speed",E(5).pow(52),E(1.35),E(1.1)),
		new NumberUpgrade("Stat Quickener 4","OH GOD",E(5).pow(260),E(1.5),E(1.15)),
		new NumberUpgrade("Stat Quickener 5","ok thats too much bru",E(5).pow(520),E(2),E(1.2)),
		new NumberUpgrade("Stat Quickener 6","I'm done.",E(5).pow(2756),E(3),E(1.4)),
	],
	statsPerSecond: this.numberUpgrades[1].getMultiplier()
		.mul(this.numberUpgrades[2].getMultiplier())
		.mul(this.numberUpgrades[3].getMultiplier())
		.mul(this.numberUpgrades[4].getMultiplier())
		.mul(this.numberUpgrades[5].getMultiplier())
		.mul(this.numberUpgrades[6].getMultiplier()),
	options: `<div onclick="funcs.hardReset()" style="background-color: #f99; color: #f55">HARD RESET!</div>`,
};

setInterval(funcs.saveGame, 30000);
