let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.className.includes("showData")) { // Fixed: use `includes` for multiple classes
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

let crd = document.querySelectorAll(".product-card");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

console.log(crd);

crd.forEach(function (curValue) {
  curValue.addEventListener("click", function () {
    itemPage.style.display = "flex";
    container.style.display = "none";
    console.log(curValue);

    let imgSrc = curValue.firstElementChild.src;
    itemImg.src = imgSrc;

    buyBtn.addEventListener("click", function () {
      document.querySelector(".buyPage").style.display = "block";
      document.querySelector(".buyText").innerHTML = `
                <h3>Enter Details :</h3>
                <input type="text" placeholder="Enter Your Name" id="name"> <br>
                <input type="text" placeholder="Enter Your Address" id="address"> <br>
                <input type="text" placeholder="Enter Your Mobile Number" id="num"> <br>
                <h3>Payment Option :</h3>
                <select>
                    <option value="Google-Pay">Google-Pay</option>
                    <option value="Phone-Pay">Phone-Pay</option>
                    <option value="Paytm">Paytm</option>
                    <option value="Cash-on-Delivery">Cash-on-Delivery</option>
                </select> <br>
            `;
      let button = document.createElement("button");
      button.innerText = "Submit";
      document.querySelector(".buyText").appendChild(button); // Fixed: Correctly append `button`

      button.addEventListener("click", function () {
        let name = document.getElementById("name");
        let address = document.getElementById("address"); // Fixed: Added `address` reference
        let num = document.getElementById("num"); // Fixed: Added `num` reference

        if (name.value === "" || address.value === "" || num.value === "") { // Fixed: Changed `&&` to `||`
          alert("Please Enter Details");
        } else {
          alert("Your Response Recorded");
        }
      });

      let cross = document.querySelector(".cross");
      if (cross) { // Fixed: Ensure `cross` exists
        cross.addEventListener("click", function () {
          document.querySelector(".buyPage").style.display = "none";
        });
      }
    });
  });
});
