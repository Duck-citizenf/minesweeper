(function() {
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
    let bombs = 0;
    DigField.forEach((array) => array.forEach((element) =>
        {
            let FS = DigField[y+1];         // ________
            let FN = DigField[y-1];         //|NW|N |NE|
            let W  = DigField[y][x-1];      //|__|__|__|
            let E  = DigField[y][x+1];      //|E |  |W |
                                            //|__|__|__|
                                            //|SW|S |SE|
                                            //|__|__|__|
            //Creating cell with a bomb
            if(element == 1) {field.innerHTML += "<div id=\"cell\" class=\"bomb untaken\"></div>"}
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

                //If we have even 1 bomb with write it in HTML
                if(bombs > 0) {
                    field.innerHTML+=_div+bombs+div_
                } 
                //Otherwise cell will be blank
                else {
                    field.innerHTML+=zero_cell
                }
            };
            //Setting count to 0 for the new cicle
            bombs = 0;
            //Changing coordinates
            x = x == 29 ? 0 : x+1;
            y = x == 0 ? y+1 : y;
        }
    ));
}());