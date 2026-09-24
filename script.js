// descriptions for each nickname
let descriptions = {
  Tahusha: "A result of a misspelling that became somewhat intentional",
  Tish: "A nickname I chose for myself that i actually like :3",
  Badal: "A nickname given to me by my grandparents when I was little becuase I always had a cloud (badal) over my heas",
  Tahussy: "Something my friend decided to call me on a random sunday and it stuck",
  Kirby: "How im saved on my sisters phone because I ate her sandwich once",
  "Tissue Paper": "A nickname my neighbour gave me, she moved away a long time ago but i still loook at her house ",
  Tanisha: "Auto-correct default that makes me viscereally angry",
  Tachar: "my friend combined machar (mosquito) and tahisha... yeah",
  Taisha: "One letter off, said so often it started to feel official",
  Gamlu: "A childhood nickname because I frown alot",
  Princess: "Something my parents unironically and embarissingly call me on a daily basis",
  TishTosh: "My usual username",
  Taisa: "How my school's art teacher pronounced my name and it stuck.. i like it",
  Tash: "starbuck's employees interpretation  of my name",
  Taishu: "how my aunts call me",
  Tahini: "i dont even know how to explain this one",
  Ninja: "A chidhood dream that was used against me for evil",
  Tayeesha: "somewhat understandable mispelling",
  Bandar: "what my sister and uncle called me when i was little (bandar=monkey)",
  Kish: "bagle pub interpretation of my name",
  Tishy: "I like this one",
  Tia: "New coffee shop name",
  Trisha: "where did the R come from man",
  Tahihsa: "A keyboard scramble of Tahisha that somehow looks intentional",
  Tanishu: "i hate this, theres no n.. why are you using a u at the end? stop it",
  Tehisha: "how my friend's ex-bf spelled my name, he never fixed it",
  Tasha: "?",
  Aandu: " 'because your face looks like an egg' - someone i hate",
  Jane: "americanized misprononcitation of my last name",
  Tranquisha: "?",
  Tanisa: "i dont want to talk about it",
  "Tahir Shah": "iykyk do not look this up on youtube",
  Jaen: "another interpretation of my last name",
  Taiso: "this one's cute",
  Taneesha: "there was never an 'n' nor an 'e' what is going on",
  Tagisha: "one of my friend's phone's exclusively spells my name like this",
  Taunty: "im litereally 19 and despite that my name's been combined w aunty",
  Tashisha: "how im saved in my childhood best friend's phone",
};

// get the popup pieces
let popup = document.getElementById("popup");
let popupName = document.getElementById("popup-name");
let popupDesc = document.getElementById("popup-desc");
let closeBtn = document.getElementById("popup-close");

// get all the names on the page
let names = document.querySelectorAll(".column p");

// when a name is clicked, show the popup
for (let i = 0; i < names.length; i++) {
  names[i].addEventListener("click", () => {
    let clickedName = names[i].innerText;

    popupName.innerText = clickedName;
    popupDesc.innerText = descriptions[clickedName];
    popup.style.display = "block";
  });
}

// close the popup when you click the x
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// stop the columns when you scroll down
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    document.body.className = "paused";
  } else {
    document.body.className = "";
  }
});
