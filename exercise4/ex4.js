document.addEventListener("DOMContentLoaded", ()=>{
    var tag = document.getElementById("target");
    var t11 = document.getElementById("text11");
    var t12 = document.getElementById("text12");
    var t13 = document.getElementById("text13");
    var t14 = document.getElementById("text14");
    var t21 = document.getElementById("text21");
    var t22 = document.getElementById("text22");
    var t23 = document.getElementById("text23");
    var t = [
        t11,t12,t13,t14,t21,t22,t23
    ];
    var tf = [
        tf1(), tf1(), tf1(), tf2(), tf3(), tf3(), tf3()
    ];
    
    function tf1(){//update borderColor on keypress in those regions
        tag.style.borderColor = ts1();
    }
    
    function ts1(){//turn the text box entrys into a valid string
        return ("rgb("+t11.value+", "+t12.value+", "+t13.value+")");
    }
    
    function tf2(){
        //console.log("test2");
        tag.style.borderWidth = t14.value+"px";
    }
    
    function tf3(){
        tag.style.backgroundColor = ts2();
    }
    
    function ts2(){
        return ("rgb("+t21.value+", "+t22.value+", "+t23.value+")");
    }
    function update(){
        console.log("test");
        tf1();
        tf2();
        tf3();
    }

    window.setInterval(update, 250);
    
    //document.getElementById("target").style.backgroundColor = "rgb(255, 0, 0)";
})


