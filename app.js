
let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
    p.addEventListener('click', function () {
        paragraphs.forEach(par => par.classList.remove('active'));
        this.classList.add('active');        
    });
});

var nav = document.querySelectorAll("ul a");

nav.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
      window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});

 

//creat new element (h2) for  paragraph 5 
const sectionTitle =document.createElement('h2');
//creat text for h2 
const textTilte = document.createTextNode('Section 5 ');
//create refrence for pargraph5 to usin in method insert before 
const parg = document.getElementById('section5');
//make the text was created inside h2 element
sectionTitle.appendChild(textTilte);
//make the h2 element inside div 
const divSection = document.getElementById('section5');
divSection.appendChild(sectionTitle);
//insert h2 before the pargraph element 
divSection.insertBefore(sectionTitle,parg);



//add more line to paragraph5 

const moreText= document.createTextNode(' Welcome to java script proramming   !');
parg.appendChild(moreText);


