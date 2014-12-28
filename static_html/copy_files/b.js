var BDBridge = window.BDBridge || (function(){

    var self;
    var CONFIG = {
        BD_BRIDGE_OPEN : 1,
        BD_BRIDGE_ROOT : "http://qiao.baidu.com/v3/"
    };

    document.cookie = 'VERSION=2,0,0,0';
    
    if ((CONFIG.BD_BRIDGE_OPEN == 1) && (typeof window["BD_BRIDGE_LOADED"] == "undefined")) {
        window["BD_BRIDGE_LOADED"] = 1;
        var script = document.createElement("script");
        script.type="text/javascript";
        script.charset = "UTF-8";
        script.src = CONFIG.BD_BRIDGE_ROOT + "asset/js/bw.js?v=20140731";
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    
    return self = {
    
        BD_BRIDGE_OPEN : CONFIG.BD_BRIDGE_OPEN,
        BD_BRIDGE_ROOT : CONFIG.BD_BRIDGE_ROOT,
        BD_BRIDGE_RCV_ROOT : "http://r.qiao.baidu.com/",
        BD_BRIDGE_DATA : {mainid : "100200334", SITE_ID : "de713869d1db126cff30a1fc0e990962", siteid : "17552", userName: '方之见'},
        OPEN_MODULAR : 11111,
                BD_BRIDGE_SPECIAL :  [] ,
        
                BD_BRIDGE_STYLE_ITEM : 
        [        {
            pageid : "0",
            
           
                        BD_BRIDGE_GROUP:  [ '0' - 0 , '1001' - 0 , '1002' - 0 ] ,
            
            BD_BRIDGE_ICON_CONFIG : {
                iconlvtype : "1" - 0,
                background : {
                    color : "",
                    url   : "http://qiao.baidu.com/v3/res/iconbg/08.jpg",
                    bgcolor : "#406e9e"
                },
                head : {
                    url    : "http://qiao.baidu.com/v3/res/iconhead/12.png",
                    width  : "132" - 0,
                    height : "53" - 0
                },
                button : {
                    color : "",
                    url   : "http://qiao.baidu.com/v3/res/iconbtn/12.png",
                    text  : "#0c4274"
                },
                flow     : "1" - 0,
                position : "2" - 0,
                special : "0"
            },
            BD_BRIDGE_INVITE_CONFIG : {
                on : "0" - 0,
                show : {
                    pos : "0" - 0,
                    width : "336" - 0,
                    height : "162" - 0,
                    font : "楷体",
                    fontsize : "14",
                    fontcolor : "#1244a2",
                    type : "0" - 0
                },
                background : {
                    color : "",
                    url   : "http://qiao.baidu.com/style/334/100200334/2/invitebg.jpg"
                },
                head : {
                    show : "0" - 0,
                    size : "1" - 0,
                    url  : "http://qiao.baidu.com/style/334/100200334/2/invitehead.jpg"
                },
                text   : "您好！方之见顾问，请问有什么可以帮助您！全国免费咨询4008850110",
                button : "#49b9ea",
                mode   : "0" - 0,
                special : "1" - 0
            },
            BD_BRIDGE_INVITE : {
                inviteauto : "1" - 0,
                invitemanual : "1" - 0,
                invitetype   : "1" - 0,
                inviterepeat : "1" - 0,
                invitetime   : "5" - 0,
                invitedisaptype : "0" - 0,
                invitedisaptime : "20" - 0
            },
            BD_BRIDGE_WEBIM : {
                webimopentype : "0" - 0,
                webimbgcolor  : "#d5d5d5",
                floatposition : "0" - 0,
                floatChatName : "2" - 0,
                floatCustomname : ""
            },
                        BD_BRIDGE_PIGEON_SOUL : {
                disableMess     : "0" - 0,
                messType        : 1,
                messFloatType   : "0" - 0,
                language        : "0" - 0,
                position        : "0" - 0,
                backgroundColor : "#232f4e",
                backgroundUrl       : "", 
                messItemName    : "1",
                messItemPhone   : "1",
                messItemAddress : "1",
                messItemEmail   : "2",
                extraMessItems  :  [] 
            }
        }        ]
        
    }
   


})();
