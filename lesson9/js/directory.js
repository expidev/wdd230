const requestURL01 = '../lesson9/data/data.json';

//function to create the grid content
function grid() {
    fetch(requestURL01).then(function (response) {
      return response.json();
    }).then(function (jsonObject) {
      console.table (jsonObject);
      const directories = jsonObject['directory'];
      directories.forEach(addCard);
    });
    
    function addCard(directory) {
        let card = document.createElement("section");
        let imageur = document.createElement("img");
        let h2 = document.createElement('h2');
        let  addresse = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let url = document.createElement("a");
        imageur.setAttribute('src', directory.img);
        imageur.setAttribute('loading', 'lazy');
        imageur.setAttribute('alt', `Representation of the ${directory.name} organization.`);
        h2.textContent = directory.name;
        addresse.textContent = directory.address;
        phoneNumber.textContent = directory.phonenumber;
        url.textContent = directory.URL;
        url.setAttribute('href', directory.URL)
        card.appendChild(imageur);
        card.appendChild(h2);
        card.appendChild(addresse);
        card.appendChild(phoneNumber);
        card.appendChild(url);
        document.querySelector("#content").appendChild(card);
    }
      
}

//function to create the list content
function list() {
    fetch(requestURL01).then(function (response) {
      return response.json();
    }).then(function (jsonObject) {
      console.table (jsonObject);
      const directories = jsonObject['directory'];
      directories.forEach(addList);
    });
    function addList(directory){
        let row = document.createElement("tr");
        let h2 = document.createElement('td');
        let  contact = document.createElement("td");
        let url = document.createElement("td");
        h2.textContent = directory.name;
        contact.textContent = `${directory.address} ${directory.phonenumber}`;
        url.textContent = directory.URL;
        url.setAttribute('href', directory.URL)
        row.appendChild(h2);
        row.appendChild(contact);
        row.appendChild(url);
        document.querySelector("#listContent").appendChild(row);
    }

}


//Function to display the list and hide the grid
function displayList(){
    document.querySelector("#content").style.display = 'none';
    document.querySelector("#listContent").style.display = 'table';
    document.querySelector("#list").style.color = "white";
    document.querySelector("#list").style.backgroundColor = "rgb(0, 54, 99)";
    document.querySelector("#grid").style.color = "black";
    document.querySelector("#grid").style.backgroundColor = "#eee";
    document.querySelector("#list").removeEventListener("click",displayList)
    document.querySelector("#grid").addEventListener('click',displayGrid);
}

//Function to display the grid and hide the list
function displayGrid(){
    document.querySelector("#listContent").style.display = 'none';
    document.querySelector("#content").style.display = 'grid';
    document.querySelector("#grid").style.color = "white";
    document.querySelector("#grid").style.backgroundColor = "rgb(0, 54, 99)";
    document.querySelector("#list").style.color = "black";
    document.querySelector("#list").style.backgroundColor = "#eee";
    document.querySelector("#grid").removeEventListener("click",displayGrid)
    document.querySelector("#list").addEventListener('click',displayList);
}


grid();
list();
displayGrid();