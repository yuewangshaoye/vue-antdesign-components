<template>
    <div>
        {{time}}
    </div>
</template>
<script>
import Vue from 'vue'
import moment from 'moment'
Vue.prototype.$moment = moment;
export default {
    data(){
        return {
            time:''
        }
    },
    methods: {
        
    },
    mounted () {
         this.time = this.$moment().format()
         console.log("this.$moment().format()",this.$moment().format())
    }
}
</script>