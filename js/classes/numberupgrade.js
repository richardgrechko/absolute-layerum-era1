class NumberUpgrade
{
	constructor(name, desc, in_Price, priceIncrease, production, multi)
	{
    		this.name = name;
		this.desc = desc;
		this.in_Price = in_Price;
		this.priceIncrease = priceIncrease;
		this.production = production;
		this.multi = multi; // more stats per second (exponential)
		this.level = 0;
	}

	getMultiplier()
	{
		let base = this.multi.pow(this.level);
		let softcap = base.gte(this.multi.pow(1000)) ? ((this.level+573) * 0.00063589192) : 1; // Here goes a softcap
		return base.root(softcap);
	}

	getProduction()
	{
		let multi = E(1);
		for(let i in game.numberUpgrades)
		{
			if (game.numberUpgrades.hasOwnProperty(i))
			{
				for(let upg of game.numberUpgrades.upgrades)
				{
					multi = multi.mul(upg.apply());
				}
			}
		}
		return this.production.mul(Decimal.pow(this.priceIncrease.sqrt(), this.level)).mul(this.level)
		.mul(game.numberUpgrades.statsBoost.apply())
		.mul(multi);
	}

	getPrice()
	{
		let price = this.in_Price.mul(Decimal.pow(this.priceIncrease, this.level));
		let dilating = price.gte(E(Number.MAX_VALUE)) ? ((Decimal.log(price.div(E(Number.MAX_VALUE), 1e135)) / 2) + 1) : 1;
		return price.pow(dilating);
	}
	
	buy() {
		if (this.getPrice.lt(tmp.number))
		{
			tmp.number = tmp.number.div(this.getPrice());
			this.level++;
			return true;
		}
		return false;
	}
	
	buyMax()
	{
		while (this.buy());
	}
}
