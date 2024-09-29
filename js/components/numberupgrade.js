Vue.component("numberupgrade", {
	props: ["numberUpgrades"],
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
			return this.numberUpgrades.getPrice().lt(game.number)
      		}
	},
	template:
	`
 	<button v-for="(n, i) in numberUpgrades" :numberupgrade="n" :key="i" :disabled="!canAfford" @click="numberupgrade.buy()" style="background-color: #ff0; color: #0f0; width: 300px; height: 240px;">
 		<div class="default center">{{numberUpgrades.name}}</div>
 		<div class="small center">{{numberUpgrades.desc}}</div>
 		<div class="tiny center">Cost: {{formatNumber(numberUpgrades.in_Cost.pow(numberUpgrades.level), 2, 0, 3003)}} Number</div>
 		<div class="tiny center">Level: {{formatNumber(numberUpgrades.level, 2, 0, 3003)}}</div>
 		<div class="tiny center">Effect: ^{{formatNumber(numberUpgrades.getMultiplier(), 2, 0, 3003)}}</div>
 	</button>
 	`
})
