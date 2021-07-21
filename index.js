// Destructring

//  arr =["hassan",23,"BSCS"]

//   let [first,second,thrid,test="test value",four=arr[1]]=arr
//   console.log(four)
//   console.log(arr)
// obj={
//     nam :'hassan',
//     age:23,
//     degree:'bscs'
// }
// let {nam,second,thrid,test="test value"}=obj
// console.log(nam)
//    console.log(obj)

//***************************** / object properties ***********************

//we can use dynamic variable/properties

//    var nam ='hassan'
//    var last= 'kazmi'
//    obj={
       
//      bio:{  [nam] :'How are you',
//             [last]:`your age is 28`
//     }
//    }
//    console.log(obj.bio)
//    console.log(obj)

//**************************** ******Spread Operator********************** *

//   arr1 =['yellow','red']
//   arr2 = ['pink','orange','blue','voilet']
//   let arr3 = [...arr1, ...arr2]
//     let arr4 = arr1.concat(arr2)
//     let map =
//   console.log(arr3)
//   console.log(arr4)

//********************************* ES 2019 ************************************
 //  return array = Object.entries(object)  Arr.flat(), return object = Array.fromEntries()  

//  ****************Converting Object into Array usinf object.entries()
//   obj = {
//         name:'Hassan Ali',
//         age: 26,
//         Degree:"BSCS"
//   }
//      let arr=Object.entries(obj)
//      let newobj=Object.fromEntries(obj);
//           console.log(arr.flat(Infinity));
//           console.log(newobj)
//***************Converting Array into object  in Spread operator */

//    arr =['hassan', 25,'waqas','geo']
//     var newobj={name:'ali',...arr}
//     console.log(newobj);

//***************Converting String into Array  in Spread operator */
// var str =" my name is hassan"
// let newarr=str.split(" ")
// console.log(newarr)

////////////////////// ***** Project ************
//  var nam =document.getElementById('name')
//  var model =document.getElementById('model')
//  var stat =document.getElementById('stat')
//  var price =document.getElementById('price')
//  var sellbtn =document.getElementById('sellbtn')
//  var nametbl =document.getElementById('nametbl')
//  var modeltbl =document.getElementById('modeltbl')
//  var statustbl =document.getElementById('statustbl')
//  var pricetbl =document.getElementById('pricetbl')
//  var tbl =document.getElementById('tbl')
//  var child =document.getElementById('child')
//  var buble =document.getElementById('buble')

//  sellbtn.addEventListener('click',(event)=>{
//      var newhtml
//    alert(`you select ${nam.value} ${model.value} ${stat.value} ${price.value}`)   
  
//    var newhtml ='<tr id="child"><td id="nametbl">%nametbl%</td><td id="modeltbl">%modeltbl%</td><td id="statustbl">%statustbl%</td><td id="pricetbl">%pricetbl% <Button id="dele" value="del">Delete</Button></td></tr></div>'     
//    newhtml= newhtml.replace('%nametbl%',nam.value)
//    newhtml= newhtml.replace('%modeltbl%',model.value) 
//    newhtml= newhtml.replace('%pricetbl%',price.value) 
//    newhtml= newhtml.replace('%statustbl%',stat.value)
  
//    tbl.insertAdjacentHTML('beforeend', newhtml)
//     nam.value =" "
//     price.value=" "
//    console.log(newhtml)
//    console.log(event.target)
// })

// tbl.addEventListener('click',(event)=>{
     
//    if(event.target.value=='del'){
  
//       // tbl.parentNode.removeChild(event.target.parentNode.parentNode) mistake
      
//       alert("clicking child")
//       let n=  tbl.removeChild(event.target.parentNode.parentNode.parentNode)
//     console.log(n)
//    }
 
//  },)
 
////////////////////// ***** Hoisting ************
// move variable and function at top on their scope
//  console.log(nam)
//  let nam
//  nam='hassan'

////////////////////// ***** Lexical Scoping ************
//inner function cq acces parent function variables but not child variables canot be
//access in parent function


// var a = 'Hi'
//  second =()=>{
//   var a ='how are u'
//   console.log('hello')
//      third=()=>{
//       var a ='Fine'
//     console.log(a+a+a)
//      }
//    third()
//     console.log(a+a+a)

//  }
// second()

////////////////////// ***** Closures in JS ************

// outer=(a)=>{  
//        var b=10
//        inner=()=>{
//    console.log(a+b)//where a and b values get inner() becox it make closure of parent 
//        }
//        return inner
//    }
//  let chk=outer(20)
//  chk()

