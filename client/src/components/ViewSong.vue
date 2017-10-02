<template>
<v-layout column>
	<v-flex xs6 offset-xs3>
		<panel :title="song.title + ' - ' + song.album + ' - ' + song.artist">
			<v-dialog v-model="dialog" fullscreen>
      <v-btn class="cyan" dark slot="activator">View Tabs</v-btn>
      <v-card>
			 <v-toolbar fixed dark class="primary">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>X</v-icon>
          </v-btn>
			 </v-toolbar>
        <v-card-text class="tab">{{song.tab}}</v-card-text>
      </v-card>
    </v-dialog>
		</panel>
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
			song: {},
			dialog: false
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
		console.log(this.song)
		
	}

}
</script>

<style>
	.tab {
		white-space: pre-wrap;
		font-family: Courier New, Courier, monospace
	}
</style>
