// To Switch large product image by clicking on small thumbnail images

let imageBox = document.getElementById('photoBox-container');
function upDateImage(ImageSrc){
    imageBox.src = ImageSrc
}


//For lightBox display
let lightBoxCover = document.getElementById('cover');
let lightBoxImg = document.getElementById('lightbox-img');
let currentIndex = 0;
const images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

// Open lightbox
function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    
    // Display cover
    lightBoxCover.style.display = 'flex';
}
function closeLightbox() {
    lightBoxCover.style.display = 'none';
}

// Navigate to next or previous images
function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateLightboxImage();
}
// Update the lightbox image source
  function updateLightboxImage() {
    lightBoxImg.src = images[currentIndex];
}


// Function to show/hide the alert
let alertMessage = document.getElementById("Alert");
function showAlert() {
    alertMessage.style.display = "flex";
}
function hideAlert() {
    alertMessage.style.display = "none";
}


// To increase or reduce the Qty, select the necessary tags and add eventlisteners
let quantityNum = document.querySelector('.number-added');
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');

let addValue = 0;

plus.addEventListener('click', ()=>{
    addValue++;
    addValue = (addValue < 10) ? addValue : addValue;
    quantityNum.innerText = addValue;
});
    
minus.addEventListener('click', ()=>{
    if(addValue > 0){
        addValue--;
        addValue = (addValue < 10) ? addValue : addValue;
        quantityNum.innerText = addValue;
    }
});


//To add items to Cart when Add button is clicked..
// Select the needed tags
let cartIcon = document.querySelector('h6');
let Cart = document.getElementById('root');
let cartContainer = document.getElementById('cart-wrapper');
var button = document.getElementsByClassName('addcartbtn');


// loop over the button
for (var i = 0; i < button.length; i++){
    var button = button[i]
    button.addEventListener('click', (event) =>{

        //If no quantity is selected, using an If/Else statement, create an alert message!
        if(addValue === 0){
            showAlert();
        }else{
            //update data-count with each click
            var add = Number(cartIcon.getAttribute('data-count')|| 0);
            cartIcon.setAttribute('data-count', add + 1);
            cartIcon.classList.add('zero');

            //update the cart
            cartContainer.innerHTML =  addItemToCart(event);
        }
    });
}

// Add an event listener to The Cart-Icon to Open/dispaly Cart content
cartIcon.addEventListener('click', ()=>{
    Cart.classList.toggle('display');

    //Add an If Statement to Check if/when the Cart is Empty, then add a text!
    if(cartContainer.innerHTML.trim() ===''){
        cartContainer.innerHTML =  'Your Cart is empty.';
    }
    
});

// Create a new div to hold the new item to be added
let cartRow = document.createElement('div');

function addItemToCart(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement.parentElement;
    var priceElement = shopItem.getElementsByClassName('price')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    //to update the price.. 
    var total = (price * addValue);

    //create a html structure of the new item to be displayed
    var cartRowContent = `<div class='displayed-content'>
                            <div class='main-content'>
                                <div class='top-content'>
                                    <img class='pic' src='images/image-product-1-thumbnail.jpg'></img>
                                    <div class='display-title'>
                                        <h2>Fall Limited Edition Sneakers</h2>
                                        <p>$${price}.00 x ${addValue} <span class='Total-price'>$${total}.00</span></p>
                                    </div>
                                    <span onclick='deleteItem()' id='trash-can'><i class="fa-solid fa-trash-can"></i></span>
                                </div>
                                <button onclick='checkout()' class='checkout-btn'>Checkout</button>
                            </div>
                          </div>`;

    //Append the newly created div into the Cart                      
    cartContainer.append(cartRow);                    
    return cartRow.innerHTML = cartRowContent
}


// To clear Items from Cart...select the trash-can icon, the add an event listener!
function deleteItem(){
    let deleteIcon = document.getElementById('trash-can');
    deleteIcon.addEventListener('click', (event) => {
        var btnClicked = event.target;
        btnClicked.parentElement.parentElement.remove();
        cartContainer.innerHTML =  'Your Cart is empty.';

        return numClicked();
        
    });
}

//Create an Alert Message when the 'Checkout btn' is clicked
let checkoutBtn = document.getElementsByClassName('checkout-btn');

function checkout(){
    alert('Purchase Successful!');
    
    //assign a text to the empty Cart afterwards
    cartContainer.innerHTML='Your Cart is empty!'
    cartIcon.classList.remove('zero');
    return numClicked();
}

//To delete the Number of clicks
function numClicked(){
    let del = Number(cartIcon.getAttribute('data-count')|| 0);
    cartIcon.setAttribute('data-count', del = 0 );
}







//For Mobile
//To Make it Responsive For the Mobile/Tablets..

let menuBar = document.querySelector('.Menu-icon');
let displayMenu = document.querySelector('.Menu');
let exitIcon = document.querySelector('.Exit-icon');

menuBar.addEventListener('click', () => {
    displayMenu.classList.add('MobileMenu');
});

exitIcon.addEventListener('click', () => {
    displayMenu.classList.remove('MobileMenu');
});

