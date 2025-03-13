function loadCategory (){
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then(response => response.json())
.then(data => displayCategory(data.categories)
)
}
function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res)=>(res.json()))
    .then (data=>displayVideos(data.videos))
}
const loadCategoriesVideos = (id)=>{
const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
fetch(url)
.then((res)=>(res.json()))
.then ((data)=>displayVideos(data.category)
)

}
function displayCategory(categories){
const categoryContainer = document.getElementById("category-container");
for(let cate of categories){
 const categoryDiv = document.createElement("div")
 categoryDiv.innerHTML = `<button onclick="loadCategoriesVideos(${cate.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-[#ffffff]">${cate.category}</button>`
 categoryContainer.append(categoryDiv)
}
}
const displayVideos=(videos)=>{
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML ="";
  videos.forEach(video => {
   const videoCard = document.createElement("div")
   videoCard.innerHTML =  `
   <div  class="card bg-base-100 shadow-sm ">
                <figure class="relative">
                  <img class="w-full h-[150px] object-cover"
                    src="${video.thumbnail}"
                    alt="" />
                    <span class="absolute bottom-6 right-6 text-[#ffffff] bg-[#171717] py-2 rounded-sm px-2">3hrs 56 min ago</span>
                </figure>
                <div class="flex  mx-8 gap-x-4 pt-6">
                 <div class="profile ">
                    <div class="w-10 p-0 ">
                        <img class="rounded-full" src="${video.authors[0].profile_picture} " />
                  </div>
               
                </div>
                <div class="info">
                    <h2 class="font-bold text-[16px] text-[#171717]">${video.title}</h2>
                  <div class="flex gap-4">
                    <h4 class="">${video.authors[0].profile_name}</h4>
                    <img class="w-4" src="assets/download.png" alt="">
                  </div>
                     <span>${video.others.views} Views</span>
                 </div>
              </div>
   `
   videoContainer.append(videoCard)  
  });
}

loadCategory()
