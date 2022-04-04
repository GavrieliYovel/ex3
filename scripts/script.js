(() => {
    let counter = 8;
    let opacityLevel = 1;
    while(counter)
    {
        let div = document.createElement("div");
        div.style.width = "250px";
        div.style.height = "250px";
        div.style.backgroundColor = "black";
        div.style.opacity = opacityLevel;
        div.className = 'divStyleLayout3';

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
            if(this.style.backgroundColor === "black")                                
                this.style.backgroundColor = "red";
            else
                this.style.backgroundColor ="black";
        }
    }

})();

(() => {
    document.getElementById("btnLayout3").onclick = function() {
        let firstDiv = document.getElementById("dropZone").firstChild;
        if(firstDiv.children.length === 0)
        {
            let pDiv = document.createElement("p");
            pDiv.style.font = "50px";
            pDiv.innerHTML = "Hello";
            pDiv.style.color = "white";
            document.getElementById("dropZone").firstChild.appendChild(pDiv);
            let btn = document.createElement("button");
            btn.style.width = "86px";
            btn.style.height = "86px";
            btn.style.background = "none";
            btn.style.border = "none";
            btn.innerHTML = "reset"
            btn.style.fontSize = "40px";
            btn.style.color = "white";
            document.getElementById("btnContainer").appendChild(btn);
        }
        // if(firstDiv.style.width !== "500px" )
        // {
        //     firstDiv.style.width += 25;
        //     firstDiv.style.height += 25;
        // }
        // else
        // {

            
        // }
        console.log(firstDiv.children.length);

    }

})();

