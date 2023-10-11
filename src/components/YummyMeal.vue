<template>
    <p>
        <strong>{{ name }}</strong>
        {{ price }}
        <button @click="addToCart">Add to Cart</button>
    </p>
</template>
<script>
    export default {
        props: {
            name: String,
            price: Number,
        },

        /**
         * 
         * @param {*} props 
         * @param {*} context => concede acesso a attrs, slots, emit
         */
        setup(props,{ emit }){
            const addToCart = () => { emit("addToCart", props.name) }

            return { addToCart }
        }
    }
</script>