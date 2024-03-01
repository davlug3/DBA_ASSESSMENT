let activeQuestion = null
import question1 from "./question1";
import question2 from "./question2";
import question3 from "./question3";

window.addEventListener("load", (event) => {

  const links = document.querySelectorAll("[data-links] > li")
  links.forEach(link =>{
    link.addEventListener("click", ()=> {
      showQuestion(link.id)
    })
  })
  

});


function showQuestion (id) {
  document.querySelectorAll("[data-links] > li").forEach(link => link.removeAttribute("data-active") )
  document.querySelector("[data-links] > li#"+id).dataset.active = ""


  const content = document.querySelector("[data-content]")
  
  
  if (id=='q1') content.innerHTML = question1();
  if (id=='q2') content.innerHTML = question2();
  if (id=='q3') content.innerHTML = question3(true);
}
