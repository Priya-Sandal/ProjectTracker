<template>
 
 
 <div id="nav-bar">

<router-link to="/" class="nav">Projects</router-link>
<router-link to="/AddProjects" class="nav">AddProjects</router-link>

</div>
<router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin-top: 60px;
}



.nav-bar {
  font-size: 1.5em;
  text-align: center;
  padding: 10px;
width : 100%;
  background-color: blue;
}

.nav {
  color: white;
  background-color: blue;
  padding: 10px 30px;
  height: 100%;
  width: 100%;
  text-decoration: none;
  margin: 10px 0;
}

.nav:hover {
  color: white;
  background-color: red;
}


</style>
