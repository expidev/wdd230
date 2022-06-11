function record(){
	const input = document.querySelector("#favchap").value;
	if (input){
	const liElt = document.createElement("li");
	const node = document.createTextNode(input);
	const delButton = document.createElement("button");
	const node1 = document.createTextNode("X");
	delButton.appendChild(node1);
	let a = function() {
        liElt.remove();
    }
    delButton.addEventListener("click", a);
	liElt.appendChild(node);
	liElt.appendChild(delButton);
	document.getElementById("list").appendChild(liElt);
	}
	/**
	
    
        
        

        
        document.querySelector("#list").appendChild(liElt);
    **/
}

document.querySelector("#record").addEventListener("click", record);

