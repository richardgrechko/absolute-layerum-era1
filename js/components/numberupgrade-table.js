Vue.component("numberupgrade-table", {
	props: ["numberupgrades"],
	template: `
	<table class="numberupgrade-table">
 		<div class="default center">Number Upgrades</div>
  		<numberupgrade v-for="(n, i) in numberupgrades" :numberupgrade="n" :key="i" ></numberupgrade>
	</table>
	`,
});
