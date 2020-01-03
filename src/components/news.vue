<template>
    <div>
        <h1>This is the news page</h1>
        <div v-for="result in results" v-bind:key="result.id">
            <div class="card">
                <div class="card-divider">
                    {{ result.title }}
                </div>
                <div class="card-section">
                    <p>{{ result.abstract}}</p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import axios from "axios";

export default{
    name:'news',
    data() {
        return {
            results: []
        }
    },
    created()  {
        axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YqkSMcjpEeu6poTDGiEjtY3tu6c7mXfG")
            .then(response => {this.results = response.data.results})

    }

}
</script>
<style>
    .card {
        background-color: dodgerblue;
        color: white;
    }
</style>
