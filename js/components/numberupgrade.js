Vue.component("numberUpgrades", {
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
			return this.numberUpgrade.getPrice().lt(tmp.number)
      		}
	},
	template:
	`
 	<button :disabled="!canAfford" @click="numberUpgrades.buy()" style="background-color: #ff0; color: #0f0; width: 300px; height: 240px;">
 		<div class="default center">{{numberUpgrades.name}}</div>
 		<div class="small center">{{numberUpgrades.desc}}</div>
 		<div class="tiny center">Cost: {{formatNumber(numberUpgrades.in_Cost.pow(numberUpgrades.level), 2, 0, E(3003))}} Number</div>
 		<div class="tiny center">Level: {{formatNumber(numberUpgrades.level, 2, 0, E(3003))}}</div>
 		<div class="tiny center">Effect: ^{{formatNumber(numberUpgrades.getMultiplier(), 2, 0, E(3003))}}</div>
 	</button>
 	`
})
