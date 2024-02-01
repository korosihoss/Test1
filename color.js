const colorData = ["black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

colorDataAtRandom =     colorData[Math.floor(Math.random() * colorData.length)];

//Capping the first letter of every color name
let slicedLetter = colorDataAtRandom.slice(0,1 );
let cappedSlicedLetter = slicedLetter.toUpperCase();
let colorAtRandom = cappedSlicedLetter + colorDataAtRandom.slice(1 );


let body = document.querySelector("body");
body.style.backgroundColor = colorAtRandom;


//Get the Dom
let colorId = document.getElementById("colorId");

//Checks if body is true to change background onload

colorId.innerHTML = "Color Name|| "+ colorAtRandom;

function initializeRandom(){
    let loadingIconCon = document.getElementById("loading-icon-con");
    loadingIconCon.style.display = "block";
    setTimeout(randomize, 850);
}

//randomize colors onclick 
function randomize(){
    let loadingIcon = document.getElementById("loading-icon");
    let loadingIconCon = document.getElementById("loading-icon-con");

loadingIconCon.style.display = "none";
colorDataAtRandom = colorData[Math.floor(Math.random() * colorData.length)];

//Capping the first letter of every color name
let slicedLetter = colorDataAtRandom.slice(0,1 ).toUpperCase();
let colorAtRandom = slicedLetter + colorDataAtRandom.slice(1);

body.style.backgroundColor = colorAtRandom;
colorId.innerHTML = "Color Name|| " + colorAtRandom;
let userInput = document.getElementById("input-field");
    userInput.value = colorAtRandom;
}


function initializeGenerator(){   document.getElementById("loading-icon-con").style.display = "block";
    setTimeout(generateColor, 850);  
}    




function generateColor(){
    let userInput = document.getElementById("input-field"); 
    
    let loadingIconCon = document.getElementById("loading-icon-con");
      loadingIconCon.style.display = "none";
      
    for(i = 0; i < colorData.length; i++){
        let regex1 =  /(\s+)/gi;
        let regex2 =  /(\s)/gi;
        let frmUser = userInput.value.trim().toLowerCase()
    .replace(regex1, "")
    .replace(regex2, "");
      
        if(frmUser === colorData[i]){
            let firstL = frmUser.slice(0,1).toUpperCase();
            let cappedfrmUser = firstL + frmUser.slice(1);
            colorId.innerHTML = "Color Name|| " + cappedfrmUser;
            body.style.backgroundColor = cappedfrmUser;  
            break;
            
        }else if(frmUser.length < 1){
            colorId.innerHTML = `<span style='color: red;'>Enter a valid color Name</span>`;
            break;
            
        }
     colorId.innerHTML = `<span style='color: red;'><span style='text-transform: capitalize'>${frmUser}</span> is not a valid color Name</span>`;
    }
  userInput.value = "";
}

// preventing default in the generating button
let generateBnt = document.getElementById("generateBtn");
if(generateBnt){addEventListener("click", (event) => {
    event.preventDefault();
})};

