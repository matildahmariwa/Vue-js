<template>
    <div>
        <form @submit.prevent="addProduct">
            <input type="text" placeholder="Add product" v-model="productName"/>
            <button>Add Product</button>
        </form>
        <ul>
            <li v-for="product in products" v-bind:item="product" :key="product.id">

                {{ product.name}}

            </li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    // import {  mapMutations } from 'vuex'
    import uuid from 'uuid/v4'

    export default {
        name: 'display',
        data() {
            return {
                productName: '',
            }
        },
        computed: mapState([
            'products'
        ]),
        methods: {

            addProduct() {
                let newProduct = {
                    id: uuid(),
                    name: this.productName
                }
                this.$store.dispatch('addProducts', newProduct)
                this.newProduct = ''
            }
        }
    }
</script>
