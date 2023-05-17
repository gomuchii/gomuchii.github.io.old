
function openComp(comp, num) {


    var compAFermer = document.getElementsByClassName("comp");
    for (let index = 0; index < compAFermer.length; index++) {
        compAFermer[index].style.display = "none"
    }

    document.getElementById(comp).style.display = "flex";

    var btn = document.getElementsByClassName("btnNav");
    for (let i = 0; i < btn.length; i++) {
        if(btn[i].id == num)
        {
            btn[i].style.color = "white";
            btn[i].style.background = "black";
            btn[i].style.borderRadius = "20px";
        }
        else
        {
            btn[i].style.color = "black";
            btn[i].style.background = "white";
            btn[i].style.borderRadius = "0px";
            // btn[i].style.margin = "0px";
            
        }
    }
    document.location.href='#nav'
}

var barre = document.getElementsByClassName("barreComp");
for (let i = 0; i < barre.length; i++) {
    barre[i].style.width = "100px"
    barre[i].addEventListener("mouseout", function(event)
    {
        var enfants = barre[i].children;
        enfants[0].style.display = "block";
        enfants[1].style.display = "none";
        barre[i].style.width = "80px"
    });
    barre[i].addEventListener("mouseover", function(event)
    {
        var enfants = barre[i].children;
        enfants[0].style.display = "none";
        enfants[1].style.display = "inline";
        barre[i].style.width = "150px";
    });
    

    
}


// function openForm(lapop) {
//     var pop = document.getElementsByClassName("popeur");
//     for (var index = 0; index < pop.length; index++) {
//         pop[index].style.display = "none";
//     }
    
//     document.getElementById(lapop).style.display = "flex";
//     // var pop = document.getElementsByClassName("popupForm");
//     // for (var index = 0; index < pop.length; index++) {
//     //     pop[index].style.display = "flex";
//     // }
// }

// document.getElementById("bo").addEventListener("keydown", function(event){
//     if(event.code == "Escape")
//     {
//         closeForm();
//     }
// });



// function closeForm() {
//     var pop = document.getElementsByClassName("popeur");
//     for (var index = 0; index < pop.length; index++) {
//         pop[index].style.display = "none";
//     }
// }

// function derouleComp()
// {
    
// }