/*************************screen clicks***************************************** */

var numButton = document.querySelectorAll(".key").length;
for(var i=0; i<numButton; i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML) ;
        
    } )
}

/***********************************keyboard**************************** */

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
})

/*********************************function********************************/
function makeSound(key) {
    switch (key) {
        case "q":
            var key1 = new Audio("keys/key01.ogg");
            key1.play();
            break;
        case "w":
            var key2 = new Audio("keys/key02.ogg");
            key2.play();
            break;
        case "e":
            var key3 = new Audio("keys/key03.ogg");
            key3.play();
            break;
        case "r":
            var key4 = new Audio("keys/key04.ogg");
            key4.play();
            break;
        case "t":
            var key5 = new Audio("keys/key05.ogg");
            key5.play();
            break;
        case "y":
            var key6 = new Audio("keys/key06.ogg");
            key6.play();
            break;
        case "u":
            var key7 = new Audio("keys/key07.ogg");
            key7.play();
            break;
        case "i":
            var key8 = new Audio("keys/key08.ogg");
            key8.play();
            break;
        case "o":
            var key9 = new Audio("keys/key09.ogg");
            key9.play();
            break;
        case "p":
            var key10 = new Audio("keys/key10.ogg");
            key10.play();
            break;
        case "a":
            var key11 = new Audio("keys/key11.ogg");
            key11.play();
            break;
        case "s":
            var key12 = new Audio("keys/key12.ogg");
            key12.play();
            break;
        case "d":
            var key13 = new Audio("keys/key13.ogg");
            key13.play();
            break;
        case "f":
            var key14 = new Audio("keys/key14.ogg");
            key14.play();
            break;
        case "g":
            var key15 = new Audio("keys/key15.ogg");
            key15.play();
            break;
        case "h":
            var key16 = new Audio("keys/key16.ogg");
            key16.play();
            break;
        case "j":
            var key17 = new Audio("keys/key17.ogg");
            key17.play();
            break;
        case "k":
            var key18 = new Audio("keys/key18.ogg");
            key18.play();
            break;
        case "l":
            var key19 = new Audio("keys/key19.ogg");
            key19.play();
            break;
        case "z":
            var key20 = new Audio("keys/key20.ogg");
            key20.play();
            break;
        case "x":
            var key21 = new Audio("keys/key21.ogg");
            key21.play();
            break;
        case "c":
            var key22 = new Audio("keys/key22.ogg");
            key22.play();
            break;
        case "v":
            var key23 = new Audio("keys/key23.ogg");
            key23.play();
            break;
        case "b":
            var key24 = new Audio("keys/key24.ogg");
            key24.play();
            break;

    
        default:
            console.log(buttoninnerhtml);
            break;
    }
    
}