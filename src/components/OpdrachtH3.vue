<template>
    <div>
        <h1>{{header}}</h1>
        <ul class="list-group">
            <li class="list-group-item" v-for="data in mijn.data" :key="data.id">
                {{data.naam}} -
                {{data.tekst}}
            </li>
        </ul>
        v-text is om de text aan te passen en v-html op de layout aan te passen.<br>
        je kan het beter niet gebruiken omdat het te makkelijk is om daar een aanval op te doen.<br>
        <button class="btn btn-success" :disabled="isDisabled">IsDisabled</button>
        <button class="btn btn-dark" @click="changeState()">Change state</button><br>
        <select name="list1">
            <option v-for="(nummer, index) in list1" :key="index" v-bind:value="nummer">
                {{nummer}}
            </option>
        </select>
    </div>
</template>

<script>
    import mijn from "../data/odrachtH3";

    export default {
        name: "OpdrachH3",
        data() {
            return {
                mijn,
                header: "Opdracht H3",
                isDisabled: true,
                list1:  [10, 20, 30, 40, 50]
            }
        },
        methods:{
            changeState(){
                this.isDisabled = !this.isDisabled;
            }
        }
    }
</script>
