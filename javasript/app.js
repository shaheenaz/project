alert("HELLO!!")
//this id greeting
var userName = prompt("Whats your name?");
console.log(userName);
alert('welcome to our website ' +userName +' ,thank you for choosing us!!') 
var makeupType = prompt("What type of makeup do you want to view " + userName +"?" + "Hair, Face or Frgrance");
console.log(makeupType)
if(makeupType ==='hair') {
    document.write('<img src="https://s1.1zoom.me/b5050/916/Blonde_girl_Hair_Makeup_Glance_Face_Colored_561554_3840x2160.jpg"/>')
}else if(makeupType === 'face'){ 
    document.write('<img src="https://i.pinimg.com/originals/1c/c8/e3/1cc8e3ff956e73d7bbb24961cb7d28f8.jpg"/>')
}else if(makeupType === 'frgrance'){
    document.write('"https://www.fragrancex.com/blog/wp-content/uploads/2019/09/fragrance-notes-everything-you-need-to-know-hero.jpg"/>')
}else{  
    alert("PLEASE CHOSE A MAKEUP TYPE!!!");
    var makeupType = prompt("PLEASE CHOSE NOW!!"+"What type of makeup do you want to view " + userName +"?" + "Hair, Face or Frgrance");
}
var yourOpinion = prompt('What do you think about us? good or bad?');
if(yourOpinion=== 'good') {
    alert("THANK YOU!")
}else if(yourOpinion==="bad"){
var why = prompt("why ?And give us your recommendations to devlope our website.")
console.log(why)
alert("Thank you!")
}else {
    var why = prompt("why ?And give us your recommendations to devlope our website.")
console.log(why)
alert("Thank you")
}
confirm("“Beneath the makeup and behind the smile I am just a girl who wishes for the world.”")
