Vue.component("numberupgrade", {
	props: ["numberupgrade"],
	methods: 
	{
		ALN: function(n)
		{
			return funcs.AbsoluteLayerumNotation(n)
		},
		formatNumber: function(n, prec, prec1000, lim)
		{
        		return funcs.formatNumber(n, prec, prec1000, lim)
		},
	},
	computed:
	{
		canAfford: function()
		{
			return this.numberupgrade.getPrice().lt(game.number)
      		}
	},
	template:
	`
  		<button :disabled="!canAfford" @click="numberupgrade.buy()">
 		<nu>{{numberupgrade.name}}</nu>
 		<nt>{{numberupgrade.desc}}</nt>
 		<nt>Cost: {{formatNumber(numberupgrade.getPrice(), 2, 0, 3003)}} Number</nt>
 		</button>
 	`
})
