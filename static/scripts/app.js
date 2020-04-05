import Template from './components/Template.vue.js';

const i18n = new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: {}
});

document.addEventListener("DOMContentLoaded", () => {

	const router = new VueRouter({
		mode: 'history',
		routes: [
			{ path: '/', name: 'home', component: Template },
		]
	});

	application = new Vue({
		el: '#application',
		i18n,
		router,
		components: {
		},
		data: {
		},
		watch: {
			windowHeight(newHeight, oldHeight) {
				var text = `it changed to ${newHeight} from ${oldHeight}`;
				console.log(text);
				this.screen.height = newHeight;
			},
			windowWidth(newWidth, oldWidth) {
				this.screen.width = newWidth;
			}
		},
		mounted() {
		},
		methods: {
		},
		render: h => h(Template),
	});
});





