Vue.component("element", {
	props: ["element"],
	computed: false,
	template:
	`
 	<div class="{{element.class}}" style="{{element.styles}}">
 		{{element.text}}
 	</div>
 	`
})
