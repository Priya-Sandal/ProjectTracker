<template>
    <div id="addprojects">
        <h1><label for="project-title">Tittle</label></h1>
        <input type="text" id="project" v-model="tittle">
        <h1><label for="project-details">Details</label></h1>
        <textarea name="" id="project-details" cols="100" rows="10" v-model="details"></textarea>
        <br><br>
        <button @click="AddProject" class="btn" v-if="!this.id" :disables="tittle.length === 0 ||detail.length === 0">AddProjects</button>
        <!-- <button @click="updateprojects" class="btn">updateprojects</button> -->
        <!-- <h1>{{tittle}}</h1>  -->

    </div>
</template>
<script>
export default {
    name: 'AddProjects',
    props: {
        id: String
    },

    data() {
        return {
            tittle: "",
            details: "",
            projects: [],
        };

    },
    methods: {
        AddProject() {
            this.projects.push({
                'tittle': this.tittle,
                'detail': this.detail,
                completed: false,
            })
            localStorage.setItem("projects", JSON.stringify(this.projects));
            this.tittle = "";
            this.detail = "";
            this.$router.push({ path: '/' })
        },
       
    },
  
}

</script>
<style>
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    width: 100%;

}

input {
    /* display: block; */
    padding: 10px 15px;
    width: 55%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

.btn {
    background-color: green;
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    border: none;
    font-size: 1em;
    cursor: pointer;
}



#id {
    background-color: red;
}
</style>
