import { createApp } from 'vue'
import App from './App.vue'

import OutcomesResearchWrapper from 'shared-code'

let app = createApp(App)
app.use(OutcomesResearchWrapper)
app.mount("#app")
