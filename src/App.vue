<template>
    <div>
        <app-header v-bind:title="title"></app-header>
        <!-- Only for exercise -->
        <!-- <p v:bind:dataPass="dataPass">{{ QdataPass }}</p> -->

        <app-body v-bind:bodyDataPass="QdataPass" v-bind:propsBodyApp="dataBody"></app-body>

        <!-- Second body button will delete data from first body becouse bouth button are deleting data in source array -->
        <!-- <app-body v-bind:bodyDataPass="QdataPass"></app-body> -->

        <app-footer v-bind:title="title" v-bind:propsFooterApp="dataBody"></app-footer>
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
            ],

            title: 'Primitive type (vs. Reference type)',
            dataBody: ['Pass data to Body and Footer', 'Display data throught components from App']

        }
    }
}
</script>

<style>

</style>
