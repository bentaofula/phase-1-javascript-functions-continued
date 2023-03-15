function saturdayFun (toDO = "roller-skate" ){
    return `This Saturday, I want to ${toDO}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

function mondayWork (day = "go to the office" ){
    return `This Monday, I will ${day}.`;
}
mondayWork();
mondayWork("work from home");
function wrapAdjective(testing = "*" ){
   return function (mypar = "special"){
    return `You are ${testing}${mypar}${testing}!`;
   }
    }
wrapAdjective()("a hard worker");
wrapAdjective("||",)("a dedicated programmer");