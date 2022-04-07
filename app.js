new Vue({
    el: '#vue-app',
    data: {
        
    },
    methods: {
        alert: function () {
            // `this` inside methods points to the Vue instance
            alert('Hello ' + 'Vue2' + '!')
                
        }
    }
});
