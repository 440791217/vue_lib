<template>
    <div>
        <gg-header>

        </gg-header>
        <div class="gg page-main">
            <p>{{ count }}</p>
            <p>
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </p>
        </div>

    </div>
</template>
<style>

</style>
<script>
    import {Context} from "../lib/context/context";

    function bb() {

    }

    bb.prototype.a=1;
    var dd=new bb();
    console.log("bb:"+dd.a);

    let context=new Context();
    let obj={
        onStart:function(context){
            var that=this;
            var state={
                bb:123+that.$store.state.count++
            }
            const moduleC={
                state:state,
                actions:{
                    www:function(){
                        that.Logger.d('wea:'+state.bb);
                    }
                }
            }
            this.Logger.d("onStart");
            this.$store.registerModule('c'+this.$store.state.count,moduleC);
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed: {
            count () {
                return this.$store.getters.show;
            }
        },
        methods: {
            increment () {
                this.$store.commit('increment')
            },
            decrement () {
                this.$store.dispatch('www').then((val)=>{
                    console.log("dabian hen xiang:"+val);
                });
//                this.$store.commit('decrement')
//                console.log("count:"+this.$store.state.count);
            }
        },
        components:{

        }
    }

    context.fill(context,obj);

    export default context;
</script>
