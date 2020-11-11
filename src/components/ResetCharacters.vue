<template>
 <button @click="onReset">Reset</button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
 
  methods:{
    ...mapActions(["resetCharacters"]),
    onReset(e){
        e.preventDefault();
        this.resetCharacters()
        
    },
   
}

}
</script>

<style>

</style>