(function() {
    const allcells = document.querySelectorAll("#cell");
    //Converting NodeList of Listeners to Array
    const allcells2 = Array.from(allcells);
    //Converting Array to 
    const DigAllCells = [];
    while(allcells2.length) DigAllCells.push(allcells2.splice(0,30));

    DigAllCells.forEach((m) => m.forEach((i) =>{
            //blocking left click in browser
            i.oncontextmenu = function () {
                return false;
            };
            i.addEventListener("click", function() {  
                let flag = 0; 
                //Taking coordinates of Listener
                let y = DigAllCells.indexOf(m);
                let x = m.indexOf(i);
                //FS - south array, FN - north array
                let FS = DigAllCells[y+1];   
                let FN = DigAllCells[y-1];
                //West and East from Listener
                let W  = DigAllCells[y][x-1];
                let E  = DigAllCells[y][x+1];
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
                }
                //Chaining that clears all cells with no number
                else if(i.innerHTML == ''){
                    i.classList.remove('untaken');

                    function ChainSouth(y,x){
                        if(DigAllCells[y][x].innerHTML == ''){
                            if (DigAllCells[y+1] != undefined){
                                if(DigAllCells[y+1][x+1] != undefined){DigAllCells[y+1][x+1].classList.remove('untaken')}
                                if(DigAllCells[y+1][x-1] != undefined){DigAllCells[y+1][x-1].classList.remove('untaken')}
                                DigAllCells[y+1][x].classList.remove('untaken');
                                ChainSouth(y+1,x+1);
                                ChainSouth(y+1,x)  ;
                                ChainSouth(y+1,x-1);
                            }
                            if (DigAllCells[y-1] != undefined){
                                if(DigAllCells[y-1][x+1] != undefined){DigAllCells[y-1][x+1].classList.remove('untaken')}
                                if(DigAllCells[y-1][x-1] != undefined){DigAllCells[y-1][x-1].classList.remove('untaken')}
                                DigAllCells[y-1][x].classList.remove('untaken');
                            }
                            if(DigAllCells[y][x+1] != undefined){DigAllCells[y][x+1].classList.remove('untaken')}
                            if(DigAllCells[y][x-1] != undefined){DigAllCells[y][x-1].classList.remove('untaken')} 
                        }
                    }
                    ChainSouth(y,x);
                }
                //clicking cell that was opened
                else if(i.classList.contains('untaken') == false){
                    //cells will open only if nearby flags = number of mines
                    if(i.innerHTML == r_flags){
                        let mistake = 0;
                        //Testing if north exist
                        if (FN != undefined){
                            //testing if north-west or north-east exist
                            if(NW != undefined){
                                NW.classList.remove('untaken');
                                NW.classList.contains('flag') == false && NW.classList.contains('bomb') == true ? mistake++ : null;
                            }
                            if(NE != undefined){
                                NE.classList.remove('untaken');
                                NE.classList.contains('flag') == false && NE.classList.contains('bomb') == true ? mistake++ : null;
                            }
                            N .classList.remove('untaken');
                            N .classList.contains('flag') == false && N .classList.contains('bomb') == true ? mistake++ : null;
                        };
                        //Testing if south exist
                        if (FS != undefined){
                            //testing if south-west or south-east exist
                            if(SW != undefined){
                                SW.classList.remove('untaken');
                                SW.classList.contains('flag') == false && SW.classList.contains('bomb') == true ? mistake++ : null;
                            }
                            if(SE != undefined){
                                SE.classList.remove('untaken');
                                SE.classList.contains('flag') == false && SE.classList.contains('bomb') == true ? mistake++ : null;
                            }
                            S .classList.remove('untaken');
                            S .classList.contains('flag') == false && S .classList.contains('bomb') == true ? mistake++ : null;
                        };
                        if(W  != undefined){
                            W .classList.remove('untaken');
                            W .classList.contains('flag') == false && W .classList.contains('bomb') == true ? mistake++ : null;
                        }
                        if(E  != undefined){
                            E .classList.remove('untaken')
                            E .classList.contains('flag') == false && E .classList.contains('bomb') == true ? mistake++ : null;
                        }

                        //Ending game if cell had bomb and no flag
                        mistake>0 ? field.classList.add('gameover') : null;
                    }
                }
                //Removing class that hides cell
                else {
                    i.classList.remove('untaken');     
                }
            });
            i.addEventListener("contextmenu", function() {
                //How flag is removed
                if (i.classList.contains('flag') == true){
                    i.classList.remove('flag');
                    i.classList.add('untaken');
                }
                //Disabling option to put flag on opened cell
                else if (i.classList.contains('untaken') == false){
                    return false; 
                }
                //How flag is placed
                else {
                    i.classList.remove('untaken');
                    i.classList.add('flag'); 
                }
            });
        }
    ));
}());