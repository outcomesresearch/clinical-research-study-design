import { createRouter, createWebHistory } from 'vue-router';
import IntroMessage from '@/views/IntroMessage.vue';
import DecisionTree from '@/views/DecisionTree.vue';
import VisualFlowChart from '@/components/VisualFlowChart.vue';

const routes = [
    {
        path: '/intro',
        name: 'IntroMessage',
        component: IntroMessage
    },
    {
        path: '/decision-tree',
        name: 'DecisionTree',
        component: DecisionTree
    },
    {
        path: '/flow-chart',
        name: 'FlowChart',
        component: VisualFlowChart
    },
    {
        path: '/',
        redirect: '/intro'
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/intro'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
