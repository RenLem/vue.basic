<template>
    <div>
        <app-header></app-header>
        <!-- Only for exercise -->
        <!-- <p v:bind:dataPass="dataPass">{{ QdataPass }}</p> -->

        <app-body v-bind:bodyDataPass="QdataPass"></app-body>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/header.vue'
import Body from './components/body.vue'
import Footer from './components/footer.vue'

export default {
    components: {
        'app-header': Header,
        'app-body': Body,
        'app-footer': Footer
    },
    data () {
        return {
            QdataPass: [
                {name: 'Sony', speciality: 'Vue Components', show: false},
                {name: 'Samsung', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitachi', speciality: 'Click Events', show: false},
                {name: 'Ericsson', speciality: 'Conditionals', show: false},
                {name: 'Toshiba', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
        
        }
    }
}
</script>

<style>

</style>
