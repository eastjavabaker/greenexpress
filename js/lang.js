/* Language */

var default_lang = 1; // english , just two options English (1) or Chinese (2)

var menuname = [];
var statusdesc = [[]];


menuname[1] = {  

"menu1":"wahyu",
"menu2":"xxx",
"menu3":"xxx",
"menu4":"xxx",
"menu5":"xxx",

};

menuname[2] = {  

"name":"wahyu",
"button":"xxx"

};

/*
            0 = no status
            1 = pending quotation
            2 = pending confirmation
            3 = reject
            4 = accept and process
            5 = received
*/

statusdesc[1] = ["No Status", "Pending Quotation", "Pending Confirmation", "Reject", "Accept and Process", "Received"];

statusdesc[2] = ["没有状态", "待定报价", "待定确认", "拒绝", "接受并处理", "接受"];

/* end status description */


/* init language */
if(!localStorage.lang){
        localStorage.lang = default_lang;
}
/* end init */