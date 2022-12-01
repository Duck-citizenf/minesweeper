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
DigField.forEach((array) => array.forEach((element) =>
        {
            let x1 = x+1;
            let x0 = x-1;
            let y1 = y+1;
            let y0 = y-1;
            

            if (DigField[x1] == undefined) {
                DigField[x1][y1] = DigField[x1][y1] == undefined ?? 0;
                DigField[x1][y]  = DigField[x1][y] == undefined ?? 0;
                DigField[x1][y0] = DigField[x1][y0] == undefined ?? 0;
            }
            if (DigField[x0] == undefined) {
                DigField[x0][y1] = 0;
                DigField[x0][y]  = 0; 
                DigField[x0][y0] = 0;
            }
            array[y1]  = DigField[x][y1]  == undefined ?? 0 ;
            array[y0]  = DigField[x][y0]  == undefined ?? 0 ;

            field.innerHTML = element == 1 ? field.innerHTML + "<div id=\"cell\" class=\"bomb untaken\"></div>"
                : ((number = DigField[x1][y1] + DigField[x1][y] + DigField[x1][y0] + DigField[x][y1] + DigField[x][y0] + DigField[x0][y1] + DigField[x0][y0]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell));
            x = y == 30 ?? x+1;
            y = y == 30 ? 0 : y+1;
            number = 0;
        }
));