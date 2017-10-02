<template>
<v-layout column>
	<v-flex xs6 offset-xs3>
	  <panel title="Songs">
            <div v-for="song in songs"
					:key="song.id">
						{{song.title}}-
						{{song.artist}}-
						{{song.album}}  
					<v-btn dark
						:to="{
							name: 'song',
							params: {
								songId: song.id
							}
						}">
						View
					</v-btn>
				</div>
        </panel>
	</v-flex>
</v-layout>
</template>

<script>
import {mapState} from 'vuex'
import Panel from '@/components/panel'
import SongsService from '@/services/SongsService'

export default {
	components: {
		Panel
	},
	data () {
		return {
			songs: {},
		}
	},
	computed: {
		//vuex, will pull the state obj, and find the route and give us "this.route"
		...mapState([
			'route'
		])
	},
	async mounted (){
		const input = this.route.params.input
		console.log(input)
		this.songs = (await SongsService.search(input)).data
		console.log(this.songs)
	 }
}
</script>

<style>

</style>
