const numerology = require('numerologic');
// var lifeWayNumber = numerology('01.28.1977').lifeWayNumber();
// const zodiacSign = numerology('7.01.1981').zodiacSign();

// const isMasterBuilder = () => {

// }

const yearFormatter = (date) => {
    const dateNums = date.split('/').map((ele) => parseInt(ele));
    const month = dateNums[0];
    const day = dateNums[1];
    const year = dateNums[2];
    // console.log('i am year ', year)
    let yearPrefix;
    if (year < 10) {
        yearPrefix = 200
    } else if (year >= 10 && year <= 20) {
        yearPrefix = 20
    } else if (year > 21){
        yearPrefix = 19
    }
    return `${month}/${day}/${yearPrefix}${year}`
    // console.log(dateS)
    // return year > 21 ? 19 : 20 ;
}



const getLifePathNum = (birthdate) => {
    let dateToNum = yearFormatter(birthdate).split('/').map((ele) => parseInt(ele))
    let num = dateToNum.reduce((a, b) => a + b)
     while(num >= 10) {
         num = num.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b)); 
     }
     return num
 }
    


    
module.exports = {
    getLifePathNum 
}


// const getLifePathNum = (birthdate) => {
//     num = birthdate.reduce((a, b) => a + b)
//     while(num >= 10) {
//         num = num.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b)); 
//     }
//     return num
// }
    