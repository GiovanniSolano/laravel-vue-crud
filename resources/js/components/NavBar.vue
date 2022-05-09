<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 pointer">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'products'}">Products</router-link>
                    </li>
                </ul>
            </div>
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
