<template>
    <div class="bar"></div>
</template>

<script>
export default {
    name: "PaintingToolbar",
    props:{
        selected:Number
    }
}
</script>

<style scoped>
.bar{
    height: 100%;
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.2);
    border-radius: 20px 20px 0px 0px;
}
</style>