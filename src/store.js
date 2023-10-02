import { createStore } from 'vuex'

let lastId = 0

const store = createStore({
    state() {
        return{
            notifications: [], 
        }
    },

    mutations: {
        addNotification(state, notification){
            state.notifications.unshift(notification)
        },
        notifications(state, notifications){
            state.notifications = notifications
        },
    },

    getters: {
        notifications(state) {
            return state.notifications
        },
    },

    actions: {
        addNotification({ commit }, data){
            const id = (lastId += 1);
            commit('addNotification', {
                id,
                ...data
            });
        },
        removeNotification({state, commit}, id) {
            let filteredNotifications = state.notifications.filter((notification) => {
                return notification.id !== id;
            })
            commit('notifications', filteredNotifications)
        }
    }
})

export default store