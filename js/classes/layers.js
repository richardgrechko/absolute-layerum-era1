class LayerRequirement
{
	constructor(pow)
	{
		if (pow.lt(1))
		{
			this.layerRequirement = E(1)
		} else if (pow.gte(1))
		{
			this.layerRequirement = E(5).pow(pow)
		} else
		{
			this.layerRequirement = this.constructor(pow.sub(1)).mul(E(5).mul(E(1.01).pow(pow)))
		}
	}
}
