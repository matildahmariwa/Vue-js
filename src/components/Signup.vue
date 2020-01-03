<template>
    <div>
        <form>
            <input type="text" v-model="name" placeholder="Enter Name">
            <input type="text" v-model="email"  placeholder="Email">
            <input type="text" v-model="password"  placeholder="Password">
            <input type="text" v-model="passwordAgain"  placeholder="Confirm Password">

            <button type="submit">Register</button>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name : "",
                email : "",
                password : "",
                passwordAgain : ""
            }
        },
        methods: {
            signIn: function () {
                let info = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }

                this.$store.dispatch('signIn', info).then(() => this.$router.push('/login'))

            }
        }
    }
</script>
