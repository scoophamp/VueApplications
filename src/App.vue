<template>
  <div id="app">
    
    <Main msg="Welcome to Your New Team"/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
#app {
 font-family: 'Quicksand', sans-serif;
 font-weight: 300;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3{
  font-weight: 400;
}

button{
font-family: 'Quicksand', sans-serif;
color:white;
background-color:#5F4B8BFF;
opacity: 0.9;
padding: 15.5px;
font-size: 18px;
border:none;
font-weight: 300;
}

button:disabled{

color:black;
background-color:grey;
opacity: 0.5;

}

button:hover{
  background-color:#41B883;
}

input{
color:white;
 font-size: 18px;
font-family: 'Quicksand', sans-serif;
background: #5F4B8BFF;
  letter-spacing: 3px;
padding: 15.5px;
border:none;

}

input::placeholder{

color:ivory

}
</style>
