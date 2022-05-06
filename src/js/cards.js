import { postDb,getDb,deleteDb } from './database';
const submitEl=document.getElementById('submitBtn');
const titleEl=document.getElementById('title');
const descEl=document.getElementById('desc');
const dateEl=document.getElementById('datel');
const formEl=document.getElementById('formE');
formEl.addEventListener('submit',(e)=>{
   e.preventDefault();
    const title=formEl.elements['title'].value;
    const description=formEl.elements['desc'].value;
    const dateEl=formEl.elements['datel'].value;
    postDb(title,description,dateEl);
    formEl.reset();
    fetchData()

});

window.deleteCard = (e) => {
  // Grabs the id from the button element attached to the contact card.
    let id = parseInt(e.id);
  
    deleteDb(id);
    // location.reload()
  
    fetchData();
  };




const fetchData=async()=>{
    const result = await getDb();

    let card = ` `;
  
    // Loop through the data and create the contact card
    for (let data of result) {
      card+=`
      <div class="card" style='background-color:white; margin:5px;'>

      <h1>Notes created At:${data.date}</h1>
      <p class="price">${data.title}</p>
      <p>${data.desc}</p>
      <button class="btn btn-sm btn-danger" id="${data.id}" onclick="deleteCard(this)">Delete</button>

    </div>`

    document.getElementById('container').innerHTML = card;


}
}


fetchData()
