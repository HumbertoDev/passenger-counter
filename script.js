let countEl = document.getElementById('count-el');
let count = 0;

function increment(){
  count += 1
  countEl.innerHTML = count + "<span class='passengers'> Passegers 🧳</span>";
  console.log('Clicked');
}

