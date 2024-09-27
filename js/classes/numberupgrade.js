class NumberUpgrade
{
	constructor(name, desc, in_Price, priceIncrease, multi)
	{
    		this.name = name;
		this.desc = desc;
		this.in_Price = in_Price;
		this.priceIncrease = priceIncrease;
		this.multi = multi; // more stats per second (exponential)
		this.level = 0;
	}

	getMultiplier()
	{
		let base = this.multi.pow(this.level);
		let softcap = base.gte(base.pow(1000)) ? ((this.level+573) * 0.00063589192) : 1; // Here goes a softcap
		let softcap2 = softcap.gte(1000) ? ((softcap+573) * 0.00063589192) : 1; // Softcap^2
		return base.div(softcap).div(softcap2);
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
