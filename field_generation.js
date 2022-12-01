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

// Visual field creation
const field = document.getElementById("field");
const zero_cell = "<div id=\"cell\" class=\"unit untaken\"></div>";
const _div = "<div id=\"cell\" class=\"unit untaken\">";
const div_ = "</div>";
let a = 0;

z.forEach((element) => {
    let n  = a-30;
    let wn = a-31;
    let w  = a-1 ;
    let sw = a+29;
    let s  = a+30;
    let se = a+31;
    let e  = a+1 ;
    let ne = a-29;
        
    field.innerHTML = element == 1 ? field.innerHTML + "<div id=\"cell\" class=\"bomb untaken\"></div>"
        : a == 0 ? ((number = z[s] + z[se] + z[e]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell))
        : a == 29 ? ((number = z[s] + z[se] + z[e]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell))
        : a == 450 ? ((number = z[n] + z[ne] + z[e]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell))
        : a == 479 ? ((number = z[w] + z[wn] + z[n]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell))
        : a > 0 && a < 30 ? ((number = z[s] + z[se] + z[e] + z[w] + z[sw]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell))
        : a > 450 && a < 479 ? ((number = z[w] + z[wn] + z[n] + z[e] + z[ne]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell))
        : a % 30 == 0 ? ((number = z[n] + z[ne] + z[e] + z[se] + z[s]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell))
        : e % 30 == 0 ? ((number = z[wn] + z[w] + z[sw] + z[s] + z[n]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell))
        : ((number = z[n] + z[wn] + z[w] + z[sw] + z[s] + z[se] + z[e] + z[ne]), (number > 0 ? field.innerHTML+_div+number+div_ : field.innerHTML+zero_cell));
    a++;
    number = 0;
}
);