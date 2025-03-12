function loadCategory (){
console.log("amr matha nosto");
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then(response => response.json())
.then(data => displayCategory(data.categories)
)
}
function displayCategory(categories){
const categoryContainer = document.getElementById("category-container");
for(let cate of categories){
 console.log(cate);
 const categoryDiv = document.createElement("div")
 categoryDiv.innerHTML = `<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-[#ffffff]">${cate.category}</button>`
 categoryContainer.append(categoryDiv)
}
}
loadCategory()