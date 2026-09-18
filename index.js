
window.addEventListener("message", function (event){
    const data = event.data;
    console.log("Yum", data);

    if (data === "BS=NEAR")
    {
        this.document.body.style.background = "#df6b6b11";

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