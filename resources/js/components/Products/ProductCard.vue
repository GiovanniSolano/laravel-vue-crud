<template>
    <div class="col">
        <div
            class="card animate__animated animate__fadeIn animate__fast"
        >
            <div class="card-body">
                <div class="d-md-flex justify-content-md-end">
                    <small class="">{{product.sku}}</small>
                </div>
                <h3 class="card-title">{{ product.name }}</h3>
                <p class="card-text">
                    {{product.description}}
                </p>
            </div>
            <div class="card-footer d-flex justify-content-end">
                <div class="btn-group">
                    <router-link class="btn btn-primary m-1" :to="{name: 'edit-product', params: {id: product.id}}">
                        Edit
                    </router-link>
                    <button class="btn btn-danger m-1" @click="$emit('deleteProduct', product.id)">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
    },
    setup() {
        return {
        };
    },
};
</script>

<style scoped>
.card {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

</style>
