import Vue from 'vue';
import Vuex from 'vuex';

// to use vuex in our app
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
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
    },
    getters:{
        saleProducts: (state) => {
            let saleProducts = state.products ;

            // map function returns new array after making some changes

            return saleProducts.map( (product) => {
                return {
                    name  :  '** ' + product.name + ' **',
                    price : product.price/2
                } ;
            });
        }
    },
    mutations:{
        reducePrice: (state,payload) => {
            state.products.forEach( (product) => {
                product.price -= payload ;
            });
        }
    },
    actions:{
        reducePrice: (context,payload) => { // context here is presenting the store
            // like if we have an asynchronous task
            setTimeout( () => {
                context.commit('reducePrice',payload);
            },2000);
        }
    }
});