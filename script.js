
const cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  totalPrice += productPrice;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalPriceElement = document.getElementById('total-price');

  cartList.innerHTML = '';
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price} MXN`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.onclick = () => removeFromCart(index);
    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
  });

  totalPriceElement.textContent = totalPrice;
}

function removeFromCart(index) {
  totalPrice -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío. Agrega productos antes de comprar.');
    return;
  }

  let message = '¡Hola! Me gustaría comprar los siguientes productos:%0A';
  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - $${item.price} MXN%0A`;
  });

  message += `%0ATotal: $${totalPrice} MXN%0A`;
  const phoneNumber = '2227793728';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}
