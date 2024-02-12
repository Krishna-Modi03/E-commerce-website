let mainSection = document.getElementById('main-section');
let leftside = document.getElementById('left-side');
let rightside = document.getElementById('right-side');
console.log("This is cart Page.");
var count = 0;
var totalPrice=0;
var title = '';
// import { cartdata } from './homepage.js';   
// Retrieve cartdata from local storage
const storedCartdata = localStorage.getItem("cartdata");
let importeddata;
function updateCartDisplay(){
    if(importeddata.length === 0){
        mainSection.removeChild(leftside);
        mainSection.removeChild(rightside);
        let p1 = document.createElement("p");
        p1.setAttribute("class","empty");
        p1.innerHTML=`<img src="Images/shopping.png"><h1>The Cart is Empty.</h1><h3>Let's add some items</h3></br><a class="additem" href="../index.html">ADD ITEMS</a>`;
        mainSection.appendChild(p1);
    }else{
        const emptyMessage = document.querySelector(".empty");
        if (emptyMessage) {
            emptyMessage.remove();
        }
        for (let i = importeddata.length - 1; i >= 0; i--) {
            let element = importeddata[i];
            let div1 = document.createElement("div");
            count++;
            div1.setAttribute("class","product");
            div1.innerHTML=`<button class ="delete" data-id="${i}"><i class="fa-solid fa-xmark"></i></button><li>
                                <img src = '${element.image}' alt = '' height='120px' width='100px'>
                            </li>
                            <li>
                                <h3>${element.title}</h3>
                                <select>
                                    <option value="0">Select Size</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                                <h5>Rating : ${element.rating.rate}<i class="fa-solid fa-star"></i> | ${element.rating.count}<i class="fa-solid fa-user"></i></h5>
                                <h4 class="price">Price : &dollar;${element.price}</h4>
                            </li>`;
            leftside.appendChild(div1);
            console.log(element.price);
            totalPrice+=element.price;
            title+=element.title;
        };
        if (importeddata.length != 0) {
            const checkoutButton = document.createElement("button");
            checkoutButton.textContent = "Checkout";
            checkoutButton.addEventListener("click",()=>{
                window.location.href = "../index.html";
            })
            rightside.innerHTML=`<div class = "checkout">
                                    <div class = "totalCount">
                                        <p>Total Items </p>
                                        <p>${count}</p>
                                    </div>
                                    <div class="totalAmount">
                                        <p>Total MRP </p>
                                        <p> &dollar;${totalPrice.toFixed(2)}</p>
                                    </div>
                                </div>`;
            rightside.appendChild(checkoutButton);
        }        
    }
}
if (storedCartdata){
    importeddata = JSON.parse(storedCartdata);
}
else{
    importeddata = [];   
}
updateCartDisplay();

const deleteButtons = document.getElementsByClassName('delete');
    for ( let i=0; i<deleteButtons.length; i++) {
            deleteButtons[i].addEventListener('click', ()=>{
            const id = deleteButtons[i].dataset.id;
            totalPrice -=importeddata[id].price;
            importeddata.splice(id,1);
            localStorage.setItem("cartdata",JSON.stringify(importeddata));
            if (importeddata.length === 0) {
                totalPrice = 0;
                count = 0;
                // leftside.innerHTML = ``;
                // rightside.innerHTML = ``;
                mainSection.removeChild(leftside);
                mainSection.removeChild(rightside);
                let p1 = document.createElement("p");
                p1.setAttribute("class","empty");
                p1.innerHTML=`<img src="Images/shopping.png"><h1>The Cart is Empty.</h1><h3>Let's add some items</h3></br><a class="additem" href="../index.html">ADD ITEMS</a>`;
                mainSection.appendChild(p1);
            } else {
                count--;
            location.reload();
            }
        });
    }
console.log(importeddata);

