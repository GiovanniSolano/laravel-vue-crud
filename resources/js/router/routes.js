

const routes = [
  {
      path: '/',
      component: () => import(/* webpackChunkName: "gome" */ '../pages/Home.vue'),
  },
  {
      name: 'products',
      path: '/products',
      component: () => import(/* webpackChunkName: "products" */ '../pages/Products/Products.vue'),
  },
  {
      name: 'create-product',
      path: '/products/create',
      component: () => import(/* webpackChunkName: "create-product" */ '../pages/Products/CreateProduct.vue'),
    },
  {
    name: 'edit-product',
    path: '/products/edit/:id',
    component: () => import(/* webpackChunkName: "edit-product" */ '../pages/Products/EditProduct.vue'),
    props: (route) => {
        return {
            id: parseInt(route.params.id)
        }
    }
  },
];

export default routes;
