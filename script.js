let loader = document.getElementById('preloader')


window.addEventListener('load',function(){
    loader.style.display = 'none'
})


let count = 2465;

function newnum(){
    count++;
    document.getElementById('number').innerHTML = count
}

setInterval(newnum,1000)

let mode1 = document.getElementById('mode');
let dark1 =document.getElementById('dark');

mode1.addEventListener('click', function(){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    document.getElementById('anotherbox').style.backgroundColor='rgb(75, 75, 75)';
    document.getElementById('divide2').style.background = 'black';
    document.getElementById('cardbody').style.background = 'black';
    document.getElementById('cardbody2').style.background = 'black';
    document.getElementById('cardbody3').style.background = 'black';
    document.getElementById('cardhead').style.backgroundColor='rgba(125, 123, 123, 1)';
    document.getElementById('cardhead2').style.backgroundColor='rgba(125, 123, 123, 1)';
    document.getElementById('cardhead3').style.backgroundColor='rgba(125, 123, 123, 1)'
    document.getElementById('textid').style.color = 'white';
    document.getElementById('textid2').style.color = 'white';
    document.getElementById('textid3').style.color = 'white';
    mode1.style.display = 'none';
    dark1.style.display = 'inline';
    

})


dark1.addEventListener('click',function(){
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    document.getElementById('anotherbox').style.backgroundColor='rgb(241, 240, 240)';
    document.getElementById('divide2').style.background = 'white';
    document.getElementById('cardbody').style.background = 'white';
    document.getElementById('cardbody2').style.background = 'white';
    document.getElementById('cardbody3').style.background = 'white';
    document.getElementById('cardhead').style.backgroundColor='rgba(248, 248, 248, 1)';
    document.getElementById('cardhead2').style.backgroundColor='rgba(248, 248, 248, 1)';
    document.getElementById('cardhead3').style.backgroundColor='rgba(248, 248, 248, 1)'
    document.getElementById('textid').style.color = 'black';
    document.getElementById('textid2').style.color = 'black';
    document.getElementById('textid3').style.color = 'black';
    dark1.style.display = 'none';
    mode1.style.display = 'inline';
})


document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('btn').innerHTML="Sent!"
})

let minutes = 5;
function nextmin(){
     hours++;
     document.getElementById('minutes').innerHTML = minutes
 }

setInterval(nextmin,60000)


document.getElementById('book').addEventListener('click',function(){
    alert('Next: Payment Method');
    document.getElementById('payment').style.display = 'block'

})
 

let person = document.getElementById('name');
document.getElementById('btn').addEventListener('click',function(){
    
    alert('Thank you, '+ person.value +', for your message')
})

document.getElementById('paynowbtn').addEventListener('click', function(){
    alert('Thank you for choosing us as you flight agency. Have fun in your trip')
})


document.getElementById('btnss').addEventListener('click',function(){
    document.getElementById('section1').scrollIntoView({behavior :'smooth'})
    document.getElementById('inputs2').value = "Egypt"
})




document.getElementById('btnss2').addEventListener('click',function(){
    document.getElementById('section1').scrollIntoView({behavior :'smooth'});
    document.getElementById('inputs2').value = "Canada"
})

document.getElementById('btnss3').addEventListener('click',function(){
    document.getElementById('section1').scrollIntoView({behavior :'smooth'});
    document.getElementById('inputs2').value = "Poland"
})


document.getElementById('items1click').addEventListener('click', function(){
     document.getElementById('section1').scrollIntoView({behavior :'smooth'});
     document.getElementById('inputs2').value = "Tokyo"
})


document.getElementById('items2click').addEventListener('click', function(){
     document.getElementById('section1').scrollIntoView({behavior :'smooth'});
     document.getElementById('inputs2').value = "Paris"
})

document.getElementById('items3click').addEventListener('click', function(){
     document.getElementById('section1').scrollIntoView({behavior :'smooth'});
     document.getElementById('inputs2').value = "London"
})