new Vue({
    el: '#vue-app',
    data: {
        name: 'Njonjo',
        job: 'Astronaut',
        website: 'https://www.bing.com',
        websiteTag: '<a href="https://www.google.com">Gooogle</a>',
    },
    methods: {
        greet: function (timeOfDay) {
            return 'Good ' + timeOfDay + ' ' + this.name;
        },
        
    }
});
