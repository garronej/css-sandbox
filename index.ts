import './style.scss';

const form= document.getElementById( "my_form" ) as HTMLFormElement;

form
.addEventListener("submit", (e) => {

  console.log("wesh");

  const { elements }= e.target as any;

  console.log(elements.title.value);

  e.preventDefault();

})