//---------------------------------------------------------------------------------------------------------------------Checks if jquery loaded

if (window.jQuery) {  



//---------------------------------------------------------------------------------------------------------------------Console.logs the changes

console.log("%cAdded Functions:", "color: blue;font-size:15px; font-weight: bold;","\n- Arrow keys to navigate.\n"+
"- Shortcuts menu.\n"+
"- Copy and paste events(the time cannot be copied for me.)\n"+
"- \"My actions\" automatically removes unwanted notifications or allowes other users to modify the calender."); 




//---------------------------------------------------------------------------------------------------------------------Checks if the function is already running

if (typeof runOnce == "undefined") { 
var runOnce = true;


//---------------------------------------------------------------------------------------------------------------------Added non-function variables


var runFunctions = function(){
var title = "",
    where = "",
    discription = "",
    countChildren = 0,
    colorChange = 0,
    time1 = "",
    time2 = "",
    allDay = false,
    addTo = "",
    colorChosen = 0,
    valueData = "",
    outcome = [],
    options = [];



//---------------------------------------------------------------------------------------------------------------------function used to paste event data

var pasteData = function() {
    $(".cb-actions").children()[2].click();
    setTimeout(function() {
        $($(".ui-sch")[4]).children().val(discription);
        $($(".to-select")[colorChange]).click();
        $($(".ui-sch")[2]).children().val(where);
        $(".rm-remove ").click();
        $($(".ep-go-for").children()[0]).click();



//---------------------------------------------------------------------------------------------------------------------if it isn't an all day event, un-check the all day check-box and add times. *(not working correctly) 
  
     if (!allDay) {

            $($(".checkbox")[0]).click();
            $($(".dr-time")[0]).val(time1);
            $($(".dr-time")[1]).val(time2);
        }
    }, 100);




//---------------------------------------------------------------------------------------------------------------------Clicks save.
  
  setTimeout(function() {
        $($(".ep-ea").children()[2]).children().click();
    }, 500);
};



//---------------------------------------------------------------------------------------------------------------------Copies event data for pasting

var getData = function() {



//---------------------------------------------------------------------------------------------------------------------Checks if it is all day event
  
  if ($($(":checkbox ")[0]).is(":checked")) {
        allDay = true;
    } else {
        allDay = false;
    }

    title = $(".ep-title").children().val();
    where = $($(".ui-sch")[2]).children().val();
    discription = $($(".ui-sch")[4]).children().val();
    countChildren = 0;
    colorChange = 0;
    time1 = $($(".dr-time")[0]).val();
    time2 = $($(".dr-time")[1]).val();



//---------------------------------------------------------------------------------------------------------------------Checks what color is selected for the event    

checkColor = function() {
        $(".to-select").each(function(e) {
            countChildren++;
            if (this.className == "to-select bcp-selected") colorChange = countChildren - 1;
        });
        console.log(colorChange);
    }();




//---------------------------------------------------------------------------------------------------------------------Clicks "Disguard changes" button.
  
  setTimeout(function() {
        $($(".goog-imageless-button-content")[12]).click()
    }, 50);
};




//---------------------------------------------------------------------------------------------------------------------Adds "My actions" tab on the left hand side.

$("#nav").append('<h3 class ="calHeader goog-zippy-header goog-zippy-collapsed" style= "margin-top:5px; margin-bottom:5px" ><span class="zippy-arrow"></span> My actions</h3><div id="actionsContainer" class = "hidden"><input id="modEvent" type="checkbox" >Modify event</input><br><input id="RemoveAlerts" type="checkbox" >Remove alerts</input></div>');



//---------------------------------------------------------------------------------------------------------------------Continually checks if action bttons have been clicked.

setInterval(function(){

if($(".bubblemain").is(":visible")===true && $("#shortcuts-menu").hasClass("visible")){
$("#shortcuts-menu").removeClass("visible").addClass("hidden")
$(".hidden").css({
"display" : "none"
})
}
if ($("#RemoveAlerts").is(":checked") === true) {
 $(".rm-remove ").click();}

            if ($($(".ep-go-for").children()[0]).children().is(":checked") === false && $("#modEvent").is(":checked") === true) {
                $($(".ep-go-for").children()[0]).click();
            }

},50);




//---------------------------------------------------------------------------------------------------------------------Opens and closes buttons when clicked (css stuff)

$(".calHeader").on("click",function(){
if ($(this).hasClass("goog-zippy-collapsed")){$(this).removeClass("goog-zippy-collapsed").addClass("goog-zippy-expanded");
$("#actionsContainer").removeClass("hidden").addClass("visible"); $(".visible").css({"display":"block"})}
else if ($(this).hasClass("goog-zippy-expanded")){$(this).removeClass("goog-zippy-expanded").addClass("goog-zippy-collapsed");
$("#actionsContainer").removeClass("visible").addClass("hidden"); $(".hidden").css({"display":"none"})}})
$(".hidden").css({"display":"none"})



//---------------------------------------------------------------------------------------------------------------------Checks if roght or left arrow keys are pressed.

$(document).keydown(function(e) {
    switch (e.keyCode) {
        case 37:
            nav(".navBack");
            break;
        case 39:
            nav(".navForward");
            break;
        default:
    }
});




//---------------------------------------------------------------------------------------------------------------------Clickes nav arrows buttons on top

var nav = function(e) {
    $(e).click();
};



//---------------------------------------------------------------------------------------------------------------------Css stuff for the copy and paste buttons

$(document).mouseup(function() {
    setTimeout(function() {
        if (typeof $(".paste, .copy")[0] == "undefined") {
            $(".cb-actions").append("<div style='width: 15px; position: relative; float: right;' class='goog-imageless-button paste'>Paste</div>");
            $(".eb-actions-right").prepend("<div style='width: 15px; position: relative; float: right;' class='goog-imageless-button copy'>Copy</div>");
        }
        $(".paste, .copy").on("mousedown", function() {
            $(".paste, .copy").addClass("goog-imageless-button-focused goog-imageless-button-focused");
        });
        $(".paste, .copy").on("mouseup", function() {
            $(".paste, .copy").removeClass("goog-imageless-button-focused goog-imageless-button-focused");
        });
        $(".paste, .copy").on("mouseover", function() {
            $(".paste, .copy").addClass("goog-imageless-button-hover");
        });
        $(".paste, .copy").on("mouseout", function() {
            $(".paste, .copy").removeClass("goog-imageless-button-hover");
        });



//---------------------------------------------------------------------------------------------------------------------if paste button is clicked run paste function, if copy button is clicked run the copy function

        $(".paste").click(function() {
            $(".cb-event-title-input").val(title);
            pasteData();
        });
        $(".copy").click(function() {
            $(".eb-actions-right").children()[1].click();
            setTimeout(function() {
                getData();
            }, 500);
        });
    }, 50);
});



//---------------------------------------------------------------------------------------------------------------------Applies shortcut values

var checkValues = function(pushed) {

    for (i = 0; i < 9; i++) {

        if ($($(".keybind")[i]).val() == pushed) {
            addTo = $($(".addsTo")[i]).val();
            valueData = $($(".valueData")[i]).val();

            if (addTo == "Title") {
                $(".textbox-fill-mid").children().val($(".textbox-fill-mid").children().val() + valueData + " ");
                $($(".ui-sch")[0]).children().val(valueData + " ");


                $($(".to-select")[colorChosen]).click()

            }
            if (addTo == "Location") {
                $($(".ui-sch")[2]).children().val(valueData);
                $($(".to-select")[colorChosen]).click()
            }
            if (addTo == "Discription") {
                $($(".ui-sch")[4]).children().val($($(".ui-sch")[4]).children().val() + valueData);
                $($(".to-select")[colorChosen]).click()
            }
        }

    }

};



//---------------------------------------------------------------------------------------------------------------------This is used to check all the possible key comboes used in the shortcuts.

var colorPicked = function(number) {
    colorChosen = number;
}; //colorespicked
var alph = " ACDEFGHIJKLMNOPQRSUVWXYZ";
var keyA = 65,
    keyB = 66,
    keyC = 67,
    keyD = 68,
    keyE = 69,
    keyF = 70,
    keyG = 71,
    keyH = 72,
    keyI = 73,
    keyJ = 74,
    keyK = 75,
    keyL = 76,
    keyM = 77,
    keyN = 78,
    keyO = 79,
    keyP = 80,
    keyQ = 81,
    keyR = 82,
    keyS = 83,
    keyT = 84,
    keyU = 85,
    keyV = 86,
    keyW = 87,
    keyX = 88,
    keyY = 89,
    keyZ = 90;



//---------------------------------------------------------------------------------------------------------------------adds all the letters for shortuts

for (i = 0; i < alph.length; i++) { outcome.push("<option>" + alph[i] + "</option>");}
options = (outcome.toString().replace(/,/g, ""));



//--------------------------------------------------------------------------------------------------------------------- Adds shortcuts Menu item and shortucts panel

$("#nav").append("<h2 style ='padding-left: 15px;' class='calHeader goog-zippy-header shortcuts'><span>Shortcuts</span><span id='shotcutsMenu'  class='clstMenu' ></span></h2>");
$('body').append("<div id = 'shortcuts-menu' class='goog-menu goog-menu-vertical hidden' style='padding-left: 10px; position: fixed;top: 458px;left: 188px;width: 400px;height: 200px'></div>");



//---------------------------------------------------------------------------------------------------------------------Css stuff for shortcuts button

$(document).on("mousemove", function() {
    $("#shortcuts-menu").css({
        "top": $(".shortcuts").position().top - 80
    });
});
$(".goog-menuitem").hover(function() {
    $(this).on("mouseleave", function() {
        $(this).removeClass("goog-menuitem-highlight");
    });
    $(this).addClass("goog-menuitem-highlight");




});



//---------------------------------------------------------------------------------------------------------------------Adds 10 keybinding options

for (i = 0; i < 9; i++) {
    $("#shortcuts-menu").append("<div>Shift+Alt+<select class='keybind'>" + outcome + "</select> at <select class='addsTo'><option></option><option>Title</option><option>Location</option><option>Discription</option></select><input value='' style = 'width: 170px;'class='textbox-fill-input to-disable label-input-label valueData'></input><div class = 'clickColor eb-rb-color goog-inline-block' style='background-color: #a4bdfc; border-color:#a4bdfc; margin-left: 4px;'></div></div>");
}
$(".hidden").css({
    "display": "none"
});




//---------------------------------------------------------------------------------------------------------------------css stuff for shortcuts menu

$(".shortcuts").on("click", function() {
    if ($("#shortcuts-menu").hasClass("hidden")) {
        $("#shortcuts-menu").removeClass("hidden");
        $("#shortcuts-menu").addClass("visible");
        $(".visible").css({
            "display": "block"
        });
    } else {
        $("#shortcuts-menu").removeClass("visible");
        $("#shortcuts-menu").addClass("hidden");
        $(".hidden").css({
            "display": "none"
        });
    }
});



//---------------------------------------------------------------------------------------------------------------------Shortcut key combo listener

$(document).on("keyup.poop", function(e) {
    e.preventDefault();


    d = e.shiftKey && e.altKey && e.keyCode;
    switch (d) {
        case keyA:
            e.preventDefault();
            checkValues("A");
            break;
        case keyB:
            e.preventDefault();
            checkValues("B");
            break;
        case keyC:
            e.preventDefault();
            checkValues("C");
            break;
        case keyD:
            e.preventDefault();
            checkValues("D");
            break;
        case keyE:
            e.preventDefault();
            checkValues("E");
            break;
        case keyF:
            e.preventDefault();
            checkValues("F");
            break;
        case keyG:
            e.preventDefault();
            checkValues("G");
            break;
        case keyH:
            e.preventDefault();

            checkValues("H");
            break;
        case keyI:
            e.preventDefault();
            checkValues("I");
            break;
        case keyJ:
            e.preventDefault();
            checkValues("J");
            break;
        case keyK:
            e.preventDefault();
            checkValues("K");
            break;
        case keyL:
            e.preventDefault();
            checkValues("L");
            break;
        case keyM:
            e.preventDefault();
            checkValues("M");
            break;
        case keyN:
            e.preventDefault();
            checkValues("N");
            break;
        case keyO:
            e.preventDefault();
            checkValues("O");
            break;
        case keyP:
            e.preventDefault();
            checkValues("P");
            break;
        case keyQ:
            e.preventDefault();
            checkValues("Q");
            break;
        case keyR:
            e.preventDefault();
            checkValues("R");
            break;
        case keyS:
            e.preventDefault();
            checkValues("S");
            break;
        case keyT:
            e.preventDefault();
            checkValues("T");
            break;
        case keyU:
            e.preventDefault();
            checkValues("U");
            break;
        case keyV:
            e.preventDefault();
            checkValues("V");
            break;
        case keyW:
            e.preventDefault();
            checkValues("W");
            break;
        case keyX:
            e.preventDefault();
            checkValues("X");
            break;
        case keyY:
            e.preventDefault();
            checkValues("Y");
            break;
        case keyZ:
            e.preventDefault();
            checkValues("Z");
            break;
        default:
    }
});



//---------------------------------------------------------------------------------------------------------------------Adds the colorBox to the end of the key combos

$('body').append('<div id=eventColorPopup class="eb-popup shortcutColor" style=visibility:visible;left:23px;top:32px><div class=ecp role=radiogroup> <div class=ecp-label> <label>Choose an event color:</label> </div> <div class="ecp-rb-default goog-inline-block" style=background-color:#9A9CFF;border-color:#373AD7 title=none tabindex=0 role=radio> <div class=" bcp-selected"></div> </div> <div class=hdn>none</div> <div class="ecp-dt-hr goog-inline-block"></div> <div class="ecp-rb-color goog-inline-block" style=background-color:#5484ed;border-color:#5484ed title="bold blue" role=radio> <div class=></div> </div> <div class=hdn>bold blue</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#a4bdfc;border-color:#a4bdfc title=blue role=radio> <div class=></div> </div> <div class=hdn>blue</div> <div class="ecp-rb-color goog-inline-block" style=border-color:#46d6db;background-color:#46d6db title=turquoise role=radio> <div class=></div> </div> <div class=hdn>turquoise</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#7ae7bf;border-color:#7ae7bf title=green role=radio> <div class=></div> </div> <div class=hdn>green</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#51b749;border-color:#51b749 title="bold green" role=radio> <div class=></div> </div> <div class=hdn>bold green</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#fbd75b;border-color:#fbd75b title=yellow role=radio> <div class=></div> </div> <div class=hdn>yellow</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#ffb878;border-color:#ffb878 title=orange role=radio> <div class=></div> </div> <div class=hdn>orange</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#ff887c;border-color:#ff887c title=red role=radio> <div class=></div> </div> <div class=hdn>red</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#dc2127;border-color:#dc2127 title="bold red" role=radio> <div class=></div> </div> <div class=hdn>bold red</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#dbadff;border-color:#dbadff title=purple role=radio> <div class=></div> </div> <div class=hdn>purple</div> <div class="ecp-rb-color goog-inline-block" style=background-color:#e1e1e1;border-color:#e1e1e1 title=gray role=radio> <div class=></div> </div> <div class=hdn>gray</div> </div> </div>')



//---------------------------------------------------------------------------------------------------------------------Css stuff for shortcut color box

$(".shortcutColor").addClass("hidden");
$(".hidden").css({
    "display": "none"
})

$(".clickColor").on("click", function() {

    var clickColor = $(this)
    $(".shortcutColor").css({
        "display": "block",
        "top": clickColor.position().top + 260,
        "left": clickColor.position().left + 210,
    });

    $(".ecp-rb-color").on("click", function() {

        clickColor.css({
            "background-color": $(this).css('backgroundColor')
        })
        switch ($(this).css('backgroundColor')) {
            case "rgb(84, 132, 237)":
                colorPicked(1)
                break;
            case "rgb(164, 189, 252)":
                colorPicked(2)
                break;
            case "rgb(70, 214, 219)":
                colorPicked(3)
                break;
            case "rgb(122, 231, 191)":
                colorPicked(4)
                break;
            case "rgb(81, 183, 73)":
                colorPicked(5)
                break;
            case "rgb(251, 215, 91)":
                colorPicked(6)
                break;
            case "rgb(255, 184, 120)":
                colorPicked(7)
                break;
            case "rgb(255, 136, 124)":
                colorPicked(8)
                break;
            case "rgb(220, 33, 39)":
                colorPicked(9)
                break;
            case "rgb(219, 173, 255)":
                colorPicked(10)
                break;
            case "rgb(225, 225, 225)":
                colorPicked(11)
                break;

        } //switch

        $(".shortcutColor").css({
            "display": "none"
        })
    })

})


//---------------------------------------------------------------------------------------------------------------------



}();
}
} else {
script = document.createElement("script");script.src = "https://code.jquery.com/jquery-1.10.2.min.js";document.head.appendChild(script);
    alert("jQuery should now be loaded please run this script again to apply the new functions.")
}


