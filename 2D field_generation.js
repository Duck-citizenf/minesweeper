document.getElementById('easy').addEventListener('click', Cachee);
document.getElementById('normal').addEventListener('click', Cachee);
document.getElementById('hard').addEventListener('click', Cachee);
document.getElementById('create_custom').addEventListener('click', Cachee);
document.querySelector('.refresh').addEventListener('click', Cachee);

function Cachee(){
    document.getElementById("field").innerHTML = '';
    document.getElementById("field").classList.remove('gameover');
    if(document.getElementById('hard').checked == true){
        let bomb_count = 99;
        let height = 16;
        let width = 30;
        Create(bomb_count, height, width);
        Clicks(bomb_count, width);
    }
    else if(document.getElementById('normal').checked == true){
        let bomb_count = 40;
        let height = 16;
        let width = 16;
        Create(bomb_count, height, width);
        Clicks(bomb_count, width);
    }
    else if(document.getElementById('easy').checked == true){
        let bomb_count = 10;
        let height = 9;
        let width = 9;
        Create(bomb_count, height, width);
        Clicks(bomb_count, width);
    }
    else if(document.getElementById('custom').checked == true){
        let bomb_count = document.getElementById('bombs').value;
        let height = document.getElementById('height').value;
        let width = document.getElementById('width').value;
        Create(bomb_count, height, width);
        Clicks(bomb_count, width);
    }
}
function Create(bomb_count, height, width) {
    // 1D array creation
    let z = [];
    for(let i=0; i < height*width; i++){
        z.push(i >= bomb_count ? 0 : 1)
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
    while(z.length) DigField.push(z.splice(0,width));

    // Visual field creation
    const field = document.getElementById("field");
    const zero_cell = "<div id=\"cell\" class=\"unit untaken\"></div>";
    const _div = "<div id=\"cell\" class=\"unit untaken\">";
    const div_ = "</div>";
    let x = 0;
    let y = 0;
    let bombs = 0;
    DigField.forEach((array) =>{
        field.innerHTML += "<div id=\"i"+DigField.indexOf(array)+"\">";
        field.innerHTML += "</div>";
    });
    DigField.forEach((array) =>
    array.forEach((element) =>{
        //creating div for array
        const i_array = document.getElementById("i"+y);
        let FS = DigField[y+1];         // ________
        let FN = DigField[y-1];         //|NW|N |NE|
        let W  = DigField[y][x-1];      //|__|__|__|
        let E  = DigField[y][x+1];      //|W |  |E |
                                        //|__|__|__|
                                        //|SW|S |SE|
                                        //|__|__|__|
        //Creating cell with a bomb
        if(element == 1) {i_array.innerHTML += "<div id=\"cell\" class=\"bomb untaken\"></div>"}
        //Creating other cells and counting how many bombs are nearby
        else {
            //Testing if north exist
            if (FN != undefined){
                let NW = DigField[y-1][x-1];
                let N  = DigField[y-1][x];  
                let NE = DigField[y-1][x+1];
                //Testing if north-west or north-east exist
                if (NE != undefined){bombs += NE};
                if (NW != undefined){bombs += NW};
                bombs += N;
            };
            //Testing if south exist
            if (FS != undefined){
                let SW = DigField[y+1][x-1];
                let S  = DigField[y+1][x];  
                let SE = DigField[y+1][x+1];
                //Testing if south-west or south-east exist
                if (SE != undefined){bombs += SE};
                if (SW != undefined){bombs += SW};
                bombs += S;
            };
            //Testing if west or east exist
            if (E  != undefined){bombs += E };
            if (W  != undefined){bombs += W };
            //If we have even 1 bomb write it in HTML
            if(bombs > 0) {
                i_array.innerHTML+=_div+bombs+div_
            } 
            //Otherwise cell will be blank
            else {
                i_array.innerHTML+=zero_cell
            }
        };
        bombs = 0;
        //Changing coordinates
        x = x == width-1 ? 0 : x+1;
        y = x == 0 ? y+1 : y;
    }));
};