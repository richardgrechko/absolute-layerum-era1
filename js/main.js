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
const funcs = {
  	setTab: function(n) {
		let tabs = ["stats", "upgrades", "options"];
		for (let i = 0; i < tabs.length; i++)
		{
			document.getElementById(tabs[i]).style.display = "none";
		}
		document.getElementById(game.setts.tab).style.display = "block";
		this.setTab()
	},
	abbreviate: function(n)
	{
		n = n.floor();
		let h = n.sub(1).div(100).floor();
		let t = n.sub(1).div(10).floor().mod(10);
		let o = n.sub(1).floor().mod(10);
		let k;
		let abbrevs = [
			["", "M", "B", "T", "Qu", "Qi", "Se", "Sp", "Oc", "Nn"],
			["", "U", "D", "T", "Qu", "Qi", "Se", "Sp", "Oc", "Nn"],
			["", "De", "Vg", "Tg", "Qa", "Qg", "Sx", "Sg", "Og", "No"],
			["", "Ce", "Dc", "Tc", "Qd", "Qc", "Sc", "Si", "Oc", "Nc"],
		]
		if (n.gte(2))
		{
			if (h.gte(1))
			{
				k = abbrevs[1][o] + abbrevs[2][t] + abbrevs[3][h]
			} else if (t.gte(1))
			{
				k = abbrevs[1][o] + abbrevs[2][t]
			} else if (o.gte(1))
			{
				k = abbrevs[0][o]
			}
		}
	},
  	formatNumber: function(n, prec=2, prec1000=0, lim=E(3003))
	{
		n = E(n);
		let e = n;
		if (n.gte(E(10).tetrate(5)))
		{
			let slog = n.slog();
			e = "10^^" + slog.floor() + ";" + E(10).pow(slog.sub(slog.floor())).toFixed(prec);
		} else if (n.gte(E(10).pow(E(10).pow(6))))
		{
			let log = n.log(10);
			e = "10^" + this.formatNumber(log);
		} else if (n.gte(E(10).pow(lim)))
		{
			let log = n.log(10);
			e = E(10).pow(log.sub(log.floor())).toFixed(prec) + "e" + log.floor();
		} else if (n.gte(E(10).pow(6)))
		{
			let log = n.log(1000);
			e = E(1000).pow(log.sub(log.floor())).toFixed(prec) + this.abbreviate(log);
		} else if (n.gte(1000)) {
			e = n.toFixed(prec1000);
		} else if (n.gte(E(10).pow(-prec)))
		{
			let log = n.log(10);
			e = E(10).pow(log.sub(log.floor())).toFixed(prec) + "e" + log.floor();
		} else if (n.gte(0))
		{
			e = n.toFixed(prec)
		} else if (n.eq(0))
		{
			e = E(0);
		} else
		{
			e = "-" + this.formatNumber(n.negate(), prec, prec1000, lim)
		}
		return e;
	},
	update: function()
	{
		dt2 = Date.now();
		let dt = (dt2 - dt1) / 1000;
		dt1 = Date.now();
		game.number = game.number.mul(game.statsPerSecond.div(1/dt));
		game.statsPerSecond = Upgrade.getMultiplier();
		game.stats = new SetHTML("Epilepsy warning when you get high stats! This is an inspiration of \"SamirDevs AFK Incremental\"<p>", "tiny center", `color: "#f88"`)
		+ new SetHTML("Stats: " + (game.number.lte(E(5)).pow(52*(53**9)) ? new SetHTML("{{formatNumber(number.log(layerRequired))}}", "default")  : ""), "small center")
		+ new SetHTML(Layer(game.number.log(game.layerRequired).floor()) + "<p>", "default", `color: ${rainbowTransition(tmp.number.log(tmp.layerRequired).floor().log(1.05), 80, 70)}; text-shadow: 0 0 ${(tmp.number.gte(tmp.layerRequired.pow(100)) ? "10px" : (tmp.number.log(tmp.layerRequired).floor().div(10) + "px"))} ${rainbowTransition(tmp.number.log(tmp.layerRequired).floor().div(10), 60, 80)};`)
		+ new SetHTML(" (+{{statsPerSecond}} stats/sec)<p>", "small center")
		+ new SetHTML("Number: {{number}}", "tiny center");
		document.getElementById("tabs").innerHTML = game.tabs;
		document.getElementById("stats").innerHTML = game.stats;
		document.getElementById("upgrades").innerHTML = game.upgrades;
		document.getElementById("options").innerHTML = game.options;
		setTimeout(this.update, dt*1000);
	},
	getSaveCode: function()
	{
		return btoa(unescape(encodeURIComponent(JSON.stringify(game))));
	},
	saveGame: function()
	{
		let str = funcs.getSaveCode();
		localStorage.setItem("AbsoluteLayerumGameSave", str);
	},
	loadGame: function(importString)
    	{
        	let loadVal = function(v, alt)
		{
			return v !== undefined ? v : alt;
        	}

        	let item = importString !== undefined ? importString : localStorage.getItem("AbsoluteLayerumGameSave");
		if(item !== null)
		{
			let obj;
			try
			{
				obj = JSON.parse(decodeURIComponent(escape(atob(item))));
			}
			catch(e)
			{
 				alert("Error loading Game: " + e);
				return;
			}
			game.number = loadVal(obj.number, E(1));
			game.statsPerSecond = loadVal(obj.statsPerSecond, E(1));
		}
	},
	hardReset: function()
	{
		let times = 3;
		do
		{
			if(!confirm("Are you really sure you want to hard reset?\nYou will lose everything.\nClick " + times + " more times and you will lose everything."))
			{
				break;
			}
			times--;
		} while(times > 0)
		if(times === 0)
		{
			localStorage.removeItem("AbsoluteLayerumGameSave");
			this.loadGame(initialGame);
			this.saveGame();
			game.setts.tab = "stats";
		}
	}
}
let onCreate = function()
{
	let initialGame = funcs.getSaveCode();
	game.setts.tab = "stats";
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
setInterval(funcs.saveGame, 30000);
