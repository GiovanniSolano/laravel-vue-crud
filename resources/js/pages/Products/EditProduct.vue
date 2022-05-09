<template>
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </symbol>
    </svg>
    <div class="container mt-5">
        <router-link class="btn btn-primary mb-3" :to="{name: 'products'}">
            <font-awesome-icon icon="arrow-circle-left" />
            Products
        </router-link>
        <h1 class="mt-3">Edit a simple product</h1>

        <div v-if="errors" class="mt-3">
            <div v-for="(value, key) in errors" :key="key">
                <div class="alert alert-danger alert-dismissible fade show d-flex align-items-center" role="alert" v-for="error in value" :key="error">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                    <strong>{{ error }}</strong>
                </div>
            </div>
        </div>

        <form class="mt-3" autocomplete="off" @submit.prevent="updateProduct">
            <div class="form-group row mb-2">
                <div class="form-group col-md-6">
                    <label for="name">Name:</label>
                    <input type="text" v-model="productForm.name" class="form-control" id="name" placeholder="Enter name">
                </div>
                <div class="form-group col-md-6 ">
                    <label for="sku">Sku:</label>
                    <input type="text" v-model="productForm.sku" class="form-control" id="sku" placeholder="Enter sku">
                </div>
            </div>
            <div class="form-group row mb-2">
                <div class="form-group col-md-12">
                    <label for="description">Description:</label>
                    <input type="text" v-model="productForm.description" class="form-control" id="description" placeholder="Enter description">
                </div>
            </div>
            <div class="mt-3 d-md-flex justify-content-md-end">
                <button class="btn btn-success">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import useProducts from '../../composables/useProducts';
import Swal from 'sweetalert2'

export default {

    props: {
        id: {
            type: Number,
            required: true
        }
    },

    setup(props) {

        const { getProductById, updateProduct, product } = useProducts();
        const router = useRouter();

        const productForm = ref({
            name: '',
            sku: '',
            description: ''
        });

        async function getProduct() {
            const resp = await getProductById(props.id);
            if(resp.ok) {
                productForm.value = resp.product;
            }
        }

        getProduct();

        const errors = ref([]);

        return {
            productForm,
            errors,
            product,

            updateProduct: async() => {

                errors.value = [];

                const resp = await updateProduct(props.id, productForm.value);

                if(!resp.ok) {
                    errors.value = resp.errors;
                    return;
                }

                Swal.fire({
                    icon: 'success',
                    title: `Product updated successfully`,
                    text:  resp.productUpdated
                });

                router.push({name: 'products'})

            }

        }

    }

}
</script>

<style>

</style>
