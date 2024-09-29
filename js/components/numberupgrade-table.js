Vue.component("numberupgrade-table", {
  props: ["numberUpgrades"],
  template: `
  <numberupgrade v-for="(n, i) in numberupgrades" :numberupgrade="n" :key="i" ></numberupgrade>
  `,
});
