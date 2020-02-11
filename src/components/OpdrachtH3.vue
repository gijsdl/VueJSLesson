<template>
    <div>
        <div class="row">
            <div class="col">


                <h1>{{header}}</h1>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(data, index) in mijn.data" :key="data.id" @click="changeCurrent(index)">
                        {{data.naam}}
                    </li>
                </ul>
            </div>
            <div class="col">
                <h1>Hoofdstuk 4</h1>
                <ul class="list-group">
                    <li class="list-group-item">{{current.id}}</li>
                    <li class="list-group-item">{{current.naam}}</li>
                    <li class="list-group-item">{{current.tekst}}</li>
                    <li class="list-group-item" v-show="isCheap">
                        <span class="badge badge-success badge-pill">Goedkoop</span>
                    </li>
                </ul>
            </div>
        </div>
        v-text is om de text aan te passen en v-html op de layout aan te passen.<br>
        je kan het beter niet gebruiken omdat het te makkelijk is om daar een aanval op te doen.<br>
        <button class="btn btn-success" :disabled="isDisabled">{{isDisabledName}}</button>
        <button class="btn btn-dark" @click="changeState()">Change state</button>
        <br>
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
                isDisabledName: "isDisabeld",
                list1: [10, 20, 30, 40, 50],
                currentIndex: 0,
            }
        },
        methods: {
            changeState() {
                this.isDisabled = !this.isDisabled;
                if (this.isDisabled) {
                    this.isDisabledName = "isDisabled"
                } else {
                    this.isDisabledName = "isNotDisabled"
                }
            },
            changeCurrent(index){
                this.currentIndex = index;
            }
        },
        computed: {
            current(){
                return {
                    ...this.mijn.data[this.currentIndex]
                }
            },
            isCheap(){
                return mijn.data[this.currentIndex].prijs < 1000;
            },
        },
    }
</script>
