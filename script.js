function check(userchoice,botchoice)
{
    var db={
        "stone":{"stone":0.5,"paper":0,"scissors":1},
        "paper":{"stone":1,"paper":0.5,"scissors":0},
        "scissors":{"stone":0,"paper":1,"scissors":0.5},
    }
    return [db[userchoice][botchoice],db[botchoice][userchoice]];
}
function msg(result)
{
    if(result[0]==1)
    return {'message':"You Won!!","color":"Green"};
    else if(result[0]==0)
    return {'message':"You Lost!!","color":"Red"};
    else
    return {'message':"You Tied!!","color":"Blue"};
}
function result(userchoice)
{
    botchoice=["stone","paper","scissors"][Math.floor(Math.random()*3)];
    result=check(userchoice.id,botchoice);
    message=msg(result);
    frontendwork(userchoice.id,botchoice,message);
}
function frontendwork(userchoice,botchoice,message)
{
    var imgdb={
        "stone":document.getElementById("stone").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    };
    var human=document.createElement('div');
    var msg=document.createElement('h1');
    var bot=document.createElement('div');
    document.getElementById("stone").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    human.innerHTML="<img src='" + imgdb[userchoice]+"' style='box-shadow: 0px 10px 50px rgba(248,7,4,0.8);'>";
    //msg.innerHTML="<p style='font-size:2rem; color:"+message["color"]+"'>"+message["message"]+"</p>";
    bot.innerHTML="<img src='" + imgdb[botchoice]+"' style='box-shadow: 0px 10px 50px rgba(248,7,4,0.8);'>";
    msg.style="color:"+message["color"]+";";
    msg.innerHTML=message["message"];
    document.getElementById("cont-2").appendChild(human);
    document.getElementById("cont-2").appendChild(msg);
    document.getElementById("cont-2").appendChild(bot);

   
}
