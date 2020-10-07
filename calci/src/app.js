// Screen Texts
const screen = document.getElementById('screen');

// Event listener for numbers ,plus ,minus ,percent ,divide ,multiple ,dot .
document.addEventListener('click' ,(e) => {
    if(e.target.parentElement.className === 'calc-button-row' && e.target.innerHTML !== 'C' && e.target.innerHTML !== 'Back' && e.target.innerHTML !== '=') {
        let key = (e.target.innerHTML);
        console.log(key);
        screen.innerHTML += key;
    }
    e.preventDefault();
});

// Event listener for Evaluate the problem(math)
document.getElementById('equal').addEventListener('click' ,(e) => {
    let res = eval(screen.innerHTML);
    if(res !== undefined){
        screen.innerHTML = res;
    }
    e.preventDefault();
});

// Back button event listener
document.getElementById('back').addEventListener('click' ,(e) => {
    let val = screen.innerHTML;
    document.getElementById("screen").innerHTML = val.substr(0, val.length - 1);
    e.preventDefault();
});

// Event listener for clear all
document.getElementById('clear').addEventListener('click' ,(e) => {
    screen.innerHTML = '';
    e.preventDefault();
});