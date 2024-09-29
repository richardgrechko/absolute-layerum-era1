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
 	<button :disabled="!canAfford" @click="numberupgrade.buy()" style="background-color: #ff0; color: #0f0; width: 300px; height: 240px;">
 		<div class="small center">{{numberupgrade.name}}</div>
 		<div class="small center">{{numberupgrade.desc}}</div>
 		<div class="tiny center">Cost: {{formatNumber(numberupgrade.in_Cost.pow(numberUpgrades.level), 2, 0, 3003)}} Number</div>
 		<div class="tiny center">Level: {{formatNumber(numberupgrade.level, 2, 0, 3003)}}</div>
 		<div class="tiny center">Effect: ^{{formatNumber(numberupgrade.getMultiplier(), 2, 0, 3003)}}</div>
 	</button>
 	`
})
