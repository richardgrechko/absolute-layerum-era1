Vue.component("numberupgrade", {
	props: ["numberupgrade"],
	methods: 
	{
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
  		<button :disabled="!canAfford" @click="numberupgrade.buy()" style="background-color: #cccc44; color: #66aa66; width: 150px; height: 100px;">
 		<nu>{{numberupgrade.name}}</nu>
 		<nt>{{numberupgrade.desc}}</nt>
 		<nt>Cost: {{formatNumber(numberupgrade.getPrice(), 2, 0, 3003)}} Number</nt>
 		</button>
 	`
})
