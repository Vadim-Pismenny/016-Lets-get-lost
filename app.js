new Vue({
    el: '#vue-app',
    data: {
      avalibale: false,
      nearby: false
    },
    methods: {

    },
    computed: {
      compClasses:function(){
        return {
          avalibale:this.avalibale,
          nearby:this.nearby
        }
      }
    }
});
