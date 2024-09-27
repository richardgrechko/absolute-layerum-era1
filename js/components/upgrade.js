Vue.component("upgrade", {
	props: ["upgrade"],
  methods: 
    {
      formatNumber: function(n, prec, prec1000, lim)
      {
        return funcs.formatNumber(n, prec, prec1000, lim)
      }
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
 	<button onclick="upgrade.buy()" style="width: 200px; height: 150px;">
 		<div class="default center">{{upgrade.name}}</div>
 		<div class="small center">{{upgrade.desc}}</div>
 		<div class="tiny center">{{upgrade.desc}}</div>
 	</button>
 	`
})
