Vue.component("numberupgrade", {
	props: ["numberupgrade"],
	methods: 
	{
		ALN: function(n)
		{
			return funcs.ALNotation(n)
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
 		<nt>Cost: {{ALN(numberupgrade.getPrice())}}</nt>
 		</button>
 	`
})
