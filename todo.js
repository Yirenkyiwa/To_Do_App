const Addbtn = document.querySelector('.Addbtn');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input'); //creating an input element with some attributes below
        input.value=itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type="text";

        let itemBox = document.createElement('div'); 
        itemBox.classList.add('item');

        let editBtn = document.createElement('button');//creating an element button whith some attributes below
        editBtn.innerHTML="Edit";
        editBtn.classList.add('editBtn');

        let removeBtn = document.createElement('button');//creating an element button whith some attributes below
        removeBtn.innerHTML="Remove";
        removeBtn.classList.add('removeBtn');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editBtn);
        itemBox.appendChild(removeBtn);

        editBtn.addEventListener('click', () => this.edit(input));

        removeBtn.addEventListener('click', () => this.remove(itemBox));

    }

    //the edit function enables the input element when you click the edit button
    edit(input){
        input.disabled = !input.disabled;
    }
    
    //the remove function deletes your activity when you click the remove button
    remove(item){
        container.removeChild(item);

    }

}
//this function displays your activity you added by clicking either on the 'add' button or the 'enter' key
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";

    }
}



Addbtn.addEventListener('click', check);//executes the check function when you click in the 'add' button

//executes the check function when you click on the enter the enter key i.e the 13th key of QWERTY keys
window.addEventListener('keydown', (e) => {
    if(e.which==13){
        check();
    }
})
