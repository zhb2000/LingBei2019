<template>
    <div class="float_tag">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "PinkFloatTag"
}
</script>

<style scoped>
.float_tag {
  color: white;
  background-color: #ff8082;
  box-shadow: 0px 2px 8px 2px rgba(255, 128, 130, 0.5);
  padding: 5px 15px;
  border-radius: 15px;
  display: inline-block;
}
</style>