<template>
    <div>

        <gg-header >

        </gg-header>

        <div class="gg page-main">
            <mt-button @click.native="getTime" size="large" type="danger">{{msg}}</mt-button>
            <button class="test11">
                123123
            </button>

            <div v-if="msg===0">
                if msg ==0
            </div>
            <div>
                <button @click="add">
                    add
                </button>
                <button @click="sub">
                    sub
                </button>
            </div>
            <div>
                <div v-for="item in list">
                    {{item}}
                </div>
            </div>
        </div>

    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return {
                msg: 0,
                list:[
                    1,2,3,4,
                ]
            }
        },
        methods: {

            beforeCreate(){
              console.log('beforeCreate');
            },
            destoryed(){
                console.log('destory');
            },
            add(){
              this.msg++;
            },
            sub(){
                this.msg--;
            },
            s001() {
                function succ(body) {

                }

                var cmd = {}

                return {
                    f_suffix: 's003',
                    f_content: cmd,
                    f_callback: {
                        f_map:{
                            "0000":succ
                        }
                    }
                }
            },
            getTime(){
                this.Logger.open(true);
                this.Logger.d(this.msg);
                this.HttpClient.post(this.s001());
            },
        }
    }

</script>
