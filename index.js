const btn = document.getElementById("btn");
const message = document.getElementById("message");

const answer =
    ["Matulog 24 oras",
    "Shot puno",
    "Makipag suntukan sa kanto",
    "Mangupal",
    "umamin kay crush",
    "kumain sa labas",
    "kumain",
    "mag lulu",
    "Matulog mag damag",
    "netflix and chill",
    "Rides",
    "Swimming",
    ];

    const newMessage = ()=> {
        return Math.floor(Math.random() * answer.length)
    };

//event leistener
btn.addEventListener("click", ()=>{
    const count = newMessage()
    message.textContent = answer[count]
});


