import { createStore } from 'vuex'

const store = createStore({
    state() {
        return{
            notifications: [
                {
                    id: 1,
                    text: '',
                    date: '',
                    position:'',
                }
            ]
        }
    },
    mutations: {
        addNotification(state, data) {
            let id = state.notifications.length + 1;
            state.notifications.unshift({
                id,
                ...data
            });
        }
    },
    getters: {
        notifications(state) {
            return state.notifications
        },
    },
})

export default store