document.getElementById('startt').addEventListener('click' ,(e) => {
    const input = document.getElementById('input').value;
    if(input !== '') {
        blr('input');
        setToSpan(input ,'span1');
        workOfTimer(input);
    } else {
        alert('Please input time in given Format');
    }
    

    e.preventDefault();
});

document.getElementById('resett').addEventListener('click' ,(e) => {
    setToSpan('00:00:00:00' ,'span1');
    unblr('input');
    document.getElementById('input').innerHTML = 0;
    clearInterval(interval1); 
    e.preventDefault();
});

document.getElementById('input').addEventListener('blur' ,() => {
    const val = document.getElementById('input');
    let re = /^\d{2}:\d{2}:\d{2}:\d{2}$/;

    if(!re.test(val.value)) {
        val.classList.add('is-invalid');
    } else {
        val.classList.remove('is-invalid');
    }
});

let interval1;
function workOfTimer(input) {
    var splt = input.split(':');
    console.log(splt);
    // let time = parseInt(splt[0]*360000) + parseInt(splt[1]*6000) + parseInt(splt[2]*100) + parseInt(splt[3]);
    // working();
	// interval1 = setInterval(working ,10);
	// function working() {
    //     const hr = Math.floor(time/360000);
    //     const min = Math.floor(time/6000);
    //     const second = Math.floor(time/100);
    //     const mili = time%100;
        
    //     if(mili <= 9) {
    //         if(second <= 9) {
    //             if(min <= 9) {
    //                 if(hr <= 9) {
    //                     span.innerHTML = `${'0' + hr}:${'0' + min}:${'0' + second}:${'0' + mili}`;
    //                 } else {
    //                     span.innerHTML = `${hr}:${'0' + min}:${'0' + second}:${'0' + mili}`;
    //                 }
    //             } else {
    //                 if(hr <= 9) {
    //                     span.innerHTML = `${'0' + hr}:${min}:${'0' + second}:${'0' + mili}`;
    //                 } else {
    //                     span.innerHTML = `${hr}:${min}:${'0' + second}:${'0' + mili}`;
    //                 }
    //             }
    //         } else {
    //             if(min <= 9) {
    //                 if(hr <= 9) {
    //                     span.innerHTML = `${'0' + hr}:${'0' + min}:${second}:${'0' + mili}`;
    //                 } else {
    //                     span.innerHTML = `${hr}:${'0' + min}:${'0' + second}:${'0' + mili}`;
    //                 }
    //             } else {
    //                 if(hr <= 9) {
    //                     span.innerHTML = `${'0' + hr}:${min}:${'0' + second}:${'0' + mili}`;
    //                 } else {
    //                     span.innerHTML = `${hr}:${min}:${'0' + second}:${'0' + mili}`;
    //                 }
    //             }
    //         }
    //     } else {
    //         if(second <= 9) {
    //             if(min <= 9) {
    //                 if(hr <= 9) {
    //                     span.innerHTML = `${'0' + hr}:${'0' + min}:${'0' + second}:${mili}`;
    //                 } else {
    //                     span.innerHTML = `${hr}:${'0' + min}:${'0' + second}:${mili}`;
    //                 }
    //             } else {
    //                 if(hr <= 9) {
    //                     span.innerHTML = `${'0' + hr}:${min}:${'0' + second}:${mili}`;
    //                 } else {
    //                     span.innerHTML = `${hr}:${min}:${'0' + second}:${mili}`;
    //                 }
    //             }
    //         } else {
    //             if(min <= 9) {
    //                 if(hr <= 9) {
    //                     span.innerHTML = `${'0' + hr}:${'0' + min}:${second}:${mili}`;
    //                 } else {
    //                     span.innerHTML = `${hr}:${'0' + min}:${'0' + second}:${mili}`;
    //                 }
    //             } else {
    //                 if(hr <= 9) {
    //                     span.innerHTML = `${'0' + hr}:${min}:${'0' + second}:${mili}`;
    //                 } else {
    //                     span.innerHTML = `${hr}:${min}:${'0' + second}:${mili}`;
    //                 }
    //             }
    //         }

    //     }
	// 	span.innerHTML = `${hr}:${min}:${second}:${mili}`;
    //     time--;	
    //     if(time == -1) {
    //         clearInterval(interval1);
    //         unblr('input');
    //     }
	// }
}



