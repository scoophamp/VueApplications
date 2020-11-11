<template>
    <div class="container">
        
<div v-for="char in allCharacters" :key="char.id" class="character">



<div class="minion">

</div>
<h3>{{char.name}}</h3>


</div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
name: "Characters",
computed: mapGetters(["allCharacters"])
}
</script>

<style>

@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

.container{
    display: flex;
    justify-content: center;
}

.character{
    width: 20%;
    margin: 50px;
}




.minion{
justify-content: center;
text-align: center;
  border-radius: 50%;
  
  width: 100%;
  height: auto;
  padding-top: 100%;
  background-color: rgba(255, 86, 86, 0.2);

  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}
</style>