var dt1 = Date.now(), dt2 = Date.now();
var keyMap = [];
let layers = [
	"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
	" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
]
var swears = ["arse", "arsehead", "arsehole", "ass", "asshole", "bastard", "bitch", "bloody", "bollocks", "brotherfucker", "bugger", "bullshit", "childfucker", "cock", "cocksucker", "crap", "cunt", 
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
game.layerRequirement = E(5),
game.prestigeRequirement = E(5).pow(5);
function update()
{
	dt2 = Date.now();
	dt = (dt2 - dt1) / 1000;
	dt1 = Date.now();
	game.statsPerSecond = funcs.getStatProduction();
	game.number = E(game.number).mul(game.layerRequirement.pow(game.statsPerSecond.mul(dt)));
	game.stats = `<div class="small center" style="color: #900">Epilepsy warning when you get high stats! This is an inspiration of "SamirDevs AFK Incremental"</div><div style="text-align: center;"><div class="small"><img src="images/StatsImage.png">Stats: </text><text class="default">${funcs.formatNumber(game.layerRequirement.pow(game.number.log(game.layerRequirement).sub(game.number.log(game.layerRequirement).floor())))}</text><text class="small" style="color: ${funcs.rainbowTransition(game.number.log(game.layerRequirement).floor().root(2).log(1.01).add(1), game.number.log(game.layerRequirement).floor().add(0.1).mul(10), 70)}; text-shadow: 0 0 ${game.number.log(game.layerRequirement).floor().div(100).min(1)}em ${funcs.rainbowTransition(game.number.log(game.layerRequirement).floor().root(2).log(1.01).add(1), 80, 70)}, 0 0 ${game.number.log(game.layerRequirement).floor().div(141).min(0.7)}em ${funcs.rainbowTransition(game.number.log(game.layerRequirement).floor().root(2).log(1.01).add(1), 80, 70)}, 0 0 ${game.number.log(game.layerRequirement).floor().div(200).min(0.5)}em ${funcs.rainbowTransition(game.number.log(game.layerRequirement).floor().root(2).log(1.01).add(1), 80, 70)};">${funcs.Layer(E(game.number).log(game.layerRequirement).floor())}</text></div><div class="tiny center">(+${funcs.formatNumber(game.statsPerSecond, 4, 0, 3003)} stats/sec)</div><div class="small" style="color: #48f">${game.prestige} Prestiges</div><button class="presbutton" :disabled="game.number.lte(game.prestigeRequirement)" onclick="funcs.prestige()">Prestige!<p>Required: ${E(game.layerRequirement).pow(E(game.prestigeRequirement).log(game.layerRequirement).sub(E(game.prestigeRequirement).log(game.layerRequirement).floor())) + funcs.Layer(game.prestigeRequirement.log(game.layerRequirement))}</button>`
	document.getElementById("tabs").innerHTML = game.tabs;
	document.getElementById("stats").innerHTML = game.stats;
	if (keyMap.includes("m")) {
		funcs.maxAll();
	}
	requestAnimationFrame(update);
}
function onCreate()
{
	game.numberUpgrades.push(
		new NumberUpgrade("Stat Quickener 1","Your numbers exponentiate!",E(5),E(1.1),E(1.025)),
		new NumberUpgrade("Stat Quickener 2","Strong Exponent!",E(5).pow(10),E(1.2),E(1.05)),
		new NumberUpgrade("Stat Quickener 3","Triangular!",E(5).pow(52),E(1.35),E(1.1)),
		new NumberUpgrade("Stat Quickener 4","Square power!",E(5).pow(260),E(1.5),E(1.15)),
		new NumberUpgrade("Stat Quickener 5","Powerfully Upgraded!",E(5).pow(520),E(2),E(1.2)),
		new NumberUpgrade("Stat Quickener 6","Hexagon to the Sixth!",E(5).pow(2756),E(3),E(1.5)),
		new NumberUpgrade("Stat Quickener 7","Very Strong!",E(5).pow(E(52).pow(3)),E(4),E(2)),
		new NumberUpgrade("Stat Quickener 8","Octant to the Eighth!",E(5).pow(E(52).pow(4)),E(5),E(2.5))
	)
	initialGame = funcs.getSaveCode();

	funcs.loadGame(initialGame);

	funcs.setTab(1);

	requestAnimationFrame(update)
}

setInterval(funcs.saveGame, 30000);
