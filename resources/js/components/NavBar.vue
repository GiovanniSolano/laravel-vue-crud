<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img
                    src="../../img/logo.png"
                    alt=""
                    width="30"
                    height="24"
                    class="d-inline-block align-text-top"
                />
                Simple CRUD
            </a>
            <span class="navbar-text me-auto">
                <router-link class="nav-link" :to="{name: 'products'}">Products</router-link>
            </span>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style>
    .pointer {
        cursor: pointer;
    }
</style>
