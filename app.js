new Vue({
    el: '#vue-app',
    data: {
        fleet: 30,
        s: 0,
        m: 0
    },
    methods: {
        /* addToFleetStarships: function () {
            console.log('added a starship');
            return this.s + this.fleet
        },
        addToFleetMotherships: function() {
            console.log('added a mothership');
            return this.m + this.fleet
        } */
        
    },
    computed: {
        addToFleetStarships: function () {
            console.log('added a starship');
            return this.s + this.fleet
        },
        addToFleetMotherships: function () {
            console.log('added a mothership');
            return this.m + this.fleet
        }
    }
});
