<template>
    <div>
        <h2>Products list one</h2>

        <ul>
            <li v-for="(product,index) in saleProducts" :key="index">
                name  : {{product.name}} <br/>
                Price : {{product.price}}
            </li>
        </ul>

        <a href="javascript:void(0)" @click="reducePrice(4)">Reduce price</a>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {mapGetters} from 'vuex'

    export default {
        name: "ProductsListOne",

        data(){
            return{

            }
        },

        computed:{
            products(){
                return this.$store.state.products ;
            },

            ...mapGetters([
                'saleProducts' // this will return this.$store.getters.saleProducts ; automatically
            ])
        },

        methods:{
            // reducePrice(amount){
            //     // committing a mutation by dispatching an action
            //     this.$store.dispatch('reducePrice',amount) ;
            // }

            ...mapActions([
                'reducePrice' // this will return this.$store.dispatch('reducePrice',amount) ; automatically ( with the parameters passed )
            ])
        },

        mounted() {
        }
    }
</script>

<style scoped>

</style>