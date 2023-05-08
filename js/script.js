function openComp(comp, num) {
    document.getElementById("comp1").style.display = "none";
    document.getElementById("btnNav1").style.background = "var(--charte1_1)";
    document.getElementById("btnNav1").style.color = "black"

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
        }
        else
        {
            btn[i].style.color = "black";
            btn[i].style.background = "var(--charte1_1)";
        }
    }
}

function openForm(lapop) {
    var pop = document.getElementsByClassName("popupForm");
    for (var index = 0; index < pop.length; index++) {
        pop[index].style.display = "none";
    }
    
    document.getElementById(lapop).style.display = "flex";
    // var pop = document.getElementsByClassName("popupForm");
    // for (var index = 0; index < pop.length; index++) {
    //     pop[index].style.display = "flex";
    // }
}

function closeForm() {
    var pop = document.getElementsByClassName("popupForm");
    for (var index = 0; index < pop.length; index++) {
        pop[index].style.display = "none";
    }
}