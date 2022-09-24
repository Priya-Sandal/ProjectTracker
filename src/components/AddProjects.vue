<template>
    <div id="add-project">
        <div class="field">
        <h1><label for="project-title">Tittle</label></h1>
        <input type="text" id="project-title" v-model="tittle">
        </div>
        <div class="field">
        <h1><label for="project-details">Details</label></h1>
        <textarea name="" id="project-details" cols="100" rows="10" v-model="details"></textarea>
        </div>
        <br><br>
        <button @click="AddProjects" class="btn">AddProjects</button>
        <!-- <button @click="updateprojects" class="btn" v-if="!this.id" :disabled="tittle.length===0||detail.length===0">updateprojects</button> -->
        <!-- <h1>{{tittle}}</h1>  -->

    </div>
</template>
<script>
export default {
    name: 'AddProjects',
    props: {
        id: String,
    },

    data() {
        return {
            tittle: "",
            details: "",
            projects: [],
        };

    },
    methods: {
       
 AddProjects() {
    console.log(this.projects)
            this.projects.push({
                'tittle': this.tittle,
                'details': this.details,
        

            })
            
            localStorage.setItem("projects", JSON.stringify(this.projects));
            this.tittle = "";
            this.details = "";
            this.$router.push({ path: '/' })
        },

    },
    created() {
        this.projects = JSON.parse(localStorage.getItem('projects' || "[]"));
        // if(this.id){
        //     this.tittle = this.projects[this.id].tittle;
        //     this.details = this.projects[this.id].details;

    }
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
</style>
