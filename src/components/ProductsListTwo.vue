<template>
    <div>
        <h2> Product list two</h2>

        <ul>
            <li v-for="(product,index) in products" :key="index">
                name : {{product.name}} <br/>
                Price : {{product.price}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProductsListTwo",
        props: ['products'],
        data() {
            return {}
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>