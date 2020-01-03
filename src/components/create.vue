<template>
    <div>
        <h1>Add Post</h1>
        <form action="">
        <input type="text" v-model="postTitle" placeholder="title"/> <br>
        <textarea type="text" v-model="postBody" placeholder="body"/> <br>
        <button type="button" @click="createPost()" >Create</button>
        </form>
        <ul>
            <li v-for="post of posts" v-bind:key="post.id">
                <p><strong>{{post.title}}</strong></p>
                <p>{{post.body}}</p>
            </li>
        </ul>
    </div>


</template>

<script>
    import axios from 'axios';
    export default {
        name: 'create',

        data() {

            return {
                postBody: null,
                postTitle: null,
                posts: []
            }
        },

        methods: {
            createPost () {
                let post = {
                    title: this.postTitle,
                    body: this.postBody
                }
                axios.post('http://jsonplaceholder.typicode.com/posts', {
                    title: this.postTitle,
                    body: this.postBody
                }).then((response) => {
                    this.postBody=null,

                        this.postTitle=null

                    // eslint-disable-next-line no-console
                    console.log(response.data)
                    this.responseBody=response.data;
                })

            }
        }
    }
</script>
<style>
    form{
        margin-left: 300px;
        width: 396px;
        height: 372px;
        padding-top: 22px;
        padding-left: 22px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px;
        border-top: 1px solid rgb(0, 255, 239);
        margin-top: 20px;
    }
    input,textarea{
        color: black;
        box-shadow: rgb(204, 204, 204) 0px 0px 3px;
        height: 43px;
        width: 360px;
        box-sizing: border-box;
        margin-top: 7px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
        outline: none;
        padding: 20px;
        border-radius: 4px;
    }
    textarea{
        width:350px;
        height:150px;
    }
    button{
        width: 125px;
        height: 45px;
        margin-top: 5px;
        background-color: turquoise;
        text-transform: uppercase;
        letter-spacing: 6.5px;
        margin-left: 117px;
        border-radius: 15px;
        border-width: initial;
        border-style: none;
        border-color: initial;
        border-image: initial;
    }

</style>
