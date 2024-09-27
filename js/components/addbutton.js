Vue.component("addbutton", {
	props: ["addbutton"],
	template:
	`
 	<button id="addbutton" @click="addbutton.onClick" style="addbutton.style">
 		<div class="default center">{{upgrade.name}}</div>
 	</button>
 	`
})
