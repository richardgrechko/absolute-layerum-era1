Vue.component("Element", {
	props: ["Element"],
	computed: false,
	template:
	`
 	<div class="{{Element.class}}" style="{{Element.styles}}">
 		{{Element.text}}
 	</div>
 	`
})
