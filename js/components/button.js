Vue.component("button", {
	props: ["button"],
	template:
	`
 	<button id="upgrade" onclick="{{button.onClick}}" style="width: 250px; height: 180px; {{button.style}}">
 		<div class="default center">{{upgrade.text}}</div>
 	</button>
 	`
})
