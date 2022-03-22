const calculateDiscountedPrice = (price,discount) => {
    const discountPricePercentage = 100 - discount;
    const precioWithDiscount = (price * discountPricePercentage) / 100;
    return precioWithDiscount;
};

document.getElementById('buttonPriceDiscount').addEventListener('click', () => {
    const priceInput = document.getElementById('inputPrice').value;
    const discountInput = document.getElementById('inputDiscount').value;
    const total = calculateDiscountedPrice(priceInput, discountInput);
    const showTotal = document.getElementById('PriceTotal')
    showTotal.innerHTML = 'El precio a pagar es de $ ' + total;
});


