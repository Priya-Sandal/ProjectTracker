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
        path: '/edit-project/:id',
        component: AddProjects,
    },
    {
        path: '/addprojects',
        component: AddProjects,
        props:true,
    }


    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;