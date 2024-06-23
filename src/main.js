import { createApp } from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import OutcomesResearchWrapper from 'shared-code'

loadFonts()

let app = createApp(App)
app.use(OutcomesResearchWrapper)
app.use(vuetify)
app.mount('#app')
