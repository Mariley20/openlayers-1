export default {
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'stylesheet',
      href: 'https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/css/ol.css'
    }],
    script: [
     { src: 'https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js' }, 
    ],
  },
  css: [
    '~/assets/sass/app.scss',
    'element-ui/lib/theme-chalk/index.css',
  ],

  loading: {
    color: '#fff'
  },

  plugins: [
    '~/plugins/element-ui',
  ],
  modules: [
  ]
}