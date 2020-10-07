$(document).ready(function(){
    var turns = ["#","#","#","#","#","#","#","#","#"];
    var computerTurn = "";
    var turn = "";
    var gameOn = false;
    var count = 0;
    var o = 0;
    var tw = 0;
    var th = 0;
    var fo = 0;
    var fi = 0;
    var si = 0;
    var se = 0;
    var e = 0;
    var n = 0;
    var te = 0;

    var startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();
    switch (startTurn) {
        case "X":
            computerTurn = "O";
            turn = "X";
            $("#message").html("Player " + turn + " gets to start!");
            break;
        case "O":
            computerTurn = "X";
            turn = "O";
            $("#message").html("Player " + turn + " gets to start!");
            break;
        case null:
            alert("Sorry. Please type X or O");
            window.location.reload(true);
            break;
        default:
            alert("Sorry. Please type X or O");
            window.location.reload(true);
            break;
    }

    var computerMove = '';
    function computersTurn() {
        var taken = false;
        if (taken === false && count !== 10) {
            robo();

            var move = $("#" + computerMove).text();
            if (move === "#") {
                count++;
                $("#" + computerMove).text(computerTurn);
                taken = true;
                turns[computerMove] = computerTurn;
            }
        }
    }

    function playerTurn (turn, id){
      var spotTaken = $("#"+id).text();
      if (spotTaken === "#"){
        count++;
        turns[id] = turn;
        $("#"+id).text(turn);
        winCondition(turns,turn);
        if (gameOn === false){
          computersTurn();
          $("#message").html("It's " + turn +"'s turn.");
          winCondition(turns, computerTurn);
        }
      }
    }

    function winCondition(trackMoves, currentMove) {
        if (trackMoves[0] === currentMove && trackMoves[1] === currentMove && trackMoves[2] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[4] === currentMove && trackMoves[6] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[0] === currentMove && trackMoves[3] === currentMove && trackMoves[6] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[0] === currentMove && trackMoves[4] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[1] === currentMove && trackMoves[4] === currentMove && trackMoves[7] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[3] === currentMove && trackMoves[4] === currentMove && trackMoves[5] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[6] === currentMove && trackMoves[7] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if(!(trackMoves.includes("#"))){
           gameOn = true;
          reset();
          alert("It is a Draw!");
        } else {
            gameOn = false;
        }
    }

    var slot = "";
    $(".tic").click(function(){
      slot = $(this).attr('id');
      playerTurn(turn,slot);
    });

    function reset(){
      turns = ["#","#","#","#","#","#","#","#","#"];
      count = 0;
      $(".tic").text("#");
      gameOn = true;
    }

    function computer(place) {
        computerMove = place;
    }

    function robo() {

        if(turns[0] === "X" && (count === 1 || o === 1)) {
            o = 1
            computer(1); // Here is the falulty Condition!!!!!!!
            if(turns[1] === "O"){
                if(turns[2] === "X" && (count === 3 || tw === 2)) {
                    tw = 2;
                    computer(4);
                        if(turns[3] === "X" && (count === 5 || th === 3)) {
                            th = 3;
                            computer(7);
                            alert("Computer Won !!!");
                        } else if(turns[5] === "X" && (count === 5 || fo === 4)) {
                            fo = 4;
                            computer(7);
                            alert("Computer Won !!!");
                        } else if(turns[6] === "X" && (count === 5 || fi === 5)) {
                            fi = 5;
                            computer(7);
                            alert("Computer Won !!!");
                        } else if(turns[8] === "X" && (count === 5 || si === 5)) {
                            si = 5;
                            computer(7);
                            alert("Computer Won !!!");
                        } else if(turns[7] === "X" && (count === 5 || se === 6)) {
                            se = 6;
                            computer(6);
                                if(turns[3] === "X" && (count === 7 || e === 7)) {
                                    e = 7;
                                    computer(8);
                                        if(turns[5] === "x" && (count === 9 || n === 8)) {
                                            n = 8;
                                            alert("Match Tie !!!");
                                        }
                                } else if(turns[5] === "X" && (count === 7 || te === 10)) {
                                    te = 10;
                                    computer(8);
                                        if(turns[3] === "x" && (count === 9)) {
                                            alert("Match Tie !!!");
                                        }

                                } else if(turns[8] === "X" && (count === 7 || eleven === 11)) {
                                    eleven = 11;
                                    computer(5);
                                        if(turns[3] === "x" && (count === 9 )) {
                                            alert("Match Tie !!!");
                                        }
                                }
                        }
                } else if(turns[3] === "X" && (count === 3 || tw === 12)) {
                    tw = 12;
                    computer(6);
                        if(turns[4] === "X" && (count === 5 || th === 13)) {
                            th = 13;
                            computer(5);
                                if(turns[2] === "X" && (count === 7 || fo === 14)) {
                                    fo = 14;
                                    computer(8);
                                        if(turns[7] === "X" && (count === 7 || fo === 14)) {
                                            alert("Match Tie !!!");
                                        }
                                } else if(turns[7] === "X") {
                                    fo = 15;
                                    computer(8);
                                        if(turns[2] === "X" && (count === 7 || fo === 15)) {
                                            alert("Match Tie !!!");
                                        }
                                } else if(turns[8] === "X" && (count === 7 || fo === 16)) {
                                    fo = 16;
                                    alert("You Won !!!");
                                }
                        } else if(turns[2] === "X" && (count === 5 || th === 17 )) {
                            th = 17;
                            computer(4);
                                if(turns[5] === "X" && (count === 7 || fo === 18)) {
                                    fo = 18;
                                    computer(8);
                                        if(turns[7] === "X") {
                                            alert("Match Tie !!!");
                                        }
                                } else if(turns[7] === "X" && (count === 7 || fo === 19)) {
                                    fo = 19;
                                    computer(5);
                                } else if(turns[8] === "X" && (count === 7 || fo === 20)) {
                                    fo = 20;
                                    computer(5);
                                }

                        } else if(turns[5] === "X" && (count === 5 || th === 21)) {
                            th = 21;
                            computer(4);
                                if(turns[2] === "X" && (count === 7 || fo === 22)) {
                                    fo = 22;
                                    computer(7);
                                } else if(turns[7] === "X" && (count === 7 || fo === 23)) {
                                    fo = 23;
                                    computer(2);
                                } else if(turns[8] === "X" && (count === 7 || fo === 24)) {
                                    fo = 24;
                                    computer(2);
                                }
                        } else if(turns[7] === "X" && (count === 5 || th === 25)) {
                            th = 25;
                            computer(4);
                                if(turns[2] === "X" && (count === 7 || fo === 26)) {
                                    fo = 26;
                                    computer(5);
                                    if(turns[2] === "X" && (count === 7 || fo === 27)) {
                                        fi = 27;
                                    }
                                } else if(turns[5] === "X" && (count === 7 || fo === 28)) {
                                    fo = 28;
                                    computer(2);
                                } else if(turns[8] === "X" && (count === 7 || fo === 29)) {
                                    fo = 29;
                                    computer(2);
                                }
                        } else if(turns[8] === "X" && (count === 5 || th === 30)) {
                            th = 30;
                            computer(4);
                                if(turns[2] === "X" && (count === 7 || fo === 31)) {
                                    fo = 31;
                                    computer(5);
                                        // Draw.
                                } else if(turns[5] === "X" && (count === 7 || fo === 32)) {
                                    fo = 32;
                                    computer(2);
                                    // comp win
                                } else if(turns[7] === "X" && (count === 7 || fo === 33)) {
                                    fo = 33;
                                    computer(2);
                                    // comp win
                                }
                        }

                } else if(turns[4] === "X" && (count === 3 || tw === 34)) {
                    tw = 34;
                    computer(8);
                    if(turns[2] === "X" && (count === 5 || th === 35)) {
                        th = 35;
                        computer(6);
                        if(turns[3] === "X" && (count === 7 || fo === 36)) {
                            fo = 36;
                            computer(7);
                            //comp won
                        } else if (turns[5] === "X" && (count === 7 || fo === 37)) {
                            fo = 37;
                            computer(7);
                            //copm won
                        } else if (turns[7] === "X" && (count === 7 || fo === 38)) {
                            fo = 38;
                            computer(3);
                            //Draw
                        }

                    } else if (turns[3] === "X" && (count === 5 || th === 39)) {
                        th = 39;
                        computer(5);
                        if(turns[2] === "X" && (count === 7 || fo === 40)) {
                            fo = 40;
                            computer(6);
                        } else if (turns[6] === "X" && (count === 7 || fo === 41)) {
                             //you won
                        } else if (turns[7] === "X" && (count === 7 || fo === 42)) {
                            fo = 42;
                            computer(2);
                            //comp won
                        }

                    } else if (turns[5] === "X" && (count === 5 || th === 43)) {
                        th = 43;
                        computer(3);
                        if(turns[2] === "X" && (count === 7 || fo === 44)) {
                            fo = 44;
                            computer(6);
                            //draw
                        } else if (turns[6] === "X" && (count === 7 || fo === 45)) {
                            fo = 45;
                            computer(2);
                            //draw
                        } else if (turns[7] === "X" && (count === 7 || fo === 46)) {
                            fo = 46;
                            computer(2);
                            //draw
                        }
                    } else if (turns[6] === "X" && (count === 5 || th === 47)) {
                        th = 47;
                        computer(2);
                        if(turns[3] === "X" && (count === 7 || fo === 48)) {
                            fo = 48;
                            //you won
                        } else if (turns[5] === "X" && (count === 7 || fo === 49)) {
                            fo = 49;
                            computer(3);
                            //draw
                        } else if (turns[7] === "X" && (count === 7 || fo === 50)) {
                            fo = 50;
                            computer(5);
                            //comp won
                        }
                    } else if (turns[7] === "X" && (count === 5 || th === 51)) {
                        th = 51;
                        computer(2);
                        if(turns[3] === "X" && (count === 7 || fo === 52)) {
                            fo = 52;
                            computer(5);
                            //comp won
                        } else if (turns[5] === "X" && (count === 7 || fo === 53)) {
                            fo = 53;
                            computer(3);
                            //draw
                        } else if (turns[6] === "X" && (count === 7 || fo === 54)) {
                            fo = 54;
                            computer(5);
                            //comp won
                        }
                    }

                } else if(turns[5] === "X" && (count === 3 || tw === 55)) {
                    tw = 55;
                    computer(4);
                    if(turns[2] === "X" && (count === 5 || th === 56)) {
                        th = 56;
                        computer(7);
                        //comp won
                    } else if(turns[3] === "X" && (count === 5 || th === 57)) {
                        th = 57;
                        computer(7);
                        //comp won
                    } else if(turns[6] === "X" && (count === 5 || th === 58)) {
                        th = 58;
                        computer(7);
                        //comp won
                    } else if(turns[7] === "X" && (count === 5 || th === 59)) {
                        th = 59;
                        computer(6);
                        if(turns[2] === "X" && (count === 7 || fo === 60)) {
                            fo = 60;
                            computer(8);
                            //draw
                        } else if(turns[3] === "X" && (count === 7 || fo === 61)) {
                            fo = 61;
                            computer(2);
                            //comp won
                        } else if(turns[8] === "X" && (count === 7 || fo === 62)) {
                            fo = 62;
                            computer(2);
                            //comp won
                        }   
                    } else if(turns[8] === "X" && (count === 5 || th === 63)) {
                        th = 63;
                        computer(7);
                        //comp won
                    }
                } else if(turns[6] === "X" && (count === 3 || tw === 67)) {
                    tw = 67;
                    computer(3);
                    if(turns[2] === "X" && (count === 5 || th === 68)) {
                        th = 68;
                        computer(4);
                        if(turns[5] === "X" && (count === 7 || fo === 69)) {
                            fo = 69;
                            computer(7);
                            //comp win
                        } else if(turns[7] === "X" && (count === 7 || fo === 70)) {
                            fo = 70;
                            computer(5);
                            //comp win
                        } else if(turns[8] === "X" && (count === 7 || fo === 71)) {
                            fo = 71;
                            computer(5);
                            //comp win
                        }
                    } else if(turns[4] === "X" && (count === 5 || th === 72)) {
                        th = 72;
                        computer(2);
                        if(turns[5] === "X" && (count === 7 || fo === 73)) {
                            fo = 73;
                            computer(8);
                            //draw
                        } else if(turns[7] === "X" && (count === 7 || fo === 74)) {
                            fo = 74;
                            computer(8);
                            //draw
                        } else if(turns[8] === "X" && (count === 7 || fo === 75)) {
                            fo = 75;
                            //you win
                        }
                    } else if(turns[5] === "X" && (count === 5 || th === 76)) {
                        th = 76;
                        computer(4);
                        if(turns[2] === "X" && (count === 7 || fo === 77)) {
                            fo = 77;
                            computer(7);
                            //comp win
                        } else if(turns[7] === "X" && (count === 7 || fo === 78)) {
                            fo = 78;
                            computer(8);
                            //draw
                        } else if(turns[8] === "X" && (count === 7 || fo === 79)) {
                            fo = 79;
                            computer(7);
                            //comp win
                        }
                    } else if(turns[7] === "X" && (count === 5 || th === 80)) {
                        th = 80;
                        computer(8);
                        if(turns[2] === "X" && (count === 7 || fo === 81)) {
                            fo = 81;
                            computer(4);
                            //draw
                        } else if(turns[4] === "X" && (count === 7 || fo === 82)) {
                            fo = 82;
                            computer(2);
                            //draw
                        } else if(turns[5] === "X" && (count === 7 || fo === 83)) {
                            fo = 83;
                            computer(4);
                            //draw
                        }
                    } else if(turns[8] === "X" && (count === 5 || th === 84)) {
                        th = 84;
                        computer(4);
                        if(turns[2] === "X" && (count === 7 || fo === 85)) {
                            fo = 85;
                            computer(7);
                            //comp win
                        } else if(turns[5] === "X" && (count === 7 || fo === 86)) {
                            fo = 86;
                            computer(7);
                            //comp won
                        } else if(turns[7] === "X" && (count === 7 || fo === 87)) {
                            fo = 87;
                            computer(4);
                            //you win
                        }
                    }
                } else if(turns[7] === "X" && (count === 3 || twelwe === 1200000)) {
        
                } else if(turns[8] === "X" && (count === 3 || twelwe === 120000000)) {
        
                }
            } else if(12) {
                    
            }
        } 
    }

    $("#reset").click(function(){
      reset();
    });

});