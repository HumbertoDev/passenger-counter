let countEl = document.getElementById('count-el');
let count = 0;
let saved = 0;

function increment(){
  count += 1
  countEl.innerHTML = count + "<span class='passengers'> Passegers 🧳</span>";
  console.log('Clicked');
}

function save(){
  saved = count;
  if(count==1){
    document.getElementById('saved-text').innerText = "Work Chekpoint :  " + saved
  }else{document.getElementById('saved-text').append(" - " + saved)}

} 
