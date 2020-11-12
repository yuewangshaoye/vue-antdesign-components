<template>
    <div>
        <h2>{{msg}}</h2><hr/>
        <h3>{{$store.state.count}}-{{count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button> <!--对应下面的简化写法-->
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button> <!--对应下面的简化写法-->
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
import { mapState,mapMutations,mapGetters,mapActions} from 'vuex' //mapState 注意用双引号， 
export default {
    data () {
        return {
            msg:'Hello Vuex'
        }
    },
    //三种方法给 count 赋值
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // },
    // computed:mapState(
    //    ['count'] //数组里放对象
    //    // {count:state=>state.count} //使用箭头函数
    //    count:function(state){   这是箭头函数的全写
    //     return state.count;
    //    }
    /////////
    // ),    
    computed: {
        ...mapState(['count']),
        // count(){
        //    return this.$store.getters.count;
        // }
        //在我没注释getters方法前，actions的减法不起作用
        // ...mapGetters(['count']),  //只能有一个 computed 属性，用es6展开运算符... 简写
    },
    methods:{
        ...mapMutations (['add','reduce']),  //简化click写法
        ...mapActions(['addAction','reduceAction'])
    },
    store //注意引用store
}
</script>