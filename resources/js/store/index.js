import { createStore } from "vuex";
import products from "../modules/products/index";

const store = createStore({

    modules: {
        products,
    }
})


export default store
