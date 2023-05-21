

window.addEventListener("scroll", function(){
    console.log(this.window.scrollY);
	if(this.window.scrollY > 200){
 
		this.document.getElementById("header").style.background = "rgba(0, 0, 0, 0.5)";
        enfants = this.document.getElementById("header").children;
        for (const i of enfants) {
            i.style.transition = "0.5s";
            i.style.left = "70%";
            i.style.top = "auto"
            i.style.flexDirection = "row";
            i.style.margin = "0";
        }
	}
	else{
 
		this.document.getElementById("header").style.background = "rgba(0, 0, 0, 0)";
        enfants = this.document.getElementById("header").children;
        for (const i of enfants) {
            i.style.transition = "0.5s";
            i.style.left = "0%";
            i.style.top = "0%";
            i.style.flexDirection = "column";
            i.style.margin = "10px 0 0 10px";
        }
	}
}, false);

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
            btn[i].style.borderRadius = "100px";
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
// document.getElementById("Front-end").addEventListener("mouseover", function(event)
// {
//     enfants = event.target.children;
//     enfants[0].style.display = "block";
//     enfants[2].style.display = "block";
// });





document.getElementById("imgFront").addEventListener("mouseover", function(event)
{
    // event.target.parentNode.style.background = "orange";
    var enfants = event.target.parentNode.children;
    // enfants[0].style.color = "white";
    // enfants[2].style.color = "white";
    enfants[0].style.transition = "0.5s";
    enfants[0].style.transform = "translate(0%)";
    enfants[2].style.transition = "0.5s";
    enfants[2].style.transform = "translate(0%)";
    // setTimeout(2000);
    //  event.target.parentNode.style.background = "orange";
    // for (let i of enfants[0].children) {
    //     for (let j of i.children) {
    //         j.style.color = "black";
    //     }
    // }
});
document.getElementById("imgFront").addEventListener("mouseout", function(event)
{
    // event.target.parentNode.style.background = "green";
    var enfants = event.target.parentNode.children;
    // enfants[0].style.color = "white";
    // enfants[2].style.color = "white";
    enfants[0].style.transition = "0.5s";
    enfants[0].style.transform = "translate(150%) scale(0.3)";
    enfants[2].style.transition = "0.5s";
    enfants[2].style.transform = "translate(-150%) scale(0.3)";
    // enfants[0].style.transform = "scale(0.5)";
    // sleep(20);
    //  event.target.parentNode.style.background = "green";
    
    // for (let i of enfants[0].children) {
    //     for (let j of i.children) {
    //         j.style.color = "white";
    //     }
    // }
});

document.getElementById("imgBack").addEventListener("mouseover", function(event)
{
    var enfants = event.target.parentNode.children;
    enfants[0].style.transition = "0.5s";
    enfants[0].style.transform = "translate(0%)";
    enfants[2].style.transition = "0.5s";
    enfants[2].style.transform = "translate(0%)";
});
document.getElementById("imgBack").addEventListener("mouseout", function(event)
{
    var enfants = event.target.parentNode.children;
    enfants[0].style.transition = "0.5s";
    enfants[0].style.transform = "translate(150%) scale(0.3)";
    enfants[2].style.transition = "0.5s";
    enfants[2].style.transform = "translate(-150%) scale(0.3)";
    
});

document.getElementById("imgSys").addEventListener("mouseover", function(event)
{
    var enfants = event.target.parentNode.children;
    enfants[0].style.transition = "0.5s";
    enfants[0].style.transform = "translate(0%)";
    enfants[2].style.transition = "0.5s";
    enfants[2].style.transform = "translate(0%)";
});
document.getElementById("imgSys").addEventListener("mouseout", function(event)
{
    var enfants = event.target.parentNode.children;
    enfants[0].style.transition = "0.5s";
    enfants[0].style.transform = "translate(150%) scale(0.3)";
    enfants[2].style.transition = "0.5s";
    enfants[2].style.transform = "translate(-150%) scale(0.3)";
    
});



// var barre = document.getElementsByClassName("barreComp");
// for (let i = 0; i < barre.length; i++) {
//     barre[i].addEventListener("mouseout", function(event)
//     {
//         var enfants = barre[i].children;
//         enfants[0].style.display = "block";
//         enfants[1].style.display = "none";
//         barre[i].style.width = "25%"
//         enfants[1].style.color = "black";
//     });
//     barre[i].addEventListener("mouseover", function(event)
//     {
//         var enfants = barre[i].children;
//         enfants[0].style.display = "none";
//         enfants[1].style.display = "inline";
//         barre[i].style.width = "35%";
//         enfants[1].style.color = "var(--charte2_4)";
//     });
    

    
// }


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