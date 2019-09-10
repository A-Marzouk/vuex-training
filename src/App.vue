<template>
    <div id="app">
        <ProductListOne ></ProductListOne>
        <ProductListTwo ></ProductListTwo>
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

            }
        }
    }
</script>

<style>

</style>
