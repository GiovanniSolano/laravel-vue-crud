import laravelApi from '../../api/laravelApi'

export const getProducts = async({commit}) => {

    try {
        const {data:products} = await laravelApi.get('/api/products');

        commit('setProducts', products.data);

        return {ok: true}

    } catch (error) {
        console.log(error);
        commit('setLoading', false);
        return {ok: false, message: 'Error - Get Products'}

    }

}

export const createProduct = async({commit}, product_form) => {

    try {
        const { data:product } = await laravelApi.post('/api/products', product_form);

        return {ok: true, productCreated: product.data.name}

    } catch (error) {
        console.log(error);
        return {ok: false, message: 'Error - Create Product', errors: error.response.data.errors}
    }

}


export const deleteProduct = async({commit}, product_id) => {

    try {
        const { data:product } = await laravelApi.delete(`/api/products/${product_id}`);

        return {ok: true, productDeleted: product.data.name};


    } catch (error) {
        console.log(error);
        return {ok: false, message: 'Error - Delete Product'}
    }

}


export const getProductById = async({commit}, product_id) => {

    try {

        const {data:product} = await laravelApi.get(`/api/products/${product_id}`);

        return {ok: true, product: product.data}

    } catch (error) {
        console.log(error);
        return {ok: false, message: 'Error - Edit Product'}
    }

}

export const updateProduct = async({commit}, [product_id, product_form]) => {

    product_form._method = 'PUT';

    try {
        const { data:product } = await laravelApi.post(`/api/products/${product_id}`, product_form);

        return {ok: true, productUpdated: product.data.name}

    } catch (error) {
        console.log(error);
        return {ok: false, message: 'Error - Update Product', errors: error.response.data.errors}
    }

}
