<template>
		<SinglePost :posts="posts" />
</template>


<script>
// [1] import komponen dan fungsinya
import SinglePost from './SinglePost.vue';
import getPosts from '../composables/getPosts'
export default{
	name:'AllPost',
	components:{ SinglePost},
	props:['posts'],
	setup(){
		//destructuring semua yang ada di modul getPost
		const {posts, error, load} = getPosts()

		load()
		return {
			posts, error, load
		}
	}
};
</script>


<style scoped>

</style>
		