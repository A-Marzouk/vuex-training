<template>
    <div id="app">
        <ProductListOne :products="products"></ProductListOne>
        <ProductListTwo :products="products"></ProductListTwo>
    </div>
</template>

<script>
import ProductListOne from './components/ProductsListOne' ;
import ProductListTwo from './components/ProductsListTwo' ;

    export default {
        name: 'app',
        components:{
            ProductListOne,
            ProductListTwo
        },
        data() {
            return {
                products: [
                    {
                        'name' : 'Banana',
                        'price': '25'
                    },
                    {
                        'name' : 'Mango',
                        'price': '50'
                    },
                    {
                        'name' : 'Watermelon',
                        'price': '15'
                    },
                    {
                        'name' : 'Strawberry',
                        'price': '12'
                    },
                ]
            }
        }
    }
</script>

<style>

</style>
