const state = {

  characters:  [
       
    ]

};

const getters = {

    allCharacters: (state) => state.characters,
    countCharacters: (state) => state.characters.length
}

const actions = {

   async resetCharacters({commit}){
   console.log("asdasd")
   commit("resetCharacters");

   },

   async addCharacter({ commit }, title){

   const newCharacter = {
    id: Math.random,
    name: title

};

      commit("newCharacter", newCharacter);

   }
    
};

const mutations = {
    resetCharacters: (state) => state.characters.splice(0, state.characters.length),
    setCharacters: (state, characters) => (state.characters = characters),
    newCharacter: (state, character) => state.characters.unshift(character)
};

export default{

state,
getters,
actions,
mutations

};