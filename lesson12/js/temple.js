//function to create the temple card
const requestURL='../data.json';
function templeCard() {
    fetch(requestURL).then(function (response) {
      return response.json();
    }).then(function (jsonObject) {
        console.table (jsonObject);
        const temples = jsonObject['temple'];
        temples.forEach(displaytemple);
        temples.forEach(likeButtonState);
    });
    
    function displaytemple(temple) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let imageur = document.createElement("img");
        let addresseHeading = document.createElement("h3");
        let addresse = document.createElement("p");
        let telephoneHeading = document.createElement("h3");
        let telephone = document.createElement("p");
        let serviceHeading = document.createElement("h3");
        let services = document.createElement("p");
        let sessionHeading = document.createElement("h3");
        let session = document.createElement("p");
        let ordinanceHeading = document.createElement("h3");
        let ordinance = document.createElement("p");
        let closureHeading  = document.createElement("h3");
        let closuresubHeading1 = document.createElement("h4");
        let closuresubHeading2 = document.createElement("h4");
        let closure1 = document.createElement("p");
        let closure2 = document.createElement("p");
        let historyHeading  = document.createElement("h3");
        let history = document.createElement("p");
        let like = document.createElement("Button")
        let likeId = "like" + temple.order;
        imageur.setAttribute('src', temple.img);
        imageur.setAttribute('loading', 'lazy');
        imageur.setAttribute('alt', `Image of the ${temple.name}.`);
        like.id = likeId;
        like.textContent = "Like it?";
        h2.textContent = temple.name;
        addresseHeading.textContent = "Address:";
           
        telephoneHeading.textContent = "Telephone:";
        telephone.textContent = temple.telephone;


        serviceHeading.textContent = "Services";

        historyHeading.textContent = "History:";
        ordinanceHeading.textContent = "Ordinance Schedule:";
        ordinance.textContent = temple.ordinanceSchedule;

        sessionHeading.textContent = "Session Schedule:";
        session.textContent = temple.sessionSchedule;

        closureHeading.textContent = "Temple Closure Schedule:";
        closuresubHeading1.textContent="2022";
        closuresubHeading2.textContent="2023";

        card.appendChild(h2);
        card.appendChild(imageur);
        card.appendChild(addresseHeading);
        function displayValue(value){
            let node = document.createTextNode(value);
            let para = document.createElement("p");
            para.appendChild(node);
            card.appendChild(para);
        }
        temple.address.forEach(displayValue);
        card.appendChild(telephoneHeading);
        card.appendChild(telephone);
        card.appendChild(serviceHeading);
        temple.services.forEach(displayValue);
        card.appendChild(ordinanceHeading);
        card.appendChild(ordinance);
        card.appendChild(sessionHeading);
        card.appendChild(session);
        card.appendChild(closureHeading);
        card.appendChild(closuresubHeading1);
        temple.templeClosureSchedule[0].twentyTwo.forEach(displayValue);
        card.appendChild(closuresubHeading2);
        temple.templeClosureSchedule[1].twentyThree.forEach(displayValue);
        card.appendChild(historyHeading);
        temple.history.forEach(displayValue);
        card.appendChild(like);
        document.querySelector("#templeCard").appendChild(card);
        /*like button*/
        function likeButtonClicked(){
            const likeReact = document.querySelector('#'+ likeId);
            let lastlike = Number(window.localStorage.getItem("liked"+likeId));
            if (lastlike == 0){
                likeReact.textContent = "Liked";
                localStorage.setItem("liked"+likeId, 1);
                document.querySelector("#"+likeId).style.backgroundColor="#7373ac";
                } else {
                    likeReact.textContent = "Like it?";
                localStorage.setItem("liked"+likeId, 0);
                document.querySelector("#"+likeId).style.backgroundColor="#aca5a5";
            }
        }
        document.querySelector('#'+likeId).addEventListener("click", likeButtonClicked);
    }

    function likeButtonState(temple){
        let likeId = "like" + temple.order;
        const likeReact = document.querySelector('#'+ likeId);
        let lastlike = Number(window.localStorage.getItem("liked"+likeId));
        if (lastlike == 0){
            likeReact.textContent = "Like it?";
            document.querySelector("#"+likeId).style.backgroundColor="#aca5a5";
            } else {
                likeReact.textContent = "Liked";
            document.querySelector("#"+likeId).style.backgroundColor="#7373ac";
        }
    }
}


templeCard();






