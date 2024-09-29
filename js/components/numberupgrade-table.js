Vue.component("numberupgrade-table", {
	props: ["numberupgrades"],
	template: `
	<table class="numberupgrade-table">
  		<numberupgrade v-for="(n, i) in numberupgrades" :numberupgrade="n" :key="i" ></numberupgrade>
	</table>
	`,
});
