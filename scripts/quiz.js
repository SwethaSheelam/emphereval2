let form=document.getElementById("form");
form.addEventListener("submit",function(){
    event.preventDefault()
    //console.log("clicked")
    let problemStatement=form.problem.value;
    let optnA=form.optnA.Value;
    let optnB=form.optnB.value;
    let optnC=form.optnC.value;
    let optnD=form.optnD.value;
    console.log(problemStatement,optnA,optnB,optnC,optnD)
})