//select all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    // check if they had the shift key down
   //and check them.

   let inBetween = false;
if(e.shiftKey && this.checked) {
//loop over every single checbox
checkboxes.forEach(checkbox => {
    console.log(checkbox);
    if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log("Starting to check inbetween")
    }

   if(inBetween){
    checkbox.checked = true;
   }
});
}
    lastChecked = this;
}



checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
