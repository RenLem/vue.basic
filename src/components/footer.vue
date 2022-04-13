<template>
<footer>
    <p>{{ copyright }}</p>
</footer>
</template>

<script>
export default {
    data() {
        return {
            copyright: 'Copyright 2022 Vue 2 for everybody.'
        }
    }

}
</script>

<style scoped>
footer{
    background: orange;
    padding: 6rem;
}
p{
    color: rgb(255, 217, 172);
    text-align: center;
}
</style>