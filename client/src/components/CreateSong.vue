<template>
<v-container fluid>
    <h2>Create Song</h2>
    <v-layout row>
        <v-flex xs5 offset-xs1>
            <panel title="Create Song">
                <form name="CreateSong">
                    <v-text-field
                        label="Title"
                        v-model="title"
                        required
                        dark>
                    </v-text-field>
                    <v-text-field
                        label="Album"
                        v-model="album"
                        required
                        dark>
                    </v-text-field>
                    <v-text-field
                        label="Album Cover Link"
                        v-model="albumImageUrl"
                        dark>
                    </v-text-field>
                    <v-text-field
                        label="Artist"
                        v-model="artist"
                        required
                        dark>
                    </v-text-field>
                    <v-text-field
                        label="Youtube Key"
                        v-model="youtubeId"
                        dark>
                    </v-text-field>
                </form>
                <div v-html="error" class="error"></div>
                <v-btn class="cyan" @click="post"  to="/songs" dark>Add Song</v-btn>
            </panel>
        </v-flex>
        <v-layout column>
            <v-flex xs9 offset-xs1>
                <panel title="Tabs">
                    <v-text-field
                        label="Tabs"
                        v-model="tab"
                        multi-line
                        required
                        dark>
                    </v-text-field>
                </panel>
                <br>
                <panel title="Lyrics">
                    <v-text-field
                        label="Lyrics"
                        v-model="lyrics"
                        multi-line
                        required
                        dark>
                    </v-text-field>
                </panel>
            </v-flex>
        </v-layout>
    </v-layout>
</v-container>
</template>

<script>
import Panel from '@/components/panel'
import SongsService from '@/services/SongsService'
export default {
    components: {
        Panel
    },
    data () {
        return{
            title: '',
            artist: '',
            youtubeId: '',
            albumImageUrl: '',
            album: '',
            lyrics:'',
            tab: '',
            error: null
        }
    },
    methods: {
        async post(){
            try{
                const response = await 
                    SongsService.post({
                        title: this.title,
                        artist: this.artist,
                        album: this.album,
                        albumImageUrl: this.albumImageUrl,
                        youtubeId: this.youtubeId,
                        lyrics:this.lyrics,
                        tab: this.tab,
                })
            }catch(error){
                this.error = error.response.data.error
            }
        }
    }
}
</script>

<style>
    .error {
        color: red;
    }
</style>