document.getElementById('timer').addEventListener('click' ,(e) => {
    unblr('input');
    document.getElementById('span1').style.display = 'inline';  
    document.getElementById('startt').style.display = 'inline';
    document.getElementById('resett').style.display = 'inline';    

    document.getElementById('starts').style.display = 'none';
    document.getElementById('resets').style.display = 'none';
    document.getElementById('stops').style.display = 'none';     
    document.getElementById('runs').style.display = 'none';  
    document.getElementById('span2').style.display = 'none';  
    
    // setToSpan('00:00:00:00' ,'span1');   
});








document.getElementById('stopwatch').addEventListener('click' ,(e) => {
    if(e.target.id === 'stopwatch') {
        disableBtn('stops');
        disableBtn('resets');
        enableBtn('starts');
        blr('input');
        document.getElementById('starts').style.display = 'inline';
        document.getElementById('resets').style.display = 'inline';    
        document.getElementById('stops').style.display = 'inline';    
        document.getElementById('startt').style.display = 'none';
        document.getElementById('resett').style.display = 'none';
        document.getElementById('span2').style.display = 'inline';  
        document.getElementById('span1').style.display = 'none';  
    }
});

let interval2 ,seconds = 0 ,mili = 0 ,min = 0 ,hrs = 0;

document.getElementById('starts').addEventListener('click' ,(e) => {
    enableBtn('stops');
    enableBtn('resets');
    workOfStopwatch();
    interval2 = setInterval(workOfStopwatch ,10);
    e.preventDefault();
});

function workOfStopwatch() {
    format(hrs ,min ,seconds ,mili);
    // document.getElementById('span2').innerHTML = `
    //     ${hrs}:${min}:${seconds}:${mili}
    // `;
    mili++;	
    if(mili == 100){
        mili = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            min++;
            if(min == 60){
                min = 0;
                hrs++;
            }
        }
    }
}



document.getElementById('resets').addEventListener('click' ,(e) => {
    disableBtn('stops');
    clearInterval(interval2);
    setToSpan('00:00:00:00' ,'span2');
    document.getElementById('stops').style.display = 'inline';
    document.getElementById('runs').style.display = 'none';
    hrs = 0;
    min = 0;
    seconds = 0;
    mili = 0;
    e.preventDefault();
});

document.getElementById('stops').addEventListener('click' ,(e) => {
    const value = document.getElementById('span2').innerHTML;
    clearInterval(interval2);
    setToSpan(value ,'span2');
    document.getElementById('stops').style.display = 'none';
    document.getElementById('runs').style.display = 'inline';
    e.preventDefault();
});
document.getElementById('runs').addEventListener('click' ,(e) => {
    let value = document.getElementById('span2').innerHTML;
    let hmsm = value.split(':');
    console.log(hmsm);
    hrs = hmsm[0];
    min = hmsm[1];
    seconds = hmsm[2];
    mili = hmsm[3];
    interval2 = setInterval(workOfStopwatch ,10);
    document.getElementById('stops').style.display = 'inline';
    document.getElementById('runs').style.display = 'none';
    e.preventDefault();
})