////////////////////// ***** Asynchronious in JS ************
//      first=()=>{
//           setTimeout(()=>{
//             console.log("1st call");
//           },2000)
//      }

//     second=()=>{
//       console.log("2nd call");
//        first()
//        console.log("2nd call agin");
//     }
//  second()
////////////////////// ***** Function Curring ************
 // sum(5)(3)(8) ?
//In other words, when a function, instead of taking all arguments at one time, takes 
//the first one and return a new function that takes the second one and
// returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
//That is, when we turn a function call add(1,2,3) into add(1)(2)(3) . By using this technique, 
//the little piece can be configured and reused with ease.
  //(5)&(3)&(8) itself function
//   sum=(n1)=>{
//      return (n2)=>{
//         setTimeout(()=>{console.log(n1,n2);},2000)
//       return (n3)=>{
//          console.log(n1,n2,n3);
//       }
//      }
     
//   }
//  
////////////////////// ***** CallBack & Function Curring ************
// add=(n1,n2)=>{
//    console.log(n1+n2)
// }
// mul=(n1,n2)=>{
//    console.log(n1*n2)
// }
//  greeting=()=>{
//    console.log("hi hassan");
     
// }
// cal=(n1,n2)=>{
//      return (greeting)=>{
//       greeting()
//         return (opt)=>{
//            opt(n1,n2)
//         }
//      } 
// }
// cal(3,8)(greeting)(add)
//  var rolling =document.getElementById('rolling')
//  var nam =document.getElementById('nam')
//   var dice = document.getElementById('dice')


//   rolling.addEventListener('click',()=>{
//    var ran = Math.floor(1+Math.random()*6)
//    console.log(ran)
//    dice.src = `dice-${ran}.png`
//    nam.innerHTML= ran
//      })
// function tipcalculator(amount){
//       var res=amount < 50 ?  0.2*amount : amount >50 && amount<200? 0.15*amount :amount>200? 0.10*amount :console
//        var finalamount =[amount+res];
//       console.log(finalamount);
//          return res;  

// }

// var bill =[40,80,280,220];
//  var tips=bill.map((val)=>{
//   return val < 50 ?  0.2*val : val >50 && val<200? 0.15*val :val>200? 0.10*val :console       
//  })

// var generateBills=(bill,tips)=>{
//    var arr=[]
//    for(var i in bill){
//    console.log(bill.splice(i,i,bill[i]+tips[i])); 
//     //arr[i]=bill[i]+tips[i]
      
// }console.log("Final bills are", arr)
// }
// console.log('tips are: '+ tips);
// console.log('tips are: '+ bill);
// generateBills(bill,tips)

// console.log(`final Bill are:  ${tips[0]+bill[0]},${tips[1]+bill[1]},${tips[2]+bill[2]}`);

////////////////////// ***** Ajax Calling ************
// var rolling=document.getElementById('rolling')
//   var countries =document.getElementById('countries')
//   var img =document.getElementById('img')

//   const request = new XMLHttpRequest()
//   var arr =['pakistan','nepal','germany']
//    var i=0

//   rolling.addEventListener('click',()=>{
//    debugger
//     let url = `https://restcountries.eu/rest/v2/name/${arr[i]}`
//     i++
//     request.open('Get',url)
//     request.send()
     
//      })
   // to get response

//       request.addEventListener('load',()=>{
//       var jsn= request.responseText
//       let [data] = JSON.parse(jsn)
//       console.log(data);
//       img.src = data.flag
//       var newhtml =`<tr id="child"><td id="nametbl">${data.capital}</td><td id="modeltbl">${data.subregion}</td><td id="statustbl">${data.population}</td>`
//       countries.insertAdjacentHTML('beforeend',newhtml)
      
//   })
 /////////////////////////// IMAGE SLIDER
// let i=1
//   setInterval(() => {
//     if(i==6){
//       i=1
//     }
//     img.src = `dice-${i}.png`
//     i++
    
//   }, 2000);
  
////////////////////// ***** Convert JSON to Obj & Obj to JSON ************

//  var obj = {name:'hassan',age:23, degree:'bscs'}
//   console.log(JSON.stringify(obj));
////////////////////// ***** Promises & Async Await ************

//GET https://icanhazdadjoke.com/

var rolling =document.getElementById('rolling')
var jokes =document.getElementById('jokes')
 

rolling.addEventListener('click', joking=()=>{
  var setHeader={
    headers:{
    Accept :"application/json"
    }
}
fetch('https://icanhazdadjoke.com',setHeader)
.then((res)=> res.json())
.then((data)=>jokes.innerHTML= data.joke)
.catch((err)=>console.log(err))
})
joking()






























