import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import store from './store'

library.add(faArrowCircleLeft)

require('./bootstrap');


import { createApp } from 'vue'
import router from './router'
import Index from './pages/Index.vue'

const app = createApp({
    components: {
        Index,
    }
})
.component("font-awesome-icon", FontAwesomeIcon)
.use(store)
.use(router)

app.mount('#app')
