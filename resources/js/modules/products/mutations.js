export const setProducts = (state, products) => {

    if(products.length <= 0) {
        state.products = [];
        state.isLoading = false;
    }

    state.products = products;
    state.isLoading = false;

}

export const setIsLoading = (state, value) => {
    state.isLoading = value;
}
