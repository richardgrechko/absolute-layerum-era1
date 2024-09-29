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
var initialGame, dt;
var app = new Vue({
	el: "#app",
	data: game,
	computed: false,
	methods: funcs,
	created: onCreate,
});
game.layerRequirement = E(5);
function update()
{
	dt2 = Date.now();
	dt = (dt2 - dt1) / 1000;
	dt1 = Date.now();
	game.statsPerSecond = funcs.getStatProduction();
	game.number = E(game.number).mul(game.layerRequirement.pow(game.statsPerSecond.mul(dt)));
	game.stats = `<div class="small center" style="color: #900">Epilepsy warning when you get high stats! This is an inspiration of "SamirDevs AFK Incremental"<p></div><div class="small center">Stats: </div><div class="default">${E(5).pow(game.number.log(game.layerRequirement).sub(game.number.log(game.layerRequirement).floor()))}</div><div class="small center" style="color: ${funcs.rainbowTransition(game.number.log(game.layerRequirement).floor().log(1.05), 80, 70)}; text-shadow: 0 0 ${game.number.log(game.layerRequirement).floor().div(141)}em currentcolor, 0 0 ${game.number.log(layerRequirement).floor().div(200)}em currentcolor, 0 0 ${game.number.log(game.layerRequirement).floor().div(100)}em currentcolor;">{{Layer(number.log(layerRequirement).floor())}}</div><p><div class="tiny center">(+{{statsPerSecond}} stats/sec)</div>`
	document.getElementById("tabs").innerHTML = game.tabs;
	document.getElementById("stats").innerHTML = game.stats;
	document.getElementById("upgrades").innerHTML = game.numberUpgrades;
	document.getElementById("options").innerHTML = game.options;
	requestAnimationFrame(update);
}
function onCreate()
{
	game.numberUpgrades.push(
		new NumberUpgrade("Stat Quickener 1","Your numbers exponentiate!",E(5),E(1.1),E(1.025)),
		new NumberUpgrade("Stat Quickener 2","literal faster stats",E(5).pow(10),E(1.2),E(1.05)),
		new NumberUpgrade("Stat Quickener 3","intense speed",E(5).pow(52),E(1.35),E(1.1)),
		new NumberUpgrade("Stat Quickener 4","OH GOD",E(5).pow(260),E(1.5),E(1.15)),
		new NumberUpgrade("Stat Quickener 5","ok thats too much bru",E(5).pow(520),E(2),E(1.2)),
		new NumberUpgrade("Stat Quickener 6","I'm done.",E(5).pow(2756),E(3),E(1.4)),
	)
	initialGame = funcs.getSaveCode();

	funcs.loadGame();

	requestAnimationFrame(update)
}

setInterval(funcs.saveGame, 30000);
