//UNUSED CODE

// 1D array creation
let i = 0;
let z = [];
while (i !== 99) {
    z.push(1);
    i++;
}
while (i !== 480){
    z.push(0);
    i++;
}
function shuffleArr (array){
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}
shuffleArr(z);

// 2D array creation
const DigField = [];
while(z.length) DigField.push(z.splice(0,30));

// Visual field creation
const field = document.getElementById("field");
const zero_cell = "<div id=\"cell\" class=\"unit untaken\"></div>";
const _div = "<div id=\"cell\" class=\"unit untaken\">";
const div_ = "</div>";
let x = 0;
let y = 0;
let number = 0;
DigField.forEach((array) => array.forEach((element) =>
    {
        let FS = DigField[y+1];
        let FN = DigField[y-1];                 // FN FN FN 
        let W  = DigField[y][x-1];              // ________
        let E  = DigField[y][x+1];              //|NW|N |NE|
                                                //|__|__|__|
                                                //|E |  |W |
                                                //|__|__|__|
                                                //|SW|S |SE|
                                                //|__|__|__|
                                                // FS FS FS         
    
        if(element == 1) {field.innerHTML += "<div id=\"cell\" class=\"bomb untaken\"></div>"}
        else {
            if (FN != undefined){
                let NW = DigField[y-1][x-1];
                let N  = DigField[y-1][x];  
                let NE = DigField[y-1][x+1];
                if (NE != undefined){number += NE};
                if (N  != undefined){number += N };
                if (NW != undefined){number += NW};
            };
            if (FS != undefined){
                let SW = DigField[y+1][x-1];
                let S  = DigField[y+1][x];  
                let SE = DigField[y+1][x+1];
                if (SE != undefined){number += SE};
                if (S  != undefined){number += S };
                if (SW != undefined){number += SW};
            };
            if (E  != undefined){number += E };
            if (W  != undefined){number += W };

            if(number > 0) {
                field.innerHTML+=_div+number+div_
            } 
            else {
                field.innerHTML+=zero_cell
            }
        };
        number = 0;
        x = x == 29 ? 0 : x+1;
        y = x == 0 ? y+1 : y;
    }
));