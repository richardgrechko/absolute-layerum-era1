function Layer(n) {
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
}
function AbsoluteLayerumNotation(n) {
  return (n.gte(game.layerRequired.pow(52*(53**9))) ? "" : funcs.formatNumber(n.div(game.layerRequired.pow(n.log(tmp.layerRequired).floor()))))
  + Layer(n.log(game.layerRequired))
}
