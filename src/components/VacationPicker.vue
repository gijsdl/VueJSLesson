<template>
    <div>
        <div class="row">
            <div class="col">
                <h1>{{selectedCountry.name}}</h1>
                <h2>Capital: {{selectedCountry.capital}}
                    <span v-if="isExpensive" class="badge badge-danger badge-pill">Expensive</span>
                    <span v-if="isCheap" class="badge badge-success badge-pill">sale</span>
                    <span class="float-right badge badge-secondary badge-pill" v-if="selectedCountry.rating !==0">
                        {{selectedCountry.rating}}
                    </span>
                </h2>
                <button @click="decrement()" class="btn btn-info">&lt;&lt; back</button>
                <button @click="increment()" class="btn btn-info">forward &gt;&gt;</button>
                <button @click="changeDetails" class="btn btn-info">{{detailsTextShow}}</button>
            </div>
            <div class="col">
                <CollapsibleSection>
                    <country-detail v-if="selectedCountry" @rating="onRating($event)" :country="selectedCountry"/>
                </CollapsibleSection>
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
                        {{country.name}} {{country.cost | currency('EUR')}}
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
    import '../filters/filters';
    import CountryDetail from "./CountryDetail";
    import CollapsibleSection from "./CollapsibleSection";

    export default {
        name: "VacationPrikker",
        components: {
            CountryDetail,
            CollapsibleSection
        },
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
                details: false,
                detailsText: 'show details',
            }
        },
        created() {
            this.selectCountryIndex = 1;
            console.log("created")
        },
        methods: {
            increment() {
                console.log(countryData.countries.length)
                if (this.selectCountryIndex < countryData.countries.length - 1) {
                    this.selectCountryIndex++;
                }
                this.counter++;
            },
            decrement() {
                if (this.selectCountryIndex > 0) {
                    this.selectCountryIndex--;
                }
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
            changeDetails() {
                this.details = !this.details;
                if (this.details) {
                    this.detailsText = "hide details"
                } else {
                    this.detailsText = "show details"
                }
            },
            onRating(rating) {
                this.countryData.countries[this.selectCountryIndex].rating += rating;
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
            isCheap() {
                return countryData.countries[this.selectCountryIndex].cost < 1000;
            },
            isDetails() {
                return this.details;
            },
            detailsTextShow() {
                return this.detailsText;
            }
        },

    }
</script>

<style scoped>

</style>