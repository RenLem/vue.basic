new Vue({
    el: '#vue-app',
    data: {
        age: 32,
        x: 0,
        y: 0 
    },
    methods: {
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
        },

        alert: function () {
            alert('You clicked me');
        }
    }
});
