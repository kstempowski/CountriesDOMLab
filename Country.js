class Country
{
    constructor(name, language, greeting, colors)
    {
        this.name = name;
        this.language = language;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("America", "English", "Hello world!", ["Red, White, and Blue"]);
let france = new Country("France", "French", "Bonjour le monde", ["Blue, White, and Red"]);
let italy = new Country("Italy", "Italian", "Ciao mondo", ["Green, White, and Red"]);
let germany = new Country("Germany", "German", "Hallo Welt", ["Black, Red, and Yellow"])


//document.querySelector("#select").addEventListener("click", displayCountry)


function selectCountry(){
    let select = document.getElementById("CountryList").value;

    if(select === "USA"){
        country = usa;
    }
    else if(select === "France"){
        country = france;
    }
    else if(select === "Italy"){
        country = italy;
    }
    else if(select === "Germany"){
        country = germany;
    }
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.language;
    document.getElementById("HelloWorld").innerText = country.greeting;
    document.getElementById("CountryColors").innerText = country.colors;

    return `${country.name}, ${country.language}, ${country.greeting}, ${country.colors}`
    
}

function displayColors(){
    let select = document.getElementById("CountryList").value;

    if(select === "USA"){
        document.getElementById("Color1").style.backgroundColor = "red";
        document.getElementById("Color2").style.backgroundColor = "white";
        document.getElementById("Color3").style.backgroundColor = "blue";
    }
    else if(select === "France"){
        document.getElementById("Color1").style.backgroundColor = "blue";
        document.getElementById("Color2").style.backgroundColor = "red";
        document.getElementById("Color3").style.backgroundColor = "white";
    }
    else if(select === "Italy"){
        document.getElementById("Color1").style.backgroundColor = "green";
        document.getElementById("Color2").style.backgroundColor = "white";
        document.getElementById("Color3").style.backgroundColor = "red";
    }
    else if(select === "Germany"){
        document.getElementById("Color1").style.backgroundColor = "black";
        document.getElementById("Color2").style.backgroundColor = "red";
        document.getElementById("Color3").style.backgroundColor = "yellow";
    }
}


