Vue.component("numberupgrade-table", {
	props: ["numberupgrades"],
	template: `
	<div class="numberupgrade-table">
  		<numberupgrade v-for="(n, i) in numberupgrades" :numberupgrade="n" :key="i" ></numberupgrade>
	</div>
	`,
});
