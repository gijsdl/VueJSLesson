<template>
    <div>
        <div class="row">
            <div class="col">
                <h1>{{header}}</h1>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(country, index) in countryData.countries" :key="country.id"
                        @click="selectCountry(index), landClick(country.name)" @mouseover="landHover(country.id)">
                <span :id="country.id" :title="country.details">
                {{country.id}} -
                {{country.name}}
                </span>
                    </li>
                </ul>
            </div>
            <div class="col">
                <h2>selected:</h2>
                <ul class="list-group">
                    <li class="list-group-item">{{selectedCountry.id}}</li>
                    <li class="list-group-item">{{selectedCountry.name}}</li>
                    <li class="list-group-item">{{selectedCountry.capital}}</li>
                    <li class="list-group-item">
                        <img :src="getImgUrl(selectedCountry.img)"
                             v-bind:alt="selectedCountry.img"
                             class="img-fluid">
                    </li>
                    <li class="list-group-item">{{selectedCountry.details}}</li>
                    <li class="list-group-item" v-if="isExpensive">
                        <span class="badge badge-danger badge-pill">Expensive</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h2>Destinations cheaper than:</h2>
                <select class="form-control-lg" v-model="selectedCost" @change="filterCountries">
                    <option v-for="(cost, index) in cost" :key="index" :value="cost">
                        {{cost}}
                    </option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(country, index) in filterdCountries" :key="index">
                        {{country.name}} (EUR: {{country.cost}})
                    </li>
                </ul>
            </div>
        </div>
        <div class="row mt-2">
            <h3>Teller: {{counter}}</h3>
        </div>
        <div class="row">
            <button @click="increment()" class="btn btn-success">+</button>
            <button @click="decrement()" class="btn btn-danger">-</button>
        </div>
        <div class="row">
            <div class="col">
                <h2>Other counries:</h2>
                <input type="text" v-model="newCountry" @keyup.enter="addCountry(newCountry)">
                <button @click="addCountry(newCountry)" class="btn btn-info">Add country</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(county, index) in newCountries" :key="index">
                        {{county}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import countryData from "../data/countryData";
    import mixins from "../mixins/mixins";

    export default {
        name: "VacationPrikker",
        mixins: [mixins],
        data() {
            return {
                countryData,
                header: 'Vue Vacation Picker',
                counter: 0,
                selectCountryIndex: 0,
                newCountry: "",
                newCountries: [],
                selectedCost: 1000,
                cost: [1000, 2000, 3000, 4000, 5000, 6000],
                filterdCountries: [],
            }
        },
        created() {
            this.selectCountryIndex = 1;
            console.log("created")
        },
        methods: {
            increment() {
                this.counter++;
            },
            decrement() {
                this.counter--;
            },
            landClick(country) {
                console.log(country);
            },
            landHover(country) {
                console.log(country);
            },
            selectCountry(index) {
                this.selectCountryIndex = index;
            },
            addCountry(country) {
                this.newCountries.push(country);
                this.newCountry = '';
            },
            filterCountries() {
                this.filterdCountries = this.countryData.countries.filter(county => county.cost < this.selectedCost);
            },
        },
        computed: {
            selectedCountry() {
                console.log('selectedCountry aangeroepen');
                return {
                    //spread operator ...
                    ...this.countryData.countries[this.selectCountryIndex]
                }
            },
            isExpensive() {
                return countryData.countries[this.selectCountryIndex].cost > 4000;
            },
        }
    }
</script>

<style scoped>

</style>