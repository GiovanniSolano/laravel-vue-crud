import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {

    const store = useStore();

    const getProducts = async () => {
        const resp = await store.dispatch('products/getProducts');
        return resp;
    };

    const getProductById = (product_id) => {
        const product = store.dispatch('products/getProductById', product_id);
        return product;
    }

    return {
        getProducts,
        products: computed(() => store.getters['products/getProducts']),
        product: computed(() => store.getters['products/getProduct']),
        isLoading: computed(() => store.getters['products/isLoading']),
        createProduct: async(product) => {
            const resp = await store.dispatch('products/createProduct', product);
            return resp;
        },
        deleteProduct: async(product_id) => {
            const resp = await store.dispatch('products/deleteProduct', product_id)
            return resp;
        },
        getProductById,
        updateProduct: async(product_id, product) => {
            const resp = await store.dispatch('products/updateProduct', [product_id, product]);
            return resp;
        },
    }

}

export default useProducts;
