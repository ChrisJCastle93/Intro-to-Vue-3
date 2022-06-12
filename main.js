const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [{name:'Small', quantity: 4}, {name:'Medium', quantity: 2}, {name:'Large', quantity: 2}]
        }
    }
})
