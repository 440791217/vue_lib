<template>
    <div>
        <gg-header>

        </gg-header>
        <div class="gg page-main">
            <mt-button type="default" @click="setValue">set</mt-button>
            <mt-button type="primary" @click="getValue">get</mt-button>
            <mt-button type="default" @click="removeValue">remove</mt-button>
            <mt-button type="primary" @click="clearAll">clear</mt-button>
        </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        methods: {
            setValue: function () {
                this.ggStorage.set("mark", 1);
            },
            getValue: function () {
                console.log("value:"+this.ggStorage.get('mark'));
            },
            removeValue:function () {
              this.ggStorage.remove('mark');
            },
            clearAll:function () {
                this.ggStorage.clearAll();
            }
        },
        components: {}
    }
</script>
