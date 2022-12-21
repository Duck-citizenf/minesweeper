(function() {
    const allbombs = document.querySelectorAll(".bomb");
    const allcells = document.querySelectorAll("#cell");
    //Converting NodeList of Listeners to Array
    const allcells2 = Array.from(allcells);
    //Converting Array to 
    const DigAllCells = [];
    while(allcells2.length) DigAllCells.push(allcells2.splice(0,30));
    //Setting bomb counter
    let bomb_counter = document.querySelector('.bomb_count');
    bomb_counter.innerHTML = window.bomb_count;
    let true_counter = window.bomb_count;

    DigAllCells.forEach((m) => m.forEach((i) =>{
            //blocking left click in browser
            i.oncontextmenu = function () {
                return false;
            };
            i.addEventListener("click", function() {  
                let flag = 0; 
                window.suspect = [];
                window.suspects = [];
                //Taking coordinates of Listener
                let y = DigAllCells.indexOf(m);
                let x = m.indexOf(i);
                //FS - south array, FN - north array
                let FS = DigAllCells[y+1];   
                let FN = DigAllCells[y-1];
                //West and East from Listener
                let W  = DigAllCells[y][x-1];
                let E  = DigAllCells[y][x+1];
                //Chaining that clears all cells with no number
                function Chain(y,x){
                    while(DigAllCells[y][x].classList.contains('untaken') && DigAllCells[y][x].classList.contains('bomb') == false){
                        DigAllCells[y][x].classList.remove('untaken');
                        if(DigAllCells[y][x].innerHTML == ''){
                            if (DigAllCells[y+1] != undefined){
                                if(DigAllCells[y+1][x+1] != undefined){Chain(y+1,x+1);}
                                if(DigAllCells[y+1][x-1] != undefined){Chain(y+1,x-1);}
                                Chain(y+1,x);
                            }
                            if (DigAllCells[y-1] != undefined){
                                if(DigAllCells[y-1][x+1] != undefined){Chain(y-1,x+1);}
                                if(DigAllCells[y-1][x-1] != undefined){Chain(y-1,x-1);}
                                Chain(y-1,x);
                            }
                            if(DigAllCells[y][x+1] != undefined){Chain(y,x+1);}
                            if(DigAllCells[y][x-1] != undefined){Chain(y,x-1);} 
                        }
                        else{
                            suspect.push(DigAllCells[y][x]); //0
                            if (DigAllCells[y+1] != undefined){
                                if(DigAllCells[y+1][x+1] != undefined){suspect.push(DigAllCells[y+1][x+1]);}else{suspect.push(0);} //1
                                if(DigAllCells[y+1][x-1] != undefined){suspect.push(DigAllCells[y+1][x-1]);}else{suspect.push(0);} //2
                                suspect.push(DigAllCells[y+1][x]); //3
                            }
                            else{suspect.push(0, 0, 0);}
                            if (DigAllCells[y-1] != undefined){
                                if(DigAllCells[y-1][x+1] != undefined){suspect.push(DigAllCells[y-1][x+1]);}else{suspect.push(0);} //4
                                if(DigAllCells[y-1][x-1] != undefined){suspect.push(DigAllCells[y-1][x-1]);}else{suspect.push(0);} //5
                                suspect.push(DigAllCells[y-1][x])  ; //6
                            }
                            else{suspect.push(0, 0, 0);}
                            if(DigAllCells[y][x+1] != undefined){suspect.push(DigAllCells[y][x+1]);}else{suspect.push(0);} //7
                            if(DigAllCells[y][x-1] != undefined){suspect.push(DigAllCells[y][x-1]);}else{suspect.push(0);} //8
                            suspects.push(suspect);
                            suspect = [];
                        }
                    }
                }
                function EasyFlag(){
                    suspects.forEach((suspect)=>{
                        let easy_flags = [];
                        let y_easy = 0;

                        if(suspect[1] != 0 && (suspect[1].classList.contains('untaken') || suspect[1].classList.contains('flag'))){easy_flags.push(suspect[1]); y_easy++}
                        if(suspect[2] != 0 && (suspect[2].classList.contains('untaken') || suspect[2].classList.contains('flag'))){easy_flags.push(suspect[2]); y_easy++}
                        if(suspect[3] != 0 && (suspect[3].classList.contains('untaken') || suspect[3].classList.contains('flag'))){easy_flags.push(suspect[3]); y_easy++}
                        if(suspect[4] != 0 && (suspect[4].classList.contains('untaken') || suspect[4].classList.contains('flag'))){easy_flags.push(suspect[4]); y_easy++}
                        if(suspect[5] != 0 && (suspect[5].classList.contains('untaken') || suspect[5].classList.contains('flag'))){easy_flags.push(suspect[5]); y_easy++}
                        if(suspect[6] != 0 && (suspect[6].classList.contains('untaken') || suspect[6].classList.contains('flag'))){easy_flags.push(suspect[6]); y_easy++}
                        if(suspect[7] != 0 && (suspect[7].classList.contains('untaken') || suspect[7].classList.contains('flag'))){easy_flags.push(suspect[7]); y_easy++}
                        if(suspect[8] != 0 && (suspect[8].classList.contains('untaken') || suspect[8].classList.contains('flag'))){easy_flags.push(suspect[8]); y_easy++} 
                        let st_y_easy = y_easy.toString();
                        if(suspect[0].innerHTML == st_y_easy){
                            easy_flags.forEach((easy_flag)=>{
                                if(easy_flag.classList.contains('untaken')){
                                    easy_flag.classList.add('flag');
                                    easy_flag.classList.remove('untaken');
                                    bomb_counter.innerHTML = bomb_counter.innerHTML -1;
                                    if(easy_flag.classList.contains('bomb') == true){
                                        true_counter = true_counter -1;
                                    }
                                }
                            });
                        }
                    });
                    window.suspect = [];
                    window.suspects = [];
                }
                
                //Testing if north exist
                if (FN != undefined){
                    window.NW = DigAllCells[y-1][x-1];
                    window.N  = DigAllCells[y-1][x];  
                    window.NE = DigAllCells[y-1][x+1];
                    //testing whether they have flag or not, if north-west or north-east exist
                    if(NW != undefined){NW.classList.contains('flag') == true ? flag++ : null}
                    if(NE != undefined){NE.classList.contains('flag') == true ? flag++ : null}
                    N .classList.contains('flag') == true ? flag++ : null
                };
                //Testing if south exist
                if (FS != undefined){
                    window.SW = DigAllCells[y+1][x-1];
                    window.S  = DigAllCells[y+1][x];  
                    window.SE = DigAllCells[y+1][x+1];
                    //testing whether they have flag or not, if south-west or south-east exist
                    if(SW != undefined){SW.classList.contains('flag') == true ? flag++ : null}
                    if(SE != undefined){SE.classList.contains('flag') == true ? flag++ : null}
                    S .classList.contains('flag') == true ? flag++ : null
                };
                //testing whether they have flag or not, whether west or east exist
                if(W  != undefined){W .classList.contains('flag') == true ? flag++ : null}
                if(E  != undefined){E .classList.contains('flag') == true ? flag++ : null}
                //To compare inner HTML value with number of flags we just counted - we need to make it string
                r_flags = flag.toString();
                
                //blocking click if cell have flag
                if (i.classList.contains('flag') == true){
                    return false;
                }
                //ending game if cell had a bomb
                else if(i.classList.contains('bomb') == true){
                    i.classList.remove('untaken'); 
                    field.classList.add('gameover');
                    for (let bomb = 0; bomb < allbombs.length; bomb++) {
                        allbombs[bomb].classList.remove('untaken');
                    }
                    let allflags = document.querySelectorAll('.flag');
                    for (let w_flag = 0; w_flag < allflags.length; w_flag++) {
                        if(allflags[w_flag].classList.contains('flag') == true && allflags[w_flag].classList.contains('bomb') == false){
                            allflags[w_flag].classList.add('orange');
                        }
                    }
                }
                //clicking cell that was opened
                else if(i.classList.contains('untaken') == false){
                    //cells will open only if nearby flags = number of mines
                    if(i.innerHTML == r_flags || i.innerHTML == ''){
                        let mistake = 0;
                        //Testing if north exist
                        if (FN != undefined){
                            //testing if north-west or north-east exist
                            if(NW != undefined){
                                Chain(y-1,x-1);
                                NW.classList.remove('untaken');
                                NW.classList.contains('flag') == false && NW.classList.contains('bomb') == true ? mistake++ : null;
                            }
                            if(NE != undefined){
                                Chain(y-1,x+1);
                                NE.classList.remove('untaken');
                                NE.classList.contains('flag') == false && NE.classList.contains('bomb') == true ? mistake++ : null;
                            }
                            Chain(y-1,x);
                            N .classList.remove('untaken');
                            N .classList.contains('flag') == false && N .classList.contains('bomb') == true ? mistake++ : null;
                        };
                        //Testing if south exist
                        if (FS != undefined){
                            //testing if south-west or south-east exist
                            if(SW != undefined){
                                Chain(y+1,x-1);
                                SW.classList.remove('untaken');
                                SW.classList.contains('flag') == false && SW.classList.contains('bomb') == true ? mistake++ : null;
                            }
                            if(SE != undefined){
                                Chain(y+1,x+1);
                                SE.classList.remove('untaken');
                                SE.classList.contains('flag') == false && SE.classList.contains('bomb') == true ? mistake++ : null;
                            }
                            Chain(y+1,x);
                            S .classList.remove('untaken');
                            S .classList.contains('flag') == false && S .classList.contains('bomb') == true ? mistake++ : null;
                        };
                        if(W  != undefined){
                            Chain(y,x-1);
                            W .classList.remove('untaken');
                            W .classList.contains('flag') == false && W .classList.contains('bomb') == true ? mistake++ : null;
                        }
                        if(E  != undefined){
                            Chain(y,x+1);
                            E .classList.remove('untaken')
                            E .classList.contains('flag') == false && E .classList.contains('bomb') == true ? mistake++ : null;
                        }
                        EasyFlag();

                        //Ending game if cell had bomb and no flag
                        if(mistake>0) {
                            field.classList.add('gameover')
                            for (let bomb = 0; bomb < allbombs.length; bomb++) {
                                allbombs[bomb].classList.remove('untaken');
                            }
                            let allflags = document.querySelectorAll('.flag');
                            for (let w_flag = 0; w_flag < allflags.length; w_flag++) {
                                if(allflags[w_flag].classList.contains('flag') == true && allflags[w_flag].classList.contains('bomb') == false){
                                    allflags[w_flag].classList.add('orange');
                                }
                            }
                        }
                    }
                }
                //Removing class that hides cell
                else {
                    Chain(y,x);
                    EasyFlag();
                    i.classList.remove('untaken');     
                }
            });
            i.addEventListener("contextmenu", function() {
                //How flag is removed
                if (i.classList.contains('flag') == true){
                    i.classList.remove('flag');
                    i.classList.add('untaken');
                    bomb_counter.innerHTML = bomb_counter.innerHTML -1+2;
                    if(i.classList.contains('bomb') == true){
                        true_counter = true_counter -1+2;
                    }
                }
                //Disabling option to put flag on opened cell
                else if (i.classList.contains('untaken') == false){
                    return false; 
                }
                //How flag is placed
                else {
                    i.classList.remove('untaken');
                    i.classList.add('flag');
                    bomb_counter.innerHTML = bomb_counter.innerHTML -1;
                    if(i.classList.contains('bomb') == true){
                        true_counter = true_counter -1;
                    }
                }
                if(true_counter == 0){
                    document.getElementById('victory').classList.remove('not');
                    field.classList.add('gameover')
                }
            });
        }
    ));
}());