// This will change every component becouse its outside of vue app
var data = {
    name: 'Outside'
}

Vue.component('dude', {
    template: '<p>Kawabanga, I am {{ name }}. <button v-on:click="changeName">Change name</button> </p>!',
    data: function () {
        // Returning data from outside
        /*return data*/
        // Inside data
         return{
            name: 'Bumblebee'
        } 
    },
    methods:{
        changeName: function () {
            // Changing data from  or insaide
            this.name = '--Yoshi--'
        }
    }
})

new Vue({
    el: '#vue-app-one',
});

new Vue({
    el: '#vue-app-two',
});
