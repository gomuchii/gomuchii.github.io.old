function openComp(comp, num) {
    document.getElementById("compVide").style.display = "none";
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

function openForm() {
    var pop = document.getElementsByClassName("popupForm");
    for (var index = 0; index < pop.length; index++) {
        pop[index].style.display = "flex";
    }
}

function closeForm() {
    var pop = document.getElementsByClassName("popupForm");
    for (var index = 0; index < pop.length; index++) {
        pop[index].style.display = "none";
    }
}