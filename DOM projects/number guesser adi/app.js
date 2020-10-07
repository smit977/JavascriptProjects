
var num = Math.floor(Math.random() * 10+1);
console.log(num);

document.getElementById('submit').addEventListener('click' ,submit1); 

var inN = document.getElementById('inputNum').value;

function submit1(e){
    if(isNaN(inN) || inN < 1 || inN > 10){
        const ap = document.getElementById('form');
        const newH = document.createElement('h6');
        newH.id = 'incorrect';
        newH.appendChild(document.createTextNode('Please enter a valid numebr'));
        ap.appendChild(newH);
        document.getElementById('submit').addEventListener('click', function(){
            window.location.reload();
        });
    } else {
    const number = document.getElementById('inputNum').value;
    if(number == num){
        correct();
    } else {
        wrong1(number);
    }

    e.preventDefault();
    }
}

function wrong1(number){
    const ap = document.getElementById('form');
    var n = number.toString();
    n = number + ' is not correct , you have 2 guesses left...!';
    const newH = document.createElement('h6');
    newH.id = 'incorrect';
    newH.appendChild(document.createTextNode(n));
    ap.appendChild(newH);
    B1();   
}

function B1(){
    const newB = document.createElement('input');
    newB.className = 'secondary-content btn';
    newB.value = 'Submit';
    newB.type = 'button';
    newB.id = 'B1';
    const oldB = document.getElementById('submit');
    document.getElementById('form').replaceChild(newB,oldB);
    document.getElementById('B1').addEventListener('click', submit2);
}


function correct(){
    const ap = document.getElementById('form');
    const newH = document.createElement('h6');
    newH.className = 'success';
    document.getElementById('incorrect').remove();
    newH.appendChild(document.createTextNode('Correct...! YOU WON'));
    ap.appendChild(newH);
    btn();
    
}

function btn(){
    const newB = document.createElement('input');
    newB.className = 'secondary-content btn';
    newB.value = 'Try Again';
    newB.type = 'button';
    newB.id = 'newB';
    const name = document.getElementById('form').children[1].id;
    if(name == 'submit'){
        const oldB = document.getElementById('submit');
        document.getElementById('form').replaceChild(newB,oldB);
        document.getElementById('newB').addEventListener('click', function(){
            location.reload();
        });
    } else if(name == 'B1') {
        const oldB = document.getElementById('B1');
        document.getElementById('form').replaceChild(newB,oldB);
        document.getElementById('newB').addEventListener('click', function(){
            location.reload();
        });
    } else if(name == 'B2') {
        const oldB = document.getElementById('B2');
        document.getElementById('form').replaceChild(newB,oldB);
        document.getElementById('newB').addEventListener('click', function(){
            location.reload();
        });
    } else {
        const oldB = document.getElementById('B3');
        document.getElementById('form').replaceChild(newB,oldB);
        document.getElementById('newB').addEventListener('click', function(){
            location.reload();
        });
    }

}

function submit2(){
    const number = document.getElementById('inputNum').value;
    if(number == num){
        correct();
    } else {
        wrong2(number);
    }
}

function wrong2(number){
    const ap = document.getElementById('form');
    var n = number.toString();
    n = number + ' is not correct , you have 1 guesses left...!';
    const newH = document.createElement('h6');
    newH.id = 'incorrect';
    newH.appendChild(document.createTextNode(n));
    ap.appendChild(newH);
    document.getElementById('incorrect').remove();
    B2();
}

function B2(){
    const newB = document.createElement('input');
    newB.className = 'secondary-content btn';
    newB.value = 'Submit';
    newB.type = 'button';
    newB.id = 'B2';
    const oldB = document.getElementById('B1');
    document.getElementById('form').replaceChild(newB,oldB);
    document.getElementById('B2').addEventListener('click', submit3);
}

function submit3(){
    const number = document.getElementById('inputNum').value;
    if(number == num){
        correct();
    } else {
        wrong3();
    }
}

function wrong3(){
    const n = 'Sorry , You lost the game and the correct ans was ' + num;
    const newH = document.createElement('h6');
    newH.id = 'incorrect';
    newH.appendChild(document.createTextNode(n));
    const ap = document.getElementById('form');
    ap.appendChild(newH);
    document.getElementById('incorrect').remove();
    B3();
}

function B3(){
    const newB = document.createElement('input');
    newB.className = 'secondary-content btn';
    newB.value = 'Try Again';
    newB.type = 'button';
    newB.id = 'B3';
    const oldB = document.getElementById('B2');
    document.getElementById('form').replaceChild(newB,oldB);
    document.getElementById('B3').addEventListener('click', btn);
}
