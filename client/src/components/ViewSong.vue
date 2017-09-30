<template>
<v-layout column>
	<v-flex xs6 offset-xs3>
		<panel :title="song.title"></panel>
	</v-flex>
</v-layout>
</template>

<script>
import {mapState} from 'vuex'
import Panel from '@/components/panel'
import SongsService from '@/services/SongsService'
export default {
	components:{
		Panel
	},
	data () {
		return {
			song: {}
		}
	},
	computed: {
		//vuex, will pull the state obj, and find the route and give us "this.route"
		...mapState([
			'route'
		])
	},
	async mounted () {
		const songId= this.route.params.songId
		this.song = (await SongsService.show(songId)).data
	}

}
</script>

<style>

</style>
