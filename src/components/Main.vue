<template>
  <div class="hello">
    <AddCharacters/> 

<h1>{{countCharacters}} players</h1>

     <div v-if="countCharacters > 1">
  <CreateTeams/>
  <br>
  <ResetCharacters/>
</div>      
   <Characters/>
  </div>
</template>

<script>
import AddCharacters from './AddCharacter'
import ResetCharacters from './ResetCharacters'
import CreateTeams from './CreateTeams'
import Characters from './Characters'

import { mapGetters } from 'vuex'


export default {
 
   computed: {   
    ...mapGetters([
      'allCharacters',
      'countCharacters',
     
    ]),
 
    
    },
  components: { Characters, AddCharacters, CreateTeams, ResetCharacters},
  name: 'MainPage',  
  props: {
    msg: String
  },
  data(){

    return{

      anyCharacters: mapGetters

    }
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
