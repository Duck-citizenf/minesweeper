const allcells = document.querySelectorAll("#cell");

for (let i = 0; i < allcells.length; i++) {
    let n = i-30;
    let wn = i-31;
    let w = i-1;
    let sw = i+29;
    let s = i+30;
    let se = i+31;
    let e = i+1;
    let ne = i-29;

    allcells[i].oncontextmenu = function () {
        return false;
    };
    allcells[i].addEventListener("click", function() {
        let m = 0;
        i == 0 ? (
            allcells[s ].classList.contains('flag') == true ? m++ : null, 
            allcells[se].classList.contains('flag') == true ? m++ : null, 
            allcells[e ].classList.contains('flag') == true ? m++ : null
        )
        : i == 29 ? (
            allcells[s ].classList.contains('flag') == true ? m++ : null,
            allcells[se].classList.contains('flag') == true ? m++ : null,
            allcells[e ].classList.contains('flag') == true ? m++ : null
        )
        : i == 450 ? (
            allcells[n ].classList.contains('flag') == true ? m++ : null,
            allcells[ne].classList.contains('flag') == true ? m++ : null,
            allcells[e ].classList.contains('flag') == true ? m++ : null
        )
        : i == 479 ? (
            allcells[w ].classList.contains('flag') == true ? m++ : null,
            allcells[wn].classList.contains('flag') == true ? m++ : null,
            allcells[n ].classList.contains('flag') == true ? m++ : null
        )
        : i > 0 && i < 30 ? (
            allcells[s ].classList.contains('flag') == true ? m++ : null,
            allcells[se].classList.contains('flag') == true ? m++ : null,
            allcells[e ].classList.contains('flag') == true ? m++ : null,
            allcells[w ].classList.contains('flag') == true ? m++ : null,
            allcells[sw].classList.contains('flag') == true ? m++ : null
        )
        : i > 450 && i < 479 ? (
            allcells[e ].classList.contains('flag') == true ? m++ : null,
            allcells[ne].classList.contains('flag') == true ? m++ : null,
            allcells[wn].classList.contains('flag') == true ? m++ : null,
            allcells[w ].classList.contains('flag') == true ? m++ : null,
            allcells[n ].classList.contains('flag') == true ? m++ : null
        )
        : i % 30 == 0 ? (
            allcells[e ].classList.contains('flag') == true ? m++ : null,
            allcells[ne].classList.contains('flag') == true ? m++ : null,
            allcells[se].classList.contains('flag') == true ? m++ : null,
            allcells[s ].classList.contains('flag') == true ? m++ : null,
            allcells[n ].classList.contains('flag') == true ? m++ : null
        )
        : e % 30 == 0 ? (
            allcells[wn].classList.contains('flag') == true ? m++ : null,
            allcells[sw].classList.contains('flag') == true ? m++ : null,
            allcells[s ].classList.contains('flag') == true ? m++ : null,
            allcells[w ].classList.contains('flag') == true ? m++ : null,
            allcells[n ].classList.contains('flag') == true ? m++ : null
        )
        : (
            allcells[n ].classList.contains('flag') == true ? m++ : null,
            allcells[wn].classList.contains('flag') == true ? m++ : null,
            allcells[w ].classList.contains('flag') == true ? m++ : null,
            allcells[sw].classList.contains('flag') == true ? m++ : null,
            allcells[s ].classList.contains('flag') == true ? m++ : null,
            allcells[se].classList.contains('flag') == true ? m++ : null,
            allcells[e ].classList.contains('flag') == true ? m++ : null,
            allcells[ne].classList.contains('flag') == true ? m++ : null
        )

        r_flags = m.toString();

        if (allcells[i].classList.contains('flag') == true){
            return false;
        }
        else if(allcells[i].classList.contains('bomb') == true){
            allcells[i].classList.remove('untaken'); 
            field.classList.add('gameover');
        }
        else if(allcells[i].classList.contains('untaken') == false){
            if(allcells[i].innerHTML == r_flags || allcells[i].innerHTML == ''){
                i == 0 ? (
                    allcells[s ].classList.remove('untaken'), 
                    allcells[se].classList.remove('untaken'), 
                    allcells[e ].classList.remove('untaken')
                )
                : i == 29 ? (
                    allcells[s ].classList.remove('untaken'),
                    allcells[se].classList.remove('untaken'),
                    allcells[e ].classList.remove('untaken')
                )
                : i == 450 ? (
                    allcells[n ].classList.remove('untaken'),
                    allcells[ne].classList.remove('untaken'),
                    allcells[e ].classList.remove('untaken')
                )
                : i == 479 ? (
                    allcells[w ].classList.remove('untaken'),
                    allcells[wn].classList.remove('untaken'),
                    allcells[n ].classList.remove('untaken')
                )
                : i > 0 && i < 30 ? (
                    allcells[s ].classList.remove('untaken'),
                    allcells[se].classList.remove('untaken'),
                    allcells[e ].classList.remove('untaken'),
                    allcells[w ].classList.remove('untaken'),
                    allcells[sw].classList.remove('untaken')
                )
                : i > 450 && i < 479 ? (
                    allcells[e ].classList.remove('untaken'),
                    allcells[ne].classList.remove('untaken'),
                    allcells[wn].classList.remove('untaken'),
                    allcells[w ].classList.remove('untaken'),
                    allcells[n ].classList.remove('untaken')
                )
                : i % 30 == 0 ? (
                    allcells[e ].classList.remove('untaken'),
                    allcells[ne].classList.remove('untaken'),
                    allcells[se].classList.remove('untaken'),
                    allcells[s ].classList.remove('untaken'),
                    allcells[n ].classList.remove('untaken')
                )
                : e % 30 == 0 ? (
                    allcells[wn].classList.remove('untaken'),
                    allcells[sw].classList.remove('untaken'),
                    allcells[s ].classList.remove('untaken'),
                    allcells[w ].classList.remove('untaken'),
                    allcells[n ].classList.remove('untaken')
                )
                : (
                    allcells[n ].classList.remove('untaken'), 
                    allcells[wn].classList.remove('untaken'), 
                    allcells[w ].classList.remove('untaken'), 
                    allcells[sw].classList.remove('untaken'), 
                    allcells[s ].classList.remove('untaken'), 
                    allcells[se].classList.remove('untaken'), 
                    allcells[e ].classList.remove('untaken'), 
                    allcells[ne].classList.remove('untaken')
                )

                let mistake = 0;
                
                i == 0 ? (
                    allcells[s ].classList.contains('flag')== false && allcells[s ].classList.contains('bomb') == true ? mistake++ : null, 
                    allcells[se].classList.contains('flag')== false && allcells[se].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[e ].classList.contains('flag')== false && allcells[e ].classList.contains('bomb') == true ? mistake++ : null
                )
                : i == 29 ? (
                    allcells[s ].classList.contains('flag')== false && allcells[s ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[se].classList.contains('flag')== false && allcells[se].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[e ].classList.contains('flag')== false && allcells[e ].classList.contains('bomb') == true ? mistake++ : null
                )
                : i == 450 ? (
                    allcells[n ].classList.contains('flag')== false && allcells[n ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[ne].classList.contains('flag')== false && allcells[ne].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[e ].classList.contains('flag')== false && allcells[e ].classList.contains('bomb') == true ? mistake++ : null
                )
                : i == 479 ? (
                    allcells[w ].classList.contains('flag')== false && allcells[w ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[wn].classList.contains('flag')== false && allcells[wn].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[n ].classList.contains('flag')== false && allcells[n ].classList.contains('bomb') == true ? mistake++ : null
                )
                : i > 0 && i < 30 ? (
                    allcells[s ].classList.contains('flag')== false && allcells[s ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[se].classList.contains('flag')== false && allcells[se].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[e ].classList.contains('flag')== false && allcells[e ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[w ].classList.contains('flag')== false && allcells[w ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[sw].classList.contains('flag')== false && allcells[sw].classList.contains('bomb') == true ? mistake++ : null
                )
                : i > 450 && i < 479 ? (
                    allcells[e ].classList.contains('flag')== false && allcells[e ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[ne].classList.contains('flag')== false && allcells[ne].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[wn].classList.contains('flag')== false && allcells[wn].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[w ].classList.contains('flag')== false && allcells[w ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[n ].classList.contains('flag')== false && allcells[n ].classList.contains('bomb') == true ? mistake++ : null
                )
                : i % 30 == 0 ? (
                    allcells[e ].classList.contains('flag')== false && allcells[e ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[ne].classList.contains('flag')== false && allcells[ne].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[se].classList.contains('flag')== false && allcells[se].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[s ].classList.contains('flag')== false && allcells[s ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[n ].classList.contains('flag')== false && allcells[n ].classList.contains('bomb') == true ? mistake++ : null
                )
                : e % 30 == 0 ? (
                    allcells[wn].classList.contains('flag')== false && allcells[wn].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[sw].classList.contains('flag')== false && allcells[sw].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[s ].classList.contains('flag')== false && allcells[s ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[w ].classList.contains('flag')== false && allcells[w ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[n ].classList.contains('flag')== false && allcells[n ].classList.contains('bomb') == true ? mistake++ : null
                )
                : (
                    allcells[n ].classList.contains('flag')== false && allcells[n ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[wn].classList.contains('flag')== false && allcells[wn].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[w ].classList.contains('flag')== false && allcells[w ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[sw].classList.contains('flag')== false && allcells[sw].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[s ].classList.contains('flag')== false && allcells[s ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[se].classList.contains('flag')== false && allcells[se].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[e ].classList.contains('flag')== false && allcells[e ].classList.contains('bomb') == true ? mistake++ : null,
                    allcells[ne].classList.contains('flag')== false && allcells[ne].classList.contains('bomb') == true ? mistake++ : null
                )
                mistake>0 ? field.classList.add('gameover') : null;
            }
        }
        else {
            allcells[i].classList.remove('untaken');     
        }
    });
    allcells[i].addEventListener("contextmenu", function() {
        if (allcells[i].classList.contains('flag') == true){
            allcells[i].classList.remove('flag');
            allcells[i].classList.add('untaken');
        }
        else if (allcells[i].classList.contains('untaken') == false){
            return false; 
        }
        else {
            allcells[i].classList.remove('untaken');
            allcells[i].classList.add('flag'); 
        }
    });
}