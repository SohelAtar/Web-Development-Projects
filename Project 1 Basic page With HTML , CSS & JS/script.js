document.querySelectorAll(".mainav div").forEach(item =>{
    item.addEventListener("mouseover", function()  {
        item.style.color = "green";
    });
    item.addEventListener("mouseout", function()  {
        item.style.color = "";
    })

    item.addEventListener("click", function (){
        alert(`${item.textContent} clicked!`);
    });
});


let searchIcon = document.querySelector(".seclastnav i");
let searchBox = document.createElement("input");
searchBox.type = "text";
searchBox.placeholder = "Search...";
searchBox.style.display = "none";
searchBox.style.position = "absolute";
searchBox.style.right = "100px";

document.body.appendChild(searchBox);
searchIcon.addEventListener("click",function (){
    searchBox.style.display = searchBox.style.display === "none" ? "block" : "none";
});

// add even listener for the contact div
document.getElementById("contact").addEventListener("click", function (){
    window.location.href = "contact.html";
});