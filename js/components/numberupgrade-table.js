Vue.component("numberupgrade-table", {
	props: ["numberupgrades"],
	methods:
	{
		ALN: function(n)
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
		totalMultiplier: function()
		{
			return funcs.getStatProduction()
		},
		canAutomate: function()
		{
			return game.gotAutoNumUP;
		},
	},
	template: `
	<table class="numberupgrade-table">
 		<div class="default center">Number Upgrades</div>
 		<div class="small center">Total Stat Production: {{formatNumber(totalMultiplier, 2, 0, 3003)}}</div>
   		<button @click="maxNumberUpgrades" style="background-color: #999; color: #bbb;">Max Upgrades</button>
  		<numberupgrade v-for="(n, i) in numberupgrades" :numberupgrade="n" :key="i"></numberupgrade>
	</table>
	`,
});
