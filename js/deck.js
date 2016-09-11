var deck = [];

function init() {
  for (i = 0; i < 7; i++) {
    newCard(null);
  }
}

function newCard(card) {
  window.setTimeout(function(){
    if (card !== null) {
      card.remove();
    }
    $.get("https://deck-jacman444.c9users.io", { method: "get", text: "" }, function(data){ evaluate(data); });
  },100);
}

function evaluate(data) {
  var data = String(data);
  var temp = "";
  deck = [];
  for (i = 0; i < data.length; i++) {
    if (data.charAt(i) === ";") {
      deck[deck.length] = temp;
      temp = "";
    }
    else {
      temp = temp + data.charAt(i).toLowerCase();
    }
  }
  var newEl = document.createElement("DIV");
  newEl.className = "option";
  newEl.style.backgroundColor = "#F0F0F0";
  newEl.onclick = function() {
    newCard(this);
  }
  newEl.innerHTML = deck[Math.floor(Math.random() * deck.length)];
  if (newEl.innerHTML.length > 36) {
    newEl.style.lineHeight = "4vh";
  }
  if (newEl.innerHTML.length > 59) {
    newEl.style.fontSize = "2.5vh";
  }
  document.body.appendChild(newEl);
  window.setTimeout(function(){
    newEl.style.backgroundColor = ("#"+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
  },100);
}
