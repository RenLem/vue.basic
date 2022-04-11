var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue app one'
    },
    methods: {
        
    },
    computed: {
        greet: function () {
            return 'Hello from One ;O)'
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue app two'
    },
    methods: {
        changeTitle: function () {
            one.title = 'Function in app two has executed and changed this!'
        }

    },
    computed: {
        greet: function () {
            return 'Hey dude, wecome &:)'
        }
    }
});

two.title = 'Changed from outside! :)'