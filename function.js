//placeholder

//lat.html
//initialize get input
var turncounter = 0;
var contra = "";
var contra2 = "";
const source= document.getElementById("input");
source.addEventListener("keypress", (e) => {if (e.key === "Enter"){repost(); turncounter++;}});
function repost(){
console.log(source.value);
  source.reset();
  contra = "the gods omniscient";
  return contra;
  alert(contra);
}
