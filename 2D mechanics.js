(function() {
    const allcells = document.querySelectorAll("#cell");
    const DigAllCells = [];
    const allcells2 = Array.from(allcells);
    while(allcells2.length) DigAllCells.push(allcells2.splice(0,30));

    DigAllCells.forEach((m) => m.forEach((i) =>{
            i.oncontextmenu = function () {
                return false;
            };
            i.addEventListener("click", function() {  
                let flag = 0; 
                let y = DigAllCells.indexOf(m);
                let x = m.indexOf(i);
                let FS = DigAllCells[y+1];   
                let FN = DigAllCells[y-1];   
                let W  = DigAllCells[y][x-1];
                let E  = DigAllCells[y][x+1];
                if (FN != undefined){
                    let NW = DigAllCells[y-1][x-1];
                    let N  = DigAllCells[y-1][x];  
                    let NE = DigAllCells[y-1][x+1];
                    if(NW != undefined){NW.classList.contains('flag') == true ? flag++ : null}
                    if(N  != undefined){N .classList.contains('flag') == true ? flag++ : null}
                    if(NE != undefined){NE.classList.contains('flag') == true ? flag++ : null}
                };
                if (FS != undefined){
                    let SW = DigAllCells[y+1][x-1];
                    let S  = DigAllCells[y+1][x];  
                    let SE = DigAllCells[y+1][x+1];
                    if(SW != undefined){SW.classList.contains('flag') == true ? flag++ : null}
                    if(S  != undefined){S .classList.contains('flag') == true ? flag++ : null}
                    if(SE != undefined){SE.classList.contains('flag') == true ? flag++ : null}
                };
                if(W  != undefined){W .classList.contains('flag') == true ? flag++ : null}
                if(E  != undefined){E .classList.contains('flag') == true ? flag++ : null}
                r_flags = flag.toString();

                if (i.classList.contains('flag') == true){
                    return false;
                }
                else if(i.classList.contains('bomb') == true){
                    i.classList.remove('untaken'); 
                    field.classList.add('gameover');
                }
                else if(i.classList.contains('untaken') == false){
                    if(i.innerHTML == r_flags || i.innerHTML == ''){
                        if (FN != undefined){
                            let NW = DigAllCells[y-1][x-1];
                            let N  = DigAllCells[y-1][x];  
                            let NE = DigAllCells[y-1][x+1];
                            if(NW != undefined){NW.classList.remove('untaken')} 
                            if(N  != undefined){N .classList.remove('untaken')} 
                            if(NE != undefined){NE.classList.remove('untaken')}
                        };
                        if (FS != undefined){
                            let SW = DigAllCells[y+1][x-1];
                            let S  = DigAllCells[y+1][x];  
                            let SE = DigAllCells[y+1][x+1];
                            if(SW != undefined){SW.classList.remove('untaken')}
                            if(S  != undefined){S .classList.remove('untaken')}
                            if(SE != undefined){SE.classList.remove('untaken')}
                        };
                        if(W  != undefined){W .classList.remove('untaken')}
                        if(E  != undefined){E .classList.remove('untaken')}
                    }
                }
                else {
                    i.classList.remove('untaken');     
                }
            });
            i.addEventListener("contextmenu", function() {
                if (i.classList.contains('flag') == true){
                    i.classList.remove('flag');
                    i.classList.add('untaken');
                }
                else if (i.classList.contains('untaken') == false){
                    return false; 
                }
                else {
                    i.classList.remove('untaken');
                    i.classList.add('flag'); 
                }
            });
        }
    ));
}());