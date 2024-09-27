Vue.component("button_", {
	props: ["button_"],
	template:
	`
 	<button id="upgrade" @click="{{button_.onClick}}" style="width: 250px; height: 180px; {{button_.style}}">
 		<div class="default center">{{button_.text}}</div>
 	</button>
 	`
})
