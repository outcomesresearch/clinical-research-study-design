// imports
import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Composition function
export function useTabSync(DEFAULT_TAB) {
    const route = useRoute();
    const router = useRouter();
    const tab = ref(DEFAULT_TAB);
    const isReadyToSync = ref(false);
    route, router, tab

    // Watch the tab reactive reference and update URL when it changes, after initial load
    watch(tab, (newValue, oldValue) => {
        console.log(newValue, oldValue)
        if (newValue !== oldValue && isReadyToSync.value) {
            router.push({ query: { ...route.query, tab: newValue } })
        }
    });

    // // Watcher for changes in the route's query parameter for tab, avoiding during initial load
    // watch(() => route.query.tab, (newTab) => {
    //     // console.log("watcher for tab query param")
    //     if (newTab !== tab.value && newTab) {
    //         tab.value = newTab
    //     }
    // });

    // On component mount, ensure the tab is set according to the route
    onMounted(() => {
        console.log("mounted", route.query.tab, DEFAULT_TAB)
        // If route specifies value, set tab to that
        tab.value = route.query.tab || DEFAULT_TAB
        nextTick(() => {
            isReadyToSync.value = true;
            // router.push({ query: { ...route.query, tab: tab.value } })
        });
        // Regardless  query not provided, set the URL to the tab value


    });

    return { tab };
}

nextTick;
