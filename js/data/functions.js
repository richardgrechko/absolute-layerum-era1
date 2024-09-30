let funcs = {
	getStatProduction: function()
	{
		let sum = new Decimal(game.numberUpgrades[0].getMultiplier())
			.mul(game.numberUpgrades[1].getMultiplier())
			.mul(game.numberUpgrades[2].getMultiplier())
			.mul(game.numberUpgrades[3].getMultiplier())
			.mul(game.numberUpgrades[4].getMultiplier())
			.mul(game.numberUpgrades[5].getMultiplier())
			.div(10);
		return sum;
	},
	Layer: function(n) 
	{
		// try AbsLayerumNotation(E(5).pow(109590644)) and see!
		n = new Decimal(n).floor();
		let k = "";
		if (n.gte(E(52).pow(1e10))) 
		{
			k = "[" + this.formatNumber(new Decimal(n).log(52).floor()) + " letters]"
		} else if (n.gte(52**25))
		{
			k = "[Layer " + this.formatNumber(new Decimal(n)) + ", " + new Decimal(n).mul(52).log(52).floor() + " letters]"
		} else if (n.gte(52**2))
		{
			k = this.Layer(new Decimal(n).div(52).floor()) + this.Layer(new Decimal(n).mod(52))
		} else if (n.gte(52))
		{
			k = layers[1][new Decimal(n).div(52).floor()] + this.Layer(new Decimal(n).mod(52))
		} else if (n.gte(0))
		{
			k = layers[0][new Decimal(n)];
		} else
		{
			k = " "
		}
		for (let i = 0; i < swears.length; i++)
		{
			if (k.includes(swears[i]))
			{
				for (let j = 0; j < k.length; j++)
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
		let tabs = ["stats", "upgrades", "updatelogs", "options"];
		for (let i = 0; i < tabs.length; i++)
		{
			document.getElementById(tabs[i]).style.display = "none";
		}
		document.getElementById(tabs[n-1]).style.display = "block";
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
			["", "Ce", "Dc", "Tc", "Qd", "Qe", "Sc", "Se", "Oe", "Ne"],
		]
		if (n.gte(2))
		{
			if (n.gte(101))
			{
				k = abbrevs[1][o] + abbrevs[2][t] + abbrevs[3][h]
			} else if (n.gte(11))
			{
				k = abbrevs[1][o] + abbrevs[2][t]
			} else if (o.gte(1))
			{
				k = abbrevs[0][o]
			}
		}
		return k;
	},
	commaFormat: function(value) {
		let commaRegex = /\B(?=([0-9]{3})+(?![0-9]))/g;
		var decimalPointSplit = value.toString().split(".");
		decimalPointSplit[0] = decimalPointSplit[0].replace(commaRegex, ",");
		return decimalPointSplit.join(".");
  	},
  	formatNumber: function(n, prec=2, prec1000=0, lim=3_003)
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
			e = E(1000).pow(log.sub(log.floor())).toFixed(prec) + this.abbreviate(E(log));
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
		return `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
	},
	maxNumberUpgrades: function()
	{
        	for(let i = game.numberUpgrades.length - 1; i >= 0; i--)
        	{
            		game.numberUpgrades[i].buyMax();
        	}
	},
	maxAll: function()
	{
        	funcs.maxNumberUpgrades();
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
			game.statsPerSecond = loadVal(obj.statsPerSecond, E(0.01));
			game.layerRequirement = loadVal(obj.layerRequirement, E(5));
			for (let i = 0; i < game.numberUpgrades.length; i++) {
				game.numberUpgrades[i].level = obj.numberUpgrades[i].level
			}
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
			this.setTab(1);
		}
	}
}
