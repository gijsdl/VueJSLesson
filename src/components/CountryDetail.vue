<template>
    <div>
        <h2>{{country.name}}</h2>
        <ul class="list-group">
            <li class="list-group-item">{{country.id}}
            <span class="float-right">
                <button @click="setRating(1)" class="btn btn-success">+1</button>
                <button @click="setRating(-1)" class="btn btn-danger">-1</button>
            </span>
            </li>
            <li class="list-group-item">{{country.name}}</li>
            <li class="list-group-item">{{country.capital}}</li>
            <li class="list-group-item">
                <img :src="getImgUrl(country.img)"
                     v-bind:alt="country.img"
                     class="img-fluid">
            </li>
            <li class="list-group-item">{{country.details}}</li>
            <li class="list-group-item" v-if="isExpensive">
                <span class="badge badge-danger badge-pill">Expensive</span>
            </li>
            <li class="list-group-item" v-if="isCheap">
                <span class="badge badge-warning badge-pill">On Sale!</span>
            </li>
        </ul>

    </div>
</template>

<script>
    import mixins from "../mixins/mixins";
    export default {
        name: "CountryDetail",
        props: {
            country: {
                type: Object,
                required: true,
            },
        },
        mixins: [mixins],
        methods:{
          setRating(value){
              this.$emit('rating', value);
          }
        },
        computed:{
            isExpensive() {
                return this.country.cost > 4000;
            },
            isCheap() {
                return this.country.cost  < 1000;
            },
        }
    }
</script>

<style scoped>

</style>