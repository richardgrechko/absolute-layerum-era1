function E(n) {
	return new Decimal(n);
}
const funcs = {
	getStatProduction: function()
	{
		let sum = E(game.numberUpgrades[0].apply()).mul(game.numberUpgrades[1].apply());
		return sum;
	},
	Layer: function(n) 
	{
		// try AbsLayerumNotation(E(5).pow(364571724/3.3266683)) and see!
		n = n.floor();
		let k = "";
		if (n.gte(E(52).mul(E(53).pow(1e10)))) 
		{
			k = "[" + formatNumber(n.log(53).floor()) + " letters]"
		} else if (n.gte(52*(53**25)))
		{
			k = "[Layer " + formatNumber(n) + ", " + n.mul(52).log(53).floor() + " letters]"
		} else if (n.gte(52*53))
		{
			k = Layer(n.div(53).floor()) + Layer(n.mod(53))
		} else if (n.gte(52))
		{
			k = layers[1][n.div(52).floor()] + Layer(n.mod(52))
		} else if (n.gte(0))
		{
			k = layers[0][n];
		} else
		{
			k = " "
		}
		for (let i = 0; i < swears.length; i++)
		{
			if (k.includes(swears[i]))
			{
				for (let j = 0; i < k.length; j++)
				{
					if (k[j] = k[j].toUpperCase())
					{
						k.replace(k[j].toUpperCase(), "#")
					} else if (k[j] = k[j].toLowerCase())
					{
						k.replace(k[j].toLowerCase(), "#")
					}
				}
			}
		}
		return k;
	},
	AbsoluteLayerumNotation: function(n) {
  		return (n.gte(game.layerRequired.pow(52*(53**9))) ? "" : this.formatNumber(n.div(game.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
  		+ this.Layer(n.log(game.layerRequired))
	},
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
			if (n.gte(100))
			{
				k = abbrevs[1][o] + abbrevs[2][t] + abbrevs[3][h]
			} else if (n.gte(10))
			{
				k = abbrevs[1][o] + abbrevs[2][t]
			} else if (o.gte(1))
			{
				k = abbrevs[0][o]
			}
		}
	},
	commaFormat: function(value) {
		let commaRegex = /\B(?=([0-9]{3})+(?![0-9]))/g;
		var decimalPointSplit = value.toString().split(".");
		decimalPointSplit[0] = decimalPointSplit[0].replace(commaRegex, ",");
		return decimalPointSplit.join(".");
  	},
  	formatNumber: function(n, prec=2, prec1000=0, lim=3003)
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
			e = this.commaFormat(n.toFixed(prec1000));
		} else if (n.gte(E(10).pow(-prec)))
		{
			e = n.toFixed(prec);
		} else if (n.gte(0))
		{
			let log = n.log(10);
			e = E(10).pow(log.sub(log.floor())).toFixed(prec) + "e" + log.floor();
		} else if (n.eq(0))
		{
			e = E(0);
		} else
		{
			e = "-" + this.formatNumber(n.negate(), prec, prec1000, lim)
		}
		return e;
	},
	rainbowTransition: function(hue, saturation, lightness)
	{
		hue = hue.floor();
		saturation = Math.floor(saturation);
		lightness = Math.floor(lightness);
		return `hsl(${hue}, ${saturation}, ${lightness})`
	},
	update: function()
	{
		dt2 = Date.now();
		let dt = (dt2 - dt1) / 1000;
		dt1 = Date.now();
		game.number = game.number.mul(game.statsPerSecond.pow(game.layerRequired.div(dt)));
		game.statsPerSecond = game.numberUpgrades[0].getMultiplier().mul(game.numberUpgrades[1].getMultiplier());
		game.stats = `<div class="small center" style="color: #900">Epilepsy warning when you get high stats! This is an inspiration of "SamirDevs AFK Incremental"<p></div><div class="small center">Stats: </div><div class="default">{E(5).pow(game.number.log(game.layerRequired).sub(game.number.log(game.layerRequired).floor()))}</div><div class="small center" style="color: ${rainbowTransition(number.log(layerRequired).floor().log(1.05), 80, 70)}; text-shadow: 0 0 ${(game.number.gte(game.layerRequired.pow(100)) ? "10px" : `${game.number.log(game.layerRequired).floor().div(10)}px`)} ${rainbowTransition(game.number.log(game.layerRequired).floor().div(10), 60, 80)};">{{Layer(game.number.log(game.layerRequired).floor())}}</div><p><div class="tiny center">(+{{statsPerSecond}} stats/sec)</div>`
		document.getElementById("tabs").innerHTML = game.tabs;
		document.getElementById("stats").innerHTML = game.stats;
		document.getElementById("upgrades").innerHTML = game.numberUpgrades;
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
