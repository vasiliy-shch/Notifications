<template>
    <div :class="[position, styles]" @click="removeNotification(id)"> 
        <div>{{ id }}</div>
        <div>{{ text }}</div>
        <div>{{ date }}</div>
        <div>{{ position }}</div>
    </div>
    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        id: Number,
        text: String,
        date: String,
        position: String,
    },
    data(){
        return{
            styles: {
                notification_hidden: false,
                notification: true,
                //position: true, имя класса из пропсов, 
                //которое прокидываю из App.vue НЕ СРАБОТАЕТ, 
                // повесит класс 'position'
            }
        }
    },
    methods: {
        ...mapActions(['removeNotification']),
    }
}
</script>

<style scoped>
.notification{
    border: 1px solid red;
    border-radius: 10px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background-color: bisque;
    margin-top: 5px;
}
.notification:hover{
    opacity: .8;
}
.notification_hidden {
    display: none;
}
.top_left{
    position: fixed;
    top: 60px;
    left: 10%;
}
.top_center {
    position: fixed;
    top: 60px;
    left: 40%;
}
.top_right {
    position: fixed;
    top: 60px;
    left: 70%
}
.bottom_left {
    position: fixed;
    bottom: 60px;
    left: 10%;
}
.bottom_center {
    position: fixed;
    bottom: 60px;
    left: 40%;
}
.bottom_right {
    position: fixed;
    bottom: 60px;
    left: 70%;
}
</style>