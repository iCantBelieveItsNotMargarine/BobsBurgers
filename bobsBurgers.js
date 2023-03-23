const userAction = async () => {
    const num = Math.floor(Math.random() * 506 + 1);
    // let numArr = [];
    // numArr.append(num);
    // console.log(numArr);
    const link = `https://bobsburgers-api.herokuapp.com/characters/${num}`;




    //try3
    fetch(link, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.url);
            console.log(data.image);

            // setting variables 
            const charName = data.name;
            const imgDiv = document.getElementById("photo");
            const photoText = document.getElementById("photoText");
            const nameOf = document.getElementById("name");
            const otherInfo = document.getElementById("otherInfo");
            const photograph = data.image;
            const photo = toString(photograph);
            console.log(photo);
            const otherInfo2 = document.getElementById("otherInfo2");

            photoText.innerHTML = "";
            imgDiv.setAttribute("src", `${photograph}`);
            imgDiv.setAttribute("alt", `${data.name}`);
            nameOf.innerHTML = "";
            nameOf.append(`This is "${charName}" from Bob's Burgers.\
            
            `);
            
            // below is a ternary statement (?) which will insert the age if it is known
            const unk = ` 
            Age: unknown`;

            const ageKnown = "\n " +
            `Age: ${data.age}`;

            (!data.age) ? nameOf.append(unk) : nameOf.append(ageKnown);

            // below is a ternary statement (?) which will insert hair color depending on whether it exists 
            // (!data.hairColor) ? nameOf.append(`Hair color is unknown. `) : nameOf.append(`Hair color is ${data.hairColor}. `)

            // below will set the value of the div id'd as otherInfo as empty
            otherInfo.innerHTML = "";
            otherInfo2.innerHTML = "";

            otherInfo.append(`${data.name} is ${data.gender}. `);
            
            let occupationDivText = `Occupation: ${data.occupation}
            
            `;
            (!data.occupation) ? otherInfo2.append('Occupation: unknown. ') : otherInfo2.append(occupationDivText);

            (!data.hairColor) ? otherInfo.append('Hair color: unknown. ') : otherInfo.append(`Hair color: ${data.hairColor}. `);

            (!data.voicedBy) ? otherInfo.append(`Voice actor: unknown; first appearance: episode ${data.firstEpisode}. `) : otherInfo.append(`Voiced by ${data.voicedBy}; first appearance: episode ${data.firstEpisode}. `);

            const wikiUrl = data.wikiUrl;
            const wikiDiv = document.getElementById("wikiDiv");
            (!wikiUrl) ? otherInfo.append('No known wiki. ') : wikiDiv.setAttribute("href", `${wikiUrl}`);

            const urlLink = document.getElementById("urlLink");
            urlLink.setAttribute("href", `${data.url}`);

            // if (!data.occupation) {
            //     const otherInformation = `They are ${data.gender} of ${data.age} age, (no occupation) with ${data.hairColor} colored hair. They are voiced by ${data.voicedBy}, and first appeared in episode ${data.firstEpisode}.`;
            //     otherInfo.innerHTML = otherInformation;
            // } else {
            //     const otherInformation = `They are ${data.gender} of ${data.age}, ${data.occupation} with ${data.hairColor} colored hair. They are voiced by ${data.voicedBy}, and first appeared in episode ${data.firstEpisode}.`;
            //     otherInfo.innerHTML = otherInformation;
            // };


            // const otherInformation = `
            // ${data.gender}
            // ${data.occupation}
            // `;
            
            imgDiv.setAttribute("style", "height:80%;max-width:95%;padding:0;");
            // otherInfo.setAttribute("style", "max-height:80%;;font-size:17px;");
            // otherInfo.innerHTML = otherInformation;
        });




    //try 2
    // const xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = () => {
    //     if (this.readyState = 4){
    //         console.log(this.json);
    //     }
    // };
    // xhttp.open("GET", link, true);
    // xhttp.send();

    //try 1
    // const response = await fetch(link);
    // const myJson = await response.json();
    // console.log(link);

    // console.log(myJson);

}


// console.log("https://bobsburgers-api.herokuapp.com/characters" + "/" + randNumForBobsChar());