function setToSpan(input ,id) {
    const splt2 = input.split(':');
    const span = document.getElementById(id);
    span.innerHTML = `${splt2[0]}:${splt2[1]}:${splt2[2]}:${splt2[3]}`;
    // if(splt2[0].length > 2){
    //     const h = splt2[0].substr(13, 2);
    //     const m = splt2[1].substr(0, 2);
    //     const s = splt2[2].substr(0, 2);
    //     const se = splt2[3].substr(0, 2)
    //     span.innerHTML = `
    //         ${h}<span id="a">hr</span>:${m}<span id="a">min</span>:${s}<span id="a">sec</span>:${se}
    //     `;
    //     console.log(h);
    //     console.log(typeof(h));
    //     console.log(m);
    //     console.log(typeof(m));
    //     console.log(s);
    //     console.log(typeof(s));
    //     console.log(se);
    //     console.log(typeof(se));
    //     console.log('Hello');
    // } else {
    //     span.innerHTML = `
    //         ${splt2[0]}<span id="a">hr</span>:${splt2[1]}<span id="a">min</span>:${splt2[2]}<span id="a">sec</span>:${splt2[3]}
    //     `;   
    // }
}





function blr(id) {
    document.querySelector(id).style.display = 'none';
}
function unblr(id) {
    document.querySelector(id).style.display = 'block';
}
function disableBtn(id) {
    document.getElementById(id).disabled = true;
}
function enableBtn(id) {
    document.getElementById(id).disabled = false;
}
function format(hrs ,min ,seconds ,mili) {
    if(mili <= 9) {
        if(seconds <= 9) {
            if(min <= 9) {
                if(hrs <= 9 && hrs != 0) {
                    setToSpan(`${'0' + hrs}:${'0' + min}:${'0' + seconds}:${'0' + mili}` ,'span2');
                } else {
                    setToSpan(`${hrs}:${'0' + min}:${'0' + seconds}:${'0' + mili}` ,'span2');
                }
            } else {
                if(hrs <= 9 && hrs != 0) {
                    setToSpan(`${'0' + hrs}:${min}:${'0' + seconds}:${'0' + mili}` ,'span2');
                } else {
                    setToSpan(`${hrs}:${min}:${'0' + seconds}:${'0' + mili}` ,'span2');
                }
            }
        } else {
            if(min <= 9) {
                if(hrs <= 9 && hrs != 0){
                    setToSpan(`${'0' + hrs}:${'0' + min}:${seconds}:${'0' + mili}` ,'span2');
                } else {
                    setToSpan(`${hrs}:${'0' + min}:${seconds}:${'0' + mili}` ,'span2');
                }
            } else {
                if(hrs <= 9 && hrs != 0){
                    setToSpan(`${'0' + hrs}:${min}:${seconds}:${'0' + mili}` ,'span2');
                } else {
                    setToSpan(`${hrs}:${min}:${seconds}:${'0' + mili}` ,'span2');
                }
            }
        }
    } else {
        if(seconds <= 9) {
            if(min <= 9) {
                if(hrs <= 9 && hrs != 0) {
                    setToSpan(`${'0' + hrs}:${'0' + min}:${'0' + seconds}:${mili}` ,'span2');
                } else {
                    setToSpan(`${hrs}:${'0' + min}:${'0' + seconds}:${mili}` ,'span2');
                }
            } else {
                if(hrs <= 9 && hrs != 0) {
                    setToSpan(`${'0' + hrs}:${min}:${'0' + seconds}:${mili}` ,'span2');
                } else {
                    setToSpan(`${hrs}:${min}:${'0' + seconds}:${mili}` ,'span2');
                }
            }
        } else {
            if(min <= 9) {
                if(hrs <= 9 && hrs != 0){
                    setToSpan(`${'0' + hrs}:${'0' + min}:${seconds}:${mili}` ,'span2');
                } else {
                    setToSpan(`${hrs}:${'0' + min}:${seconds}:${mili}` ,'span2');
                }
            } else {
                if(hrs <= 9 && hrs != 0){
                    setToSpan(`${'0' + hrs}:${min}:${seconds}:${mili}` ,'span2');
                } else {
                    setToSpan(`${hrs}:${min}:${seconds}:${mili}` ,'span2');
                }
            }
        }
    }
}