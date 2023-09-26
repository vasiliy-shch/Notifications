<template>
  <div class="notifications">
    <Notification
      v-for="notification in notifications"
      :id="notification.id"
      :text="notification.text"
      :date="notification.date"
      :position="notification.position"
      :key="notification.id"
    />
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
}
</script>

<style>
.notifications {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>