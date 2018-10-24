<template>
    <button class="btn btn-info" @click="share">分享到微信</button>
</template>
<script>
export default {
    methods : {
        share(){
            return this.$emit("shared",{
                name : "liuhaoxuan",
                age : 23
            });
        }
    }
}
</script>
