<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <p>分享次数：{{ shareTime }}</p>
        <p>发表时间：{{ date | moment }}</p>
        <p class="lead">{{ content }}</p>
        <app-author :articlename="name"></app-author>
        <app-share style="color:white" @shared = "fooshare($event,10)"></app-share>
    </div>
</template>
<script>
import moment from "moment"
import Author from "./Author.vue"
import Share from "./Share.vue"
export default {
    data(){
        return {
            title : "今日看点",
            date : new Date(),
            content : "好好学习好好学习好好学习好好学习",
            name : "",
            age : 0,
            shareTime : 0,
        }
    },
    filters : {
        moment(value){
            return moment(value).format("MMMM Do")
        }
    },
    components : {
        'app-author' : Author,
        'app-share' : Share
    },
    methods : {
        fooshare(event,age){
            console.log(age);
            return this.shareTime++;
        }
    }
}
</script>
<style scoped>
    *{
        color: red;
    }
</style>
