<template>
    <div>
        <p>There are {{ productCount }} products in stock</p>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name:'createProduct',
        computed: {
            ...mapGetters([
                'productCount'
            ]),
        }
    }

</script>
