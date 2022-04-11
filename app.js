new Vue({
    el: '#vue-app',
    data: {
        output: '(Your favorite food)'
    },
    methods: {
        readRefs: function () {
            // All refs
            console.log(this.$refs);

            /*Specified refs*/
            
            // Ref one
            console.log(this.$refs.toInput.value);
            this.output = this.$refs.toInput.value

            // Ref two in console log only
            console.log(this.$refs.oo.scrollWidth);

        }
    }
});
