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
import Panel from '@/components/panel'
import SongsService from '@/services/SongsService'
export default {
    components: {
        Panel
    },
    data () {
        return {
            songs: null
        }
    },
    async mounted (){
        this.songs = (await SongsService.index()).data
	 }
}
</script>

<style>

</style>
