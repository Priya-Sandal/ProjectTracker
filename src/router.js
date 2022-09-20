import { createWebHistory, createRouter } from 'vue-router'


const Projects = () => import('./components/Projects.vue');

const AddProjects = () => import('./components/AddProjects.vue');

const routes = [
    {
        name: 'Projects',
        path: '/',
        component: Projects
    },
    {
        name: 'AddProjects',
        path: '/AddProjects',
        component: AddProjects
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;