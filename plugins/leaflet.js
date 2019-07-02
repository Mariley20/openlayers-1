import Vue from 'vue'
const isBrowser = typeof window !== 'undefined';
let L;
console.log('testL')
if (isBrowser) {
  L = require('leaflet');
}

Vue.use(L, {
  ssr: false
})