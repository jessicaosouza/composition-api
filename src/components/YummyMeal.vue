<template>
    <p>
        <strong>{{ name }}</strong>
        <YummyMealPrice :price="price" />
        <button @click="addToCart">Add to Cart</button>
    </p>
</template>
<script>
    import YummyMealPrice from './YummyMealPrice.vue';

    export default {
        components: { YummyMealPrice },
        props: {
            name: String,
            price: Number
        },
        /**
         *
         * @param {*} props
         * @param {*} context => concede acesso a attrs, slots, emit
         */
        setup(props, { emit }) {
            const addToCart = () => emit("addToCart", props.name);
            return { addToCart };
        },
        components: { YummyMealPrice }
    }
</script>