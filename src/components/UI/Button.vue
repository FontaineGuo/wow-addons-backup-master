<template>
    <button class="btn"
    :class="[
        {'btn-menu':type == 'menu'}
    ]"
    >
    <slot></slot>
    </button>
</template>

<style lang="scss">
.btn-menu{
    width: 60;
    height: auto;
    color: #333333;
    border-top-color: #c2c0c2;
    border-right-color: #c2c0c2;
    border-bottom-color: #a19fa1;
    border-left-color: #c2c0c2;
    background-color: #757474;
}

</style>