import Vue				from 			'vue'
import VueRouter		from 			'vue-router'
import VueResource		from			'vue-resource'

const HomeView = () => import('./views/HomeView.vue')
const PostView = () => import('./views/PostView.vue')
const PageView = () => import('./views/PageView.vue')

Vue.use(VueRouter)
Vue.use(VueResource)

export default new VueRouter({
	routes: [
		{ name: 'home', path: '/', component: HomeView },
		{ name: 'post', path: '/post/:id', component: PostView },
		{ name: 'page', path: '/page/:id', component: PageView }
	]
})
