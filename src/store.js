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
    getters: {
        notifications(state) {
            return state.notifications
        },
    },
    actions: {
        addNotification({ getters }, data) {
            let id = getters.notifications.length + 1;
            getters.notifications.unshift({
                id,
                ...data, //распаковка объекта data из App.vue,
                //который передается внутри метода notify()
                //text: data.text, - вид без распаковки
                //date: data.date,
            });
        }
    }
})

export default store