<template>
<div id="brands">

    <ul>
        <li v-for="brand in bodyDataPass" v-on:click="brand.show = !brand.show">
            <h2>{{ brand.name }}</h2>
            <h3 v-show="brand.show">{{ brand.speciality }}</h3>
        </li>
    </ul>
    <h3 v-for="localBody in propsBodyApp">{{ localBody }}</h3>
    <button v-on:click="deleteBrand">Delete brand</button>
    
</div>
</template>

<script>
export default {
    props: {
        bodyDataPass: {
            type: Array,
            reqired: true
        },
        propsBodyApp:{
            type: Array,
            reqired: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
        deleteBrand: function () {
            this.bodyDataPass.pop();
        }
    },

    // Life cycle hooks
    beforeCreate() {
        alert('beforeCreate')
    },
    created() {
        alert('created')
    },
    beforeMount() {
        alert('beforeMount')
    },
    mounted() {
        alert('mounted')
    },
    beforeUpdate() {
        alert('beforeUpdate')
    },
    updated() {
        alert('updated')
    },

    // Thise below does not show
    beforeDelete() {
        alert('beforeDelete')
    },
    deleted() {
        alert('deleted')
    },
    beforeDestroy() {
        alert('beforeDestroy')
    },
    destroyed() {
        alert('destroyed')
    }

}
</script>

<style scoped>

#brands{
    background: rgb(130, 47, 255);
    padding: 2rem;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    box-shadow: 20px;
}
li{
    background: rgb(142, 85, 228);
    border-radius: 1rem;
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 0px solid rgb(190, 152, 228);
    margin: 10px;
}
h2{
    color:rgb(208, 158, 255);
}
h3{
    color:rgb(208, 158, 255);
}
</style>