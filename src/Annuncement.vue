<template>
    <div class="alert alert-info">
        <slot name = "one">{{ msg }}</slot>
        <slot name = "two">{{ msg2 }}</slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg : "这是一个网页",
            msg2 : "这是一个网页222"
        }
    }
}
</script>
