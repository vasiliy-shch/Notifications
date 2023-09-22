<template>
    <div class="top-left">
        
        <div>{{ id }}</div>
        <div>{{ newText }}</div>
        <div>{{ newDate }}</div>
        
    </div>
</template>

<script>
export default {
    emits: ['add'],
    props: {
        id: Number,
        text: String,
        date: String,
    },
    data(){
        return{
            newText: 'this is notification!',
            newDate: new Date(),
        }
    },
    methods: {
        //save(){
        //    this.$emit('add', this.newText, this.newDate)
        //}
    }
}
</script>

<style scoped>
.top-left{
    border: 1px solid red;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>