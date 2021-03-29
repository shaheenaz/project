alert("HELLO!!")
//this id greeting
var userName = prompt("Whats your name?");
console.log(userName);
alert('welcome to our website ' +userName +' ,thank you for choosing us!!') 
var makeupType = prompt("What type of makeup do you want to view " + userName +"?" + "hair, face or fragrance");
console.log(makeupType)

    ///LAB 5 ADDITION
    while(makeupType!=="hair"&& makeupType!=="face" && makeupType!=="fragrance"){
        makeupType= prompt("please add type")
    }
    //lab 6
    var muNum = prompt("how many makeup do you want to show?")
    function userChose(muNum){
    for(var i=1; i<=muNum; i++){if(makeupType ==='hair') {
        document.write('<img src="https://s1.1zoom.me/b5050/916/Blonde_girl_Hair_Makeup_Glance_Face_Colored_561554_3840x2160.jpg" width=250 height=250/>')
    }else if(makeupType === 'face'){ 
        document.write('<img src="https://i.pinimg.com/originals/1c/c8/e3/1cc8e3ff956e73d7bbb24961cb7d28f8.jpg" width=250 height=250/>')
    } else if(makeupType === "fragrance"){
        document.write('<img src="https://media-exp1.licdn.com/dms/image/C4D1BAQHgPk4ZNIaGkA/company-background_10000/0/1560422318974?e=2159024400&v=beta&t=MThJ7M-y196ufZqt5SKl2RcokpNtzKQHphFC931Obxk" width=250 height=250/>')
    }
    
    }}
     userChose(muNum)

var yourOpinion = prompt("Give us a rate from 1-10");
function userOp(userOp){
        for(var o=0; o<=yourOpinion;o++){
    if(yourOpinion >=5) {
        alert("love you")
        }else if(yourOpinion<5){
            alert("hope you like us next time")
        }
        return yourOpinion;
    }}
    console.log(userOp(yourOpinion))

    confirm("“Beneath the makeup and behind the smile I am just a girl who wishes for the world.”")
