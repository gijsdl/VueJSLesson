import Vue from 'vue';

Vue.filter('uppercase', function (value) {
    if (!value) return
    return value.toUpperCase();
});

Vue.filter('currency', function (value, currency) {
if (!value) return;
return new Intl.NumberFormat('nl-NL',
    {
        style: 'currency',
        currency: currency
    })
    .format(value)
});