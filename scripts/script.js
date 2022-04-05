(() => {
    let counter = 40;
    let opacityLevel = 1;
    while(counter)
    {
        let div = document.createElement("div");
        div.style.width = "250px";
        div.style.height = "250px";
        div.style.backgroundColor = "white";
        div.style.opacity = opacityLevel;
        div.className = "divStyleLayout3";

        document.getElementById("dropZone").appendChild(div);

        counter--;
        opacityLevel -= 0.25;
        if(opacityLevel === 0)
            opacityLevel = 1;
    }
  })();

(() => {
    let divChild = document.getElementById("dropZone").children; 
    console.log(divChild);
    for (let i = 0; i < divChild.length; i++) { 
        divChild[i].onclick = function () {
            if(this.style.backgroundColor === "white")                                
                this.style.backgroundColor = "red";
            else
                this.style.backgroundColor ="white";
        }
    }

})();

(() => {
    document.getElementById("btnLayout3").onclick = function() {
        let firstDiv = document.getElementById("dropZone").firstChild;
        if(firstDiv.children.length === 0)
        {
            let pDiv = document.createElement("p");
            pDiv.style.fontSize = "50px";
            pDiv.innerHTML = "Hello";
            pDiv.style.color = "black";
            document.getElementById("dropZone").firstChild.appendChild(pDiv);
            document.getElementById("btnReset").style.visibility = "visible";
        }
        else
        {
            firstP = firstDiv.firstChild;
            let size = parseFloat(firstP.style.fontSize) + 10;
            console.log(size)
            console.log("hello")
            if(size !== 110)
            {
                firstP.style.fontSize = size + 'px';
            } 
            else
            {
                document.getElementById("btnLayout3").style.visibility = "hidden";
            }
        }
    }

})();

(() => {
    document.getElementById("btnReset").onclick = function() {
        console.log("hello");
        if(document.getElementById("btnLayout3").style.visibility === "hidden")
            document.getElementById("btnLayout3").style.visibility = "visible";
        document.getElementById("dropZone").firstChild.firstChild.remove();
        document.getElementById("btnReset").style.visibility = "hidden";

    }
    

})();