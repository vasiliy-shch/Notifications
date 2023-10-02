<template>
  <NotificationList/>
  <div class="center">
    <div class="body">
      <h1 class="title">Vue.js Notification</h1>

        <div class="buttons">
          <button @click="notify1">верх лево</button>
          <button @click="notify2">верх центр</button>
          <button @click="notify3">верх право</button>
        </div>

        <div class="buttons">
          <button @click="notify4">низ лево</button>
          <button @click="notify5">низ центр</button>
          <button @click="notify6">низ право</button>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import NotificationList from './components/NotificationsList.vue'
  import Notification from './components/Notification.vue';
  
  export default {
    components: {
      Notification,
      NotificationList,
    },
    data() {
      return{

      }
    },
    methods: {
        ...mapActions(['addNotification',]),
        notify1(){
          this.addNotification({
            text: 'this is left top notification',
            date: new Date,
            position: 'top_left',
          })
        },
        notify2(){
          this.addNotification({
            text: 'this is center top notification',
            date: new Date,
            position: 'top_center'
          })
        },
        notify3(){
          this.addNotification({
            text: 'this is right top notification',
            date: new Date,
            position: 'top_right'
          })
        },
        notify4(){
          this.addNotification({
            text: 'this is left bottom notification',
            date: new Date,
            position: 'bottom_left'
          })
        },
        notify5(){
          this.addNotification({
            text: 'this is center bottom notification',
            date: new Date,
            position: 'bottom_center'
          })
        },
        notify6(){
          this.addNotification({
            text: 'this is right bottom notification',
            date: new Date,
            position: 'bottom_right'
          })
        },
    }
  }
</script>

<style>
.title {
  margin-bottom: 0;
  margin: 0 auto;
}
.center{
  display: flex;
  margin: 350px auto;
  justify-content: center;
}
.body{
  display: flex;
  flex-direction: column;
  align-self: auto;
}
button {
  background-color: azure;
    border: 1px solid forestgreen;
    border-radius: 5px;
    margin: 0 10px;
    cursor: pointer;
}
button:hover{
  opacity: .6;
}
.buttons{
  display: flex;
  margin: 10px auto;
}
.notification{
    border: 1px solid red;
    border-radius: 10px;
    width: 40%;
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
</style>
