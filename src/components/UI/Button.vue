<template>
    <button><slot></slot></button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    button {
        padding: 10px 25px;
        font-size: 20px;
        color: white;
        background: linear-gradient(90deg, #F89D41 0%, #C45A50 100%);;
        border-radius: 6px;
        border: none;
        transition: .3s;
        cursor: pointer;
    }
    button:hover {
        transform: scale(1.02);
    }
</style>