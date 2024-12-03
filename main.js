const __API = "https://fakestoreapi.com/products?limit=10";

fetch(__API)
  .then((res) => res.json())
  .then((data) => render(data))
  .catch((err) => console.log(err))
  .finally(console.log("Nima bo'lgan taqdirda ham ishlaydi"));

const row = document.querySelector(".row");

let price_title = document.createElement("h1");
price_title.textContent = "Shopping card";
price_title.style.color = "green";
price_title.style.paddingTop = "50px";
price_title.style.paddingLeft = "100px";

const second_row = document.querySelector(".row-2");

second_row.append(price_title);

function render(array) {
  console.log(array);
  row.innerHTML = "";

  array.map((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("img");
    title.src = `${item.image}`;

    let userID = document.createElement("h3");
    userID.textContent = item.title;

    let FirstTitle = document.createElement("p");
    FirstTitle.textContent = item.category;
    FirstTitle.style.color = "black";

    const TwoBox = document.createElement("div");
    TwoBox.classList.add("TwoBox");

    let Price = document.createElement("h4");
    Price.textContent = item.price;
    Price.style.color = "green";

    let Button = document.createElement("button");
    Button.textContent = `Sotib olish`;

    Button.addEventListener("click", () => {
      alert("Product added successfully on cart");

      let price_text = document.createElement("p");
      price_text.textContent = `${item.title} - ${item.price}`;

      second_row.append(price_text);
      let total = document.querySelector(".total_sum");
      count += item.price;

      total.innerHTML = "";
      total.innerHTML = count;
    });

    TwoBox.append(Price, Button);
    row.append(TwoBox);

    card.append(title, userID, FirstTitle, TwoBox);
    row.append(card);
  });
}
