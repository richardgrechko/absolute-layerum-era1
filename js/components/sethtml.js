Vue.component("sethtml", {
	props: ["sethtml"],
	template:
	`
 	<div class="{{sethtml.class}}" style="{{sethtml.style}}">
 		{{sethtml.text}}
 	</div>
 	`
})
