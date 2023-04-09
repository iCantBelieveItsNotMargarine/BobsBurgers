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

            // setting variables 
            const imgDiv = document.getElementById("photo");
            const photoText = document.getElementById("photoText");
            const nameOf = document.getElementById("name");
            const otherInfo = document.getElementById("otherInfo");
            const otherInfo2 = document.getElementById("otherInfo2");
            const otherInfo3 = document.getElementById("otherInfo3");
            const otherInfo4 = document.getElementById("otherInfo4");
            const otherInfo5 = document.getElementById("otherInfo5");

            // below is a ternary statement (?) which will insert the age if it is known
            
            // below is a ternary statement (?) which will insert hair color depending on whether it exists 
            // (!data.hairColor) ? nameOf.append(`Hair color is unknown. `) : nameOf.append(`Hair color is ${data.hairColor}. `)

            // below will set the value of the div id'd as otherInfo as empty
            otherInfo.innerHTML = "";
            otherInfo2.innerHTML = "";
            otherInfo3.innerHTML = "";
            otherInfo4.innerHTML = "";
            otherInfo5.innerHTML = "";
            photoText.innerHTML = "";
            nameOf.innerHTML = "";

            imgDiv.setAttribute("src", `${data.image}`);
            imgDiv.setAttribute("alt", `${data.name}`);
            
            nameOf.append(`This is ${data.name} from Bob's Burgers.`);

            (!data.age) ? otherInfo.append(`${data.name} is a ${data.gender} of unknown age.`) 
                : otherInfo.append(`${data.name} is a ${data.gender} of age ${data.age}. `);
            
            (!data.occupation) ? otherInfo2.append('Job: unknown') : otherInfo2.append(`Job: ${data.occupation}`);

            (!data.hairColor) ? otherInfo3.append('Hair color: unknown ') : otherInfo3.append(`Hair color: ${data.hairColor} `);

            (!data.voicedBy) ? otherInfo4.append(`Voiced by: unknown`) : otherInfo4.append(`Voiced by: ${data.voicedBy}`);
            
            (!data.firstEpisode) ? otherInfo5.append(`First episode: unknown`) : otherInfo5.append(`First episode: ${data.firstEpisode}`)

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
            
            imgDiv.setAttribute("style", "min-height:40%;max-height:80%;max-width:95%;padding:0;");
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