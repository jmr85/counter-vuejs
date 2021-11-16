var app = new Vue({
    el: '#app',
    data: {
        title: 'Contador con Vue!',
        counter: 0,
        clicksCounter: 0,
        cPow: 0
    },
    methods: {
        increase() {
            return this.counter++;
        },
        decrease() {
            if (this.counter > 0) {
                return this.counter--;
            }
        },
        clicksCounterComputed() {
            return this.clicksCounter++;
        },
        counterPow() {
            return this.cPow = Math.pow(this.counter, 2);
        }
    }
});