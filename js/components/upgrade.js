Vue.component("upgrade", {
	props: ["upgrade"],
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
			return this.upgrade.getPrice().lt(tmp.number)
      		}
	},
	template:
	`
 	<button id="upgrade" onclick="upgrade.buy()" style="width: 250px; height: 180px;">
 		<div class="default center">{{upgrade.name}}</div>
 		<div class="small center">{{upgrade.desc}}</div>
 		<div class="tiny center">Cost: {{formatNumber(upgrade.in_Cost.pow(upgrade.level), 2, 0, E(3003))}} Number</div>
 		<div class="tiny center">Level: {{upgrade.level}}</div>
 		<div class="tiny center">Effect: ^{{upgrade.getMultiplier()}}</div>
 	</button>
 	`
})
