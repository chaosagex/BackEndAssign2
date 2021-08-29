'use strict'
const getName=function(){
/*
    incase a numbers  name is valid ie name=123
    while(!name) name=prompt("Please enter your name");
*/
/*
    in case number names aren't valid
    while(!name||!isNaN(Number(name))) name=prompt("Please enter your name");

*/
let name="";
while(!name||!isNaN(Number(name))) name=prompt("Please enter your name");
    return name;
}
const checkPassword=function(){
    let valid=false;
    for (let i=0;i<3;i++){
        let password=prompt("Please enter the password");
        if(password==="123") {
            valid=true;
            break;
        }

    }
    return valid;
}
const getMonth=function(){
    let month=NaN
    while(isNaN(month)||month<1||month>12)
        month=Number(prompt("Please enter your birth month"));
    return month;
}
const checkDayValid= function(start,end,day){
    if(day<start||day>end)
        return false;
    else
        return true;
}
const getValidDay =function(start,end){
    let day=NaN
    while(!checkDayValid(start,end,day)||isNaN(day)) day=Number(prompt("Please enter your birth day"));
    return day;
}
const getDay=function(month){
    let months=[31,28,30,30,31,30,31,31,30,31,30,31];
    let day=getValidDay(1,months[month-1]);    
    return day;
}
const getHoroscope=function(day,month){
    //Source: https://www.horoscope.com/horoscope-dates/
    let horoscope=NaN;
    //Aries
    if((day>20&&month===3)||(day<20&&month===4))    horoscope=0;
    //Taurus
    else if((day>19&&month===4)||(day<21&&month===5))    horoscope=1;
    //Gemini
    else if((day>20&&month===5)||(day<21&&month===6))    horoscope=2;
    //Cancer
    else if((day>20&&month===6)||(day<23&&month===7))    horoscope=3;
    //Leo
    else if((day>22&&month===7)||(day<23&&month===8))    horoscope=4;
    //Virgo
    else if((day>22&&month===8)||(day<23&&month===9))    horoscope=5;
    //Libra
    else if((day>22&&month===9)||(day<23&&month===10))    horoscope=6;
    //Scorpio
    else if((day>22&&month===10)||(day<22&&month===11))    horoscope=7;
    //Sagittarius
    else if((day>21&&month===11)||(day<22&&month===12))    horoscope=8;
    //Capricorn
    else if((day>21&&month===12)||(day<20&&month===1))    horoscope=9;
    //Aquarius
    else if((day>19&&month===1)||(day<19&&month===2))    horoscope=10;
    //Pisces
    else if((day>18&&month===2)||(day<21&&month===3))    horoscope=11;
    return horoscope;
}
let name=getName();
let valid=checkPassword();
// let name="a"
// let valid=true
if(!valid) alert("you’ve entered wrong password 3 times")
else{
    let month=getMonth();
    let day=getDay(month);
    // let month=1;
    //  let day=1;
    const horoscopes=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
    let horoscope =getHoroscope(day,month);
    alert(`Your Horpscope is ${horoscopes[horoscope]}`);
}