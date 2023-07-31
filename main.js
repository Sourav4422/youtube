document.getElementById(`icon`).addEventListener(`click` , () => 
{
    console.log('heloo');
   const text=document.getElementById(`search`).value
   const url= `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCDlpK7islJL3xS-mnJg_o2P28DxpwcYmI&part=snippet&q=${text}&maxResults=50`
   console.log(url);
   const xhr=new XMLHttpRequest()
   xhr.open(`GET`,url)
   xhr.onreadystatechange = () =>
   {
     if (xhr.readyState==4 && xhr.status==200)
      {
        const response = JSON.parse(xhr.responseText)
        console.log(response);
        let output =``
        for (let i = 0; i < response.items.length; i++) 
        {
         output +=`
         <a style="width:23%; margin : 10px;" href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank">
         <div>
            <img style="width: 100%;" src=" ${response.items[i].snippet.thumbnails.high.url}">
            <h4> ${response.items[i].snippet.title}</h4>
            <p>${response.items[i].snippet.description}</p>
         </div>
         </a>
         ` 
        }
        document.getElementById(`main`).innerHTML= output
      }
   }
   xhr.send()
})