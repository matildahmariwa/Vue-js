<template>
    <div>
        <form>

            <input type="text" v-model="email" placeholder="Enter email">
            <input type="text" v-model="password" placeholder="Password">


            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {

                email : "",
                password : "",

            }
        },
        methods: {
            login: function () {
                const email = this.email
                const password = this.password
                this.$store.dispatch('login', { email, password }).then(() => this.$router.push('/'))
                }


        }
    }
</script>
