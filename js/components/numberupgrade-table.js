Vue.component("numberupgrade-table", {
	props: ["numberupgrades"],
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
		totalMultiplier: function()
		{
			return funcs.getStatProduction()
		},
		maxNumberUpgrades: function()
		{
			funcs.maxNumberUpgrades();
		},
		canAutomateMaxing: function()
		{
			return game.gotAutoMaxNumUP;
		},
		isAuto: function()
		{
			return game.autoMaxNumUP;
		}
	},
	template: `
	<table class="numberupgrade-table">
 		<div class="default center">Number Upgrades</div>
 		<div class="small center">Total Stat Production: {{formatNumber(totalMultiplier, 2, 0, 3003)}}</div>
   		<button @click="maxNumberUpgrades()" style="background-color: #999; color: #bbb;">Max Upgrades</button>
     		<button :disabled="!canAutomateMaxing" @click="autoMaxNumberUpgrades()" style="background-color: #999; color: #bbb;">Auto Max : {{isAuto}}</button>
  		<numberupgrade v-for="(n, i) in numberupgrades" :numberupgrade="n" :key="i" ></numberupgrade>
	</table>
	`,
});
