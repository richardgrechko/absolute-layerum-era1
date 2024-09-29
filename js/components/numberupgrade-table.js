Vue.component("numberupgrade-table", {
  props: ["numberupgrades"],
  template: `
  <numberupgrade v-for="(n, i) in numberupgrades" :numberupgrade="n" :key="i" ></numberupgrade>
  `,
});
