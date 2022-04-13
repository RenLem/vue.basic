<template>
    <div>
        <app-header></app-header>
        <app-body></app-body>
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
        
        }
    }
}
</script>

<style>

</style>
