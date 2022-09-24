<template>
    <div>
        <h1>{{}}</h1>
    
    </div>
    <div class="filter-nav">
        <button class="filter" :class="{active:activebtn ==='btn1'}"
            @click="filterBysetvalue('viewall'),setActivebtnvalue('btn1')">VIEW
            ALL</button>
        <button class="filter" :class="{active:activebtn ==='btn2'}"
            @click="filterBysetvalue('Completed'),setActivebtnvalue('btn2')">COMPLETED</button>
        <button class="filter" :class="{active:activebtn ==='btn3'}"
            @click="filterBysetvalue('ongoing'),setActivebtnvalue('btn3')">ONGOING</button>
    </div>
    <div v-if="projects.length === 0" class="projectbox">
        <router-link to="/addprojects" class="nav-bar">

            <div class="projectbox">
                <p>No project added</p>
                <p>click to add a new project</p>
            </div>
        </router-link>
    </div>
    <ul>
        <li v-for="(element,index) in projects" v-bind:key="index" class="project-box"
            @click.prevent.self="showdetails(index)"
            :class="{'green-border-left':element.completed,'red-border-left' :!element.completed}">

            <span class="project-title">{{element.tittle}}</span>

            <span class="icons">

                <i class="fa-solid fa-trash" :key="index" :id="index" @click="deletedProject(index)"></i>
                 <i class="fa fa-trash" aria-hidden="true"></i> 
                <router-link :to="{name:'AddProjects',params: {id:index}}"><i class="fa-solid fa-pencil"></i>
                </router-link>
                <i class="fa-solid fa-check greenHover" @click="completedprojects(index)"
                    :class="{'green-color':element.completed}"></i>
            </span>
            <p class="project-detail" :key="index" v-if="showdetailedIndex === index"></p>
        </li>
    </ul>

</template>
<script>
export default {
    name: 'Projects',
    data() {
        return {
            // filterBysetvalue:true,
            showdetailedIndex: 'null',
            filterBy: 'viewall',
            activebtn: 'btn1',
            projects: [],
        }
    },
    methods: {
        filterBysetvalue(value) {
            this.filterBy = value;
            localStorage.setItem("projects", JSON.stringify(this.projects));
        }
    },
    // deletedelement(index){
    //    this.deletedProjectSelected = false
    //    this.deletedProjectTittle = this.projects[index].tittle
    // },
    completedprojects(index) {
        if (this.projects[index].completed === false) {
            this.projects[index].completed = true;
        }
        else {
            this.projects[index].completed = false;
        }
        localStorage.setItem("projects", JSON.stringify(this.projects));
    },


    created() {
        this.projects = JSON.parse(localStorage.getItem('projects' || "[]"));
    }

};
</script>
<style>
.filter {

    text-decoration: none;
    font-size: .95em;
    font-weight: 600;
    padding: 10px;
    background-color: violet;
    border: none;
    border-radius: 20px;
    color: #fff;

}

.filter:hover {
    background-color: #498ec7;

}

.projectbox {
    color: red;
    
    background-color: #fff;
    padding: 24px 30px;
    margin: 10px 50px;

}

</style>