(function() {
    const allcells = document.querySelectorAll("#cell");
    const DigAllCells = [];
    const allcells2 = Array.from(allcells);
    while(allcells2.length) DigAllCells.push(allcells2.splice(0,30));

    let x = 0;
    let y = 0;
    DigAllCells.forEach((m) => m.forEach((i) =>{
            DigAllCells[y][x].oncontextmenu = function () {
                return false;
            };
            DigAllCells[y][x].addEventListener("click", function() {
                if (DigAllCells[y][x].classList.contains('flag') == true){
                    return false;
                }
                else if(DigAllCells[y][x].classList.contains('bomb') == true){
                    DigAllCells[y][x].classList.remove('untaken'); 
                    field.classList.add('gameover');
                }
                // else if(DigAllCells[y][x].classList.contains('untaken') == false){
                //     if(DigAllCells[y][x].innerHTML == r_flags || DigAllCells[y][x].innerHTML == ''){

                //     }
                // }
                else {
                    DigAllCells[y][x].classList.remove('untaken');     
                }
            });
            DigAllCells[y][x].addEventListener("contextmenu", function() {
                if (DigAllCells[y][x].classList.contains('flag') == true){
                    DigAllCells[y][x].classList.remove('flag');
                    DigAllCells[y][x].classList.add('untaken');
                }
                else if (DigAllCells[y][x].classList.contains('untaken') == false){
                    return false; 
                }
                else {
                    DigAllCells[y][x].classList.remove('untaken');
                    DigAllCells[y][x].classList.add('flag'); 
                }
            });
            x = x == 29 ? 0 : x+1;
            y = x == 0 ? y+1 : y;
        }
    ));
}());