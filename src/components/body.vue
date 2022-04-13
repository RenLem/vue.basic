<template>
<div id="brands">
    <ul>
        <li v-for="brand in brands" v-on:click="brand.show = !brand.show">
            <h2>{{ brand.name }}</h2>
            <h3 v-show="brand.show">{{ brand.speciality }}</h3>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            brands: [
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