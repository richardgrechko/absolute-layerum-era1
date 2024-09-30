Vue.component("numberupgrade", {
	props: ["numberupgrade"],
	methods: 
	{
		ALNotation: function(n)
		{
			return funcs.ALNotation(n)
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
      		},
	},
	template:
	`
  		<button :disabled="!canAfford" @click="numberupgrade.buy()">
 		<nu>{{numberupgrade.name}}</nu>
 		<nt>{{numberupgrade.desc}}</nt>
 		<nt>Cost: {{ALNotation(numberupgrade.getPrice())}}</nt>
 		</button>
 	`
})
