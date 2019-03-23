let needTrans = 0;
let needTransBf = 0;


// register events
jQuery(document).ready(driveTransImage);
$(window).on('DOMNodeInserted', driveTransImage);

// loop forever with an interval after each loop
loop();


/**
 * Prepare for and drive transImage().
 * Set cover on the webpage and increment needTrans to drive transImage(). 
 */
function driveTransImage(){
    console.log("[driveTransImage]");
    coverOn();
    needTrans++;
}


/**
 * Loop forever with an interval after each loop.
 * Each loop surely starts AFTER the previos loop finishes (never overlap).
 */
function loop(){
    console.log("(loop)");
    console.log("  needTrans = " + needTrans);
    console.log("  needTransBf = " + needTransBf);
    if(needTrans > 0 && needTrans == needTransBf){
        condTransImage(needTrans);
    }else{
        needTransBf = needTrans;
    }
    setTimeout(loop, 5000); // TODO 5000 is kari
}

function condTransImage(needTransIni){
    console.log("[condTransImage]");
    $.when(
        transImageRecur()
    ).done(function(){
        console.log("[condTransImage] done");
        needTrans = needTrans - needTransIni; // TODO atomic??
        if(needTrans == 0){
            needTransBf = 0;
            coverOff();
        }else{
            condTransImage(needTrans);
        }
    });
}


/**
 * Set cover on the webpage if it's not covered yet.
 */
function coverOn(){
    console.log("<coverOn>");
    
    // TODO
}

/**
 * Remove cover on the webpage.
 */
function coverOff(){
    console.log("<coverOff>");
    
    // TODO
}


/**
 * Trans images in the webpage into TODO
 * Also watch contents in iframes recursively.
 *
 */
function transImageRecur(){
    console.log("<transImageRecur>");
    
    // TODO
}

/**
 * Trans images in the webpage into TODO
 * Just watch html (not in iframes).
 *
 */
function transImageInHtml(){
    console.log("<<transImageInHtml>>");
    
    // TODO
}
