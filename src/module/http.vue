<template>
    <div>
        <gg-header >

        </gg-header>
        <mt-button @click.native="getTime" size="large" type="danger">{{msg}}</mt-button>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return {
                msg: 'tddddsadas23'
            }
        },
        methods: {
            s001() {
                function succ(body) {

                }

                var cmd = {}

                return {
                    f_suffix: 's001',
                    f_content: cmd,
                    f_callback: {
                        succ: succ
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
