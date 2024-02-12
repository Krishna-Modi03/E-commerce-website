
    let leftaside = document.getElementById('left-aside');
    let rightaside = document.getElementById('right-aside');
    const cartdata=[];
document.addEventListener('DOMContentLoaded', () => {    
    let fetchthedata = async function(){
        let result = await fetch('https://fakestoreapi.com/products');
        let data = await result.json();
        displaydata(data);
    }
    fetchthedata();

    function displaydata(fatcheddata) {
        fatcheddata.forEach(element => {
            let div1 = document.createElement("div");
            div1.setAttribute("class","left-aside-div");
            div1.innerHTML = `<img src = '${element.image}' alt = '' height='200px' width='200px'><h1>${element.title}</h1><p class='price'>Price : &dollar;${element.price}</p><p class='ratings'>${element.rating.rate}<i class="fa-solid fa-star"></i> | ${element.rating.count}<i class="fa-solid fa-user"></i></p>`
            if (leftaside) {
                leftaside.appendChild(div1);
                div1.addEventListener('click',()=>{
                    displaysingledata(element);
                });
            }
        });
    }
    function displaysingledata(element){
        rightaside.innerHTML = `<img src='${element.image}'height='300px' width='300px'>
        <div class='details-block'>
        <h2>${element.title}</h2>
        <p>${element.description}</P>
        <b class ='price-details'>Price : &dollar;${element.price}</b>
        <p>Ratings : ${element.rating.rate}<i class="fa-solid fa-star"></i> | ${element.rating.count}<i class="fa-solid fa-user"></i></p>
        <button class ='addTocartbtn' id = 'addTocartbtn'>Add to Cart</button>
        </div>`

        let cartbutton = document.getElementById('addTocartbtn');
        cartbutton.addEventListener("click",()=>{
            cartdata.push(element);
            console.log(cartdata);
            localStorage.setItem("cartdata", JSON.stringify (cartdata));
            document.getElementById('addTocartbtn').innerHTML = `Item Added`;
            let carticon = document.getElementById('carticon');
            let cartCount = carticon.querySelector('.cart-count');
            if (!cartCount) {
                cartCount = document.createElement('sup');
                cartCount.setAttribute('class', 'cart-count');
                cartCount.textContent = '1';
                carticon.appendChild(cartCount);
            } else {
                let count = parseInt(cartCount.textContent);
                cartCount.textContent = count + 1;
            }
        })
    }
});
export { cartdata };

