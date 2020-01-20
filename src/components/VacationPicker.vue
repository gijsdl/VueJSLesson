<template>
    <div>
        <h1>{{header}}</h1>
        <ul class="list-group">
            <li class="list-group-item" v-for="country in countryData.countries" :key="country.id" @click="landClick(country.name)" @mouseover="landHover(country.id)">
                <span :id="country.id" :title="country.details">
                {{country.id}} -
                {{country.name}}
                </span>
            </li>
        </ul>
        <h3>Teller: {{counter}}</h3>
        <button @click="increment()" class="btn btn-success">+</button>
        <button @click="decrement()" class="btn btn-danger">-</button>
    </div>
</template>

<script>
    import countryData from "../data/countryData";

    export default {
        name: "VacationPrikker",
        data() {
            return {
                countryData,
                header: 'Vue Vacation Picker',
                counter: 0
            }
        },
        methods:{
            increment(){
                this.counter++;
            },
            decrement(){
              this.counter--;
            },
            landClick(country){
                console.log(country);
            },
            landHover(country){
                console.log(country);
            }
        }
    }
</script>

<style scoped>

</style>