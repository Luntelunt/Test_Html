 const demo = document.getElementById("demo");
 
window.addEventListener("message", function (event){
    const data = event.data;

    console.log("Yum", data);


    if (data === "BS=NEAR")
    {
        //this.document.body.style.background = "#df6b6b11";
        demo.textContent = "NEAAAR"

    }
    else if (data === "BS=FAR")
    {
        this.document.body.style.background = "#80c8d111";
    }
    else if (data === "BS=IDLE")
    {
        this.document.body.style.background = "#9ed18011";
    }


})



// const listen = document.getElementById("inTest");

// listen.addEventListener("input", function (event)
// {
//     console.log("Input:", event.target.value);
//     demo.textContent = event.target.value;
// });

// listen.addEventListener("keydown", function (event)
// {
//     if (event.code === "Enter")
//     {
//         demo.textContent = "Enter was pressed!";
//         console.log("Enter virker");
//     }
// })

window.addEventListener("keydown", function (event)
{
    if (event.code === "Enter")
    {
        demo.textContent = "Enter was pressed!";
        console.log("Enter virker");
    }
})
