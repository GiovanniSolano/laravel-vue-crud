<template>

    <div class="d-flex justify-content-center mt-5" v-if="isLoading">
        <Spinner/>
    </div>

    <div class="container mt-5" v-else>
        <h1>Products</h1>
        <div class="mt-3 d-md-flex justify-content-md-end">
            <router-link class="btn btn-primary float-right" :to="{name: 'create-product'}">Create</router-link>
        </div>

        <div class="row" v-if="products.length > 0">
            <div class="row justify-content-center row-cols-1 row-cols-md-3 g-4 m-4">
                <ProductCard v-for="product in products" :product="product" :key="product.id"
                    @delete-product="deleteProduct($event)"
                    @edit-product="editProduct($event)"
                />
            </div>
        </div>

        <div class="row" v-else>
            <h3 class="text-danger">PRODUCTS NOT FOUND</h3>
        </div>

    </div>
</template>

<script>
import { defineAsyncComponent, onMounted } from 'vue';
import useProducts from '../../composables/useProducts'
import Swal from 'sweetalert2';

export default {

  components: {
    ProductCard: defineAsyncComponent(() => import('../../components/Products/ProductCard.vue')),
    Spinner: defineAsyncComponent(() => import('../../components/Spinner.vue'))
  },

  setup() {

    const { getProducts, deleteProduct, products, isLoading } = useProducts();

    onMounted( async() => {
        await getProducts();
    });

    return {
        products,
        getProducts,
        isLoading,
        deleteProduct: async(product_id) => {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then(async(result) => {
                if (result.isConfirmed) {

                    const resp = await deleteProduct(product_id);

                    if(resp.ok) {

                        Swal.fire(
                        'Deleted!',
                        `Your product has been deleted succesfully. <strong>${resp.productDeleted}</strong>`,
                        'success'
                        )

                        await getProducts();
                    }
                }
            });
        },
    }

  }
}
</script>

<style scoped>
</style>
