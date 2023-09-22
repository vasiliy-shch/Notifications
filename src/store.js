import { createStore } from 'vuex'

const store = createStore({
    state() {
        return{
            notifications: [
                {
                    id: 1,
                    text: '',
                    date: '',
                }
            ]
        }
    },
    getters: {
        notifications(state) {
            return state.notifications
        },
    },
    actions: {
        addNotification({ getters }, text, date) {
            let id = getters.notifications.length + 1;
            getters.notifications.unshift({
                id,
                text,
                date,
            })
        }
    }
})

export default store