new Vue({
    el: '#vue-app',
    data: {
        age: 32,
        x: 0,
        y: 0 
    },
    methods: {
        greet: function (timeOfDay) {
            return 'Good ' + timeOfDay + ' ' + this.name;
        },
        add: function () {
        this.age++;
    },
        subtract: function () {
            this.age--;
        }, */
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dcr) {
            this.age -= dcr;
        },
        updateXY: function (event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
