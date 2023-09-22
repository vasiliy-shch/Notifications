<template>
<div class="top-noti">
    <div>
      <Notification
        v-for="notification in notifications"
        :id="notification.id"
        :text="notification.text"
        :date="notification.date"
        :key="notification.id"
      />
    </div>
    <div>
        <Notification
        v-for="notification in notifications"
        :id="notification.id"
        :text="notification.text"
        :date="notification.date"
        :key="notification.id"
      />
    </div>
    <div>
      <Notification
        v-for="notification in notifications"
        :id="notification.id"
        :text="notification.text"
        :date="notification.date"
        :key="notification.id"
      />
    </div>
  </div>
  <div class="center">
    <div class="body">
      <h1 class="title">Vue.js Notification</h1>

        <div class="buttons">
          <button @click="addNotification()">верх лево</button>
          <button @click="addNotification">верх центр</button>
          <button @click="addNotification">верх право</button>
        </div>

        <div class="buttons">
          <button @click="addNotification">низ лево</button>
          <button @click="addNotification">низ центр</button>
          <button @click="addNotification">низ право</button>
        </div>
    </div>
  </div>

  <div class="bot-noti">
    <div>
      <Notification
        v-for="notification in notifications"
        :id="notification.id"
        :text="notification.text"
        :date="notification.date"
        :key="notification.id"
      />
    </div>

    <div>
      <Notification
        v-for="notification in notifications"
        :id="notification.id"
        :text="notification.text"
        :date="notification.date"
        :key="notification.id"
      />
    </div>

    <div>
      <Notification
        v-for="notification in notifications"
        :id="notification.id"
        :text="notification.text"
        :date="notification.date"
        :key="notification.id"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions } from 'vuex'
import Notification from './Notification.vue'
export default {
    components:{
        Notification,
    },
    computed: mapGetters(['notifications']),
    methods: {
        ...mapActions(['addNotification']),
    }
}
</script>

<style>
.top-noti {
  display: flex;
  justify-content: space-between;
}
.bot-noti {
  display: flex;
  justify-content: space-around;
}
.title {
  margin-bottom: 0;
  margin: 0 auto;
}
.center{
  display: flex;
  margin: 60px auto;
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
}
.buttons{
  display: flex;
  margin: 10px auto;
}
</style>