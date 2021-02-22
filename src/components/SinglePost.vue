<template>
	<div class="container" v-for="post in posts" :key="post.id">
		<img :src="post.img" :alt="post.name">
		<h3>{{post.name}}</h3>
		<div v-for="t in post.text">
			<p>{{t}}</p>
		</div>		
	</div>
</template>


<script>
export default{
	name:'SinglePost',
	props:['posts']
};

</script>


<style scoped>
.container{
	display: flex;
	flex-direction: column;
	border: 2px solid black;
	padding:10px;
	margin: 10px;
}
	img{
		align-self: center;
		max-width: 300px;
	}
</style>
		