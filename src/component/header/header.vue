<template>
    <mt-header v-bind:title=title fixed>

        <p slot="left">
            <slot name="left">
                <mt-button @click="back" icon="back">

                </mt-button>
            </slot>
        </p>

        <p slot="right">
            <slot name="right">

            </slot>
        </p>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
</template>
<style>

</style>
<script>


//    function exportCondition() {
//
//        var condition="";
//        var myInfo;
//
//
//        if (condition.contains("胖的")) {
//            info = "不喜欢胖的";
//        } else if(condition.contains("非独生子女")){
//            info="不想过苦日子";
//        } else if(condition.contains("父母没有退休保障")){
//            info="不想过苦日子";
//        }else if(condition.contains("年出生在91年以前的")){
//
//            if(condition.contains("非本地的")){
//                info="不想找，不想将就她";
//            }else if(condition.contains("裸高低于165")){
//                info="不想找，不想将就她";
//            }else if(condition.contains("本科以下包括专转本的")){
//                info="不想找，不想将就她";
//            }else if(condition.contains("家里不是私房且市区只有一套房")){
//                info="不想找，不想将就她";
//            }else if(condition.contains("长得难看的")){
//                info="不想找，我对颜值要求不高，但化了妆不能丑,不想将就她";
//            }
//
//
//        }else if(condition.contains("年轻的萌妹们")){
//
//            if(condition.contains("本科，工作稳定（比如会计之类的），165以上，性格正常")){
//
//                if(condition.contains("本地或者外地好看的")){
//                    info="只要妹纸看得上我，经济不是问题，只要妹纸别嫌我穷就好"
//                }
//
//            }
//
//        }
//
//        myInfo=={
//            "户籍":"本地土著狗",
//            "身高":"裸高179cm，^_^",
//            "体重":"裸重80kg，^_^",
//            "学位":"江苏科技大学研究生全日制",
//            "工作":"程序员",
//            "年薪":"保密",
//            "父亲":{
//                "工作":"铁道部货运工人，编内",
//            },
//            "母亲":{
//                "工作":"退休工人，退休收入2000多",
//            },
//            "房产":{
//                "朗诗竞园":"86m2",
//                "月馨苑":"97m2",
//                "林园新村安置房":"80-90m2，目前还没造，已经定了",
//            },
//            "负债":"目前30万，林园新村还要贷一点",
//        }
//
//
//    }


    export default{
        name: 'gg-header',
        data(){
            return {

            }
        },
        methods: {
            back(){
                if (this.onBack == undefined) {
                    this.ggRouter.go();
                } else {
                    this.onBack();
                }

                if(this.HttpClient){
                    this.HttpClient.counts++;
                }
            }
        },
        props: {
            title: {
                default: ""
            },
            onBack: {}
        }
    }
</script>
