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
		maxNumberUpgrades: function()
		{
			funcs.maxNumberUpgrades();
		},
		autoNumberUpgrade: function()
		{
			game.autoNumUP = !game.autoNumUP;
		},
		canAutomate: function()
		{
			return game.gotAutoNumUP;
		},
		isAuto: function()
		{
			return ((game.autoNumUP)?"ON":"OFF");
		},
	},
	template: `
	<table class="numberupgrade-table">
 		<div class="default center">Number Upgrades</div>
 		<div class="small center">Total Stat Production: {{formatNumber(totalMultiplier, 2, 0, 3003)}}</div>
   		<button @click="maxNumberUpgrades" style="background-color: #999; color: #bbb;">Max Upgrades</button>
     		<button :disabled="!canAutomate" @click="autoNumberUpgrade" style="background-color: #bbb; color: #ddd;">Auto {{ isAuto }}</button>
  		<numberupgrade v-for="(n, i) in numberupgrades" :numberupgrade="n" :key="i"></numberupgrade>
	</table>
	`,
});
