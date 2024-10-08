let funcs = {
	getStatProduction: function()
	{
		let sum = new OmegaNum(game.numberUpgrades[0].getMultiplier())
			.mul(game.numberUpgrades[1].getMultiplier())
			.mul(game.numberUpgrades[2].getMultiplier())
			.mul(game.numberUpgrades[3].getMultiplier())
			.mul(game.numberUpgrades[4].getMultiplier())
			.mul(game.numberUpgrades[5].getMultiplier())
			.mul(game.numberUpgrades[6].getMultiplier())
			.mul(game.numberUpgrades[7].getMultiplier())
			.mul(game.numberUpgrades[8].getMultiplier())
			.div(10);
		return sum;
	},
	Layer: function(n) 
	{
		// try AbsLayerumNotation(E(5).pow(109590644)) and see!
		n = new OmegaNum(n).floor();
		let k = "";
		if (n.gte(new OmegaNum(52).pow(52**25))) 
		{
			let log = new OmegaNum(n).log(52);
			k = `${this.Layer(log)}→∆`;
		} else if (n.gte(52**25))
		{
			let log = new Decimal(n).log(52);
			k = `${this.Layer(log.floor())}→${this.Layer(new Decimal(52).pow(new OmegaNum(log).sub(new OmegaNum(log).floor()).add(2)))}`;
		} else if (n.gte(52**2))
		{
			k = this.Layer(new OmegaNum(n).div(52).floor()) + this.Layer(new OmegaNum(n).mod(52))
		} else if (n.gte(52))
		{
			k = layers[1][new OmegaNum(n).div(52).floor()] + this.Layer(new OmegaNum(n).mod(52))
		} else if (n.gte(0))
		{
			k = layers[0][new OmegaNum(n)];
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
	ALNotation: function(n) {
		n = new OmegaNum(n);
  		return (E(n).gte(E(game.layerRequirement).pow(52*(53**9))) ? "" : this.formatNumber(E(n).div(E(game.layerRequirement).pow(n.log(game.layerRequirement).floor()))))
  		+ this.Layer(n.log(game.layerRequirement))
	},
  	setTab: function(n) {
		let tabs = ["stats", "upgrades", "updatelogs", "options"];
		for (let i = 0; i < tabs.length; i++)
		{
			document.getElementById(tabs[i]).style.display = "none";
		}
		document.getElementById(tabs[n-1]).style.display = "inline-block";
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
		function polarize(array, smallTop = false)
		{
			if(array[0] == Number.POSITIVE_INFINITY)return[array[0], array[array.length-1], array.length-1]
			do
			{
				while(array[0] >= 10)
				{
					array[0]=Math.log10(array[0])
					array[1]=(array[1]||0)+1
				}
				let l=array.length
				for(i=1;i<l-1;++i)
				{
					if(array[i]===0)continue
					array[0]=Math.log10(array[0])+array[i]
					array[i]=0
					array[i+1]++
					if(array[0]>=10)break
				}
				if (array[0] < 10 && array[l-1] >= 10 && smallTop)
				{
					array[0] = Math.log10(array[0])+array[l-1]
					array[l-1] = 0
					array[l] = 1
				}
			}while(array[0]>=10)
		return[array[0], array[array.length-1], array.length-1]
		};
		n = E(n);
		var array = n.array;
		let e = n;
		if (n.gte(E("10{5}5")))
		{
			let polar = polarize(array, true);
			e = (Math.log10(polar[0])+polar[1]).toFixed(prec) + "J" + polar[2];
		} else if (n.gte(E("10^^^^5")))
		{
			let polar = polarize(array);
			e = ((n.gte("10^^^^1000000")) ? "" : polar[0].toFixed(prec)) + "H".repeat(array[5]) + array[4];
		} else if (n.gte(E(10).pentate(5)))
		{
			let polar = polarize(array);
			e = ((n.gte("10^^^1000000")) ? "" : polar[0].toFixed(prec)) + "G".repeat(array[4]) + array[3];
		} else if (n.gte(E("10^^5")))
		{
			let slog = n.slog();
			e = ((n.gte("10^^1000000")) ? "" : E(10).pow(slog.sub(slog.floor())).toFixed(prec)) + "F".repeat(array[3]) + array[2];
		} else if (n.gte(E(10).pow(E(10).pow(6))))
		{
			let log = n.log(10);
			e = "E" + this.formatNumber(log);
		} else if (n.gte(E(10).pow(lim)))
		{
			let log = n.log(10);
			e = E(10).pow(log.sub(log.floor())).toFixed(prec) + "E" + log.floor();
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
			game.prestige = loadVal(obj.prestige, E(0));
			game.statsPerSecond = loadVal(obj.statsPerSecond, E(0.01));
			game.layerRequirement = loadVal(obj.layerRequirement, E(5));
			for (let i = 0; i < game.numberUpgrades.length; i++)
			{
				game.numberUpgrades[i].level = E(0) /*obj.numberUpgrades[i].level*/
			}
		}
	},
	exportSave: function()
	{
		game.setts.exportString = this.getSaveCode();
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
