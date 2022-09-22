<template>
    <div>
        <h1>{{name}}</h1>
    </div>
    <div class="filter-nav">
        <button class="filter" :class="{active:activebtn ==='btn1'}" @click="filterBysetvalue('viewall')">VIEW
            ALL</button>
        <button class="filter" :class="{active:activebtn ==='btn2'}"
            @click="filterBysetvalue('Completed')">COMPLETED</button>
        <button class="filter" :class="{active:activebtn ==='btn3'}"
            @click="filterBysetvalue('ongoing')">ONGOING</button>
    </div>

    <router-link to="/addprojects" class="nav-bar">
        <div class="projectbox">
            <p>No project added</p>
            <p>click to add a new project</p>
        </div>
    </router-link>

</template>
<script>
export default {
    name: 'Projects',
    data() {

    }
};
</script>
<style>

</style>