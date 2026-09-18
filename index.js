 const demo = document.getElementById("demo");



window.addEventListener("message", function (event){
    const data = event.data;
    const consoleOutput = document.getElementById("consoleOutput");

    consoleOutput.textContent = `Received: ${data}`;
    console.log("Message Received", data);
    


    if (data === "BS=NEAR")
    {
        //this.document.body.style.background = "#df6b6b11";
        demo.innerHTML = "NEAAAR"

    }
    else if (data === "BS=FAR")
    {
        this.document.body.style.background = "#80c8d111";
        demo.innerHTML = "FAAR"
    }
    else if (data === "BS=IDLE")
    {
        this.document.body.style.background = "#9ed18011";
        demo.innerHTML = "IDLE"
    }


})


window.addEventListener("keydown", function (event)
{
    if (event.code === "Enter")
    {
        demo.innerHTML = "Enter was pressed!";
        console.log("Enter virker");
    }
})
