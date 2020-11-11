<template>
  <div class="container">
<form @submit="onSubmit">

<input @keyup="onChange" v-model="title" type="text" placeholder="Playername..."><button type="submit" :disabled="titleEmpty">+ Add player</button>

</form>


  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
name:"AddCharacter",
data(){

return {
    title: '',
    titleEmpty: true    
}

},

methods:{
    ...mapActions(["addCharacter"]),
    onSubmit(e){
        e.preventDefault();
        this.addCharacter(this.title)
        this.title = '';
    },
    onChange(e){     
     this.titleEmpty = (e.target.value === '') ? true : false;
    }  
}
}
</script>

<style>

</style>