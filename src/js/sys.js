/**
 * Created by mark on 2016/12/28.
 */

function SysConfig() {

    var vue;
    var isRelease=false;
    var debug=false,ADDR_DM,site=null;

    init();

    function init() {

        if(isRelease){
            debug=false;
            ADDR_DM="http://czolympic.cn";
        }else{
            ADDR_DM="http://192.168.4.197:8080";
            // ADDR_DM="http://58.216.212.100:8080";
            debug=true;
        }

        site=createSite();
    }

    function createSite() {
        var DmName = ADDR_DM;
        var httpUrl = DmName + '/apisvc/mobile/ap1/';
        var htmlUrl = DmName + '/apisvc/mobile/ap3/s010x1?k=';
        var alipayUrl = DmName + "/apisvc/jsp/alipayapi.jsp";
        var alipayRedirectBack = "http:www.baidu.com";
        var acmy = 'http://weixin.acmeway.com/healthWeb/report/web/getReportList?';
        var handLottery="http://do.shouyoucai.com/UAN3l";
        var broadcast="https://www.douyu.com/998572";

        return {
            DmName: DmName,
            httpUrl: httpUrl,
            htmlUrl: htmlUrl,
            alipayUrl: alipayUrl,
            alipayRedirectBack: alipayRedirectBack,
            acmy: acmy,
            handLottery:handLottery,
            broadcast:broadcast,
        }
    }

    function install(Vue) {
        vue=Vue;
        Vue.ggConfig=f();
    }

    function f() {
        return {
            install:install,
            init:init,
            debug:debug,
            site:site,
        }
    }
    return f();
}

module.exports=new SysConfig();