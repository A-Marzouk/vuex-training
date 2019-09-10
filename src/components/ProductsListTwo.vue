<template>
    <div>
        <h2> Product list two</h2>

        <ul>
            <li v-for="(product,index) in saleProducts" :key="index">
                name : {{product.name}} <br/>
                Price : {{product.price}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProductsListTwo",

        data() {
            return {}
        },

        computed:{
            products(){
                return this.$store.state.products ;
            },
            saleProducts(){
                return this.$store.getters.saleProducts ;
            }
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>