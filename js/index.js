var channels = ["ESL_SC2", "OgamingSC2", "cretetion"];

function makeUrl(type, name){
  return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name + '?callback=?';
}

function getChannelStatus(){
  channels.forEach(function(channel){
      $.getJSON(makeUrl("streams", channel), function(data1){
        var status;
        if(data1.stream === null){
          status = "Offline";
          $("#"+channel +"_status").html("Offline")
          document.getElementById(channel +"_status").style.color = "red";
        }
        else{
          status = "Online";
          $("#"+ channel +"_status").html("Online");
          document.getElementById(channel +"_status").style.color = "green";
        }
     });
  });
}

function getChannelInfo(){
  channels.forEach(function(channel){
      $.getJSON(makeUrl("channels", channel), function(data2){
        var logoSrc = data2.logo;
  document.getElementById(channel + "_logo").src=logoSrc;
        var name = data2.name;
        $("#"+ channel +"_name").html(name);
        var link = data2.url;
         $("#"+ channel +"_link").html(link);
  document.getElementById(channel + "_link").href=link;
       
     });
  });
 }

$( document ).ready(function() {
getChannelStatus();
getChannelInfo();
});

/*"freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"*/