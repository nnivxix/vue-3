//[1] import modulnya terlebih dahulu
import {ref} from 'vue'

const getPosts = () => {
	//[2.1] buat variable untuk menyimpan
	const posts = ref([]) // [2.2]variable dengan ref akan menerima nilai berbentuk Array
	const error = ref(null)

	// [3] buat fungsi untuk memuat data dari API
	const load = async () => {
		try {
			let data = await fetch('http://localhost:3000/fw')
			if(!data.ok){
				throw  Error('Tidak ada data yang dikembalikan')
			}

			//[3.1] panggil variable post yang diatas
			posts.value = await data.json()
			console.log(posts.value);
		} catch(e) {
			//[3.2] panggil variable error
			error.value = err.message
			console.log(e);
		}
	}
	load()
	//[4] kemudian jangan lupa kembalikan semua variable tersebut supaya bisa digunakan
	return{ posts, error, load }
}

//[5] kemudian export fungsi tersebut
export default getPosts