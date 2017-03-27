<template>
    <div>
        <gg-header >

        </gg-header>
        <div class="gg page-main">
            <div id="employee">
                <show-ratings max="10" v-model="question.value"></show-ratings>
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
                msg: 'hello vue',
                question:{

                }
            }
        },

    }
</script>
