const nameList = document.getElementById("nameList");
const total = document.getElementById("total");
const discountTotal = document.getElementById("discountTotal")
let totalPrice = 0;
const handClick = (data) => {
    const name = data.childNodes[1].childNodes[5].innerText
    const PriceWithTk = data.childNodes[1].childNodes[7].innerText;
    const price = PriceWithTk.split(" ")[0];
    const priceNumber = parseInt (price);

    totalPrice = totalPrice + priceNumber;
    total.innerText = totalPrice;
    discountTotal.innerText = totalPrice;
    const li = document.createElement("li");
    li.innerHTML = name;
    nameList.appendChild(li);
}

