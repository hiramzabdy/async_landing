const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCANabtshH03knPgR-8HszSQ';
const content = document.getElementById("content")
let videos

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fee25ed28emsha9428a5977d4527p18aa10jsn5d69485e6782',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options)
    const data = await response.json()
    return data
}

(async() => {
    try{
        videos = await fetchData(API)
        console.log(videos)
        let view = `
        ${videos.contents.map(videoElement => 
            `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${videoElement.video.thumbnails[videoElement.video.thumbnails.length -1].url}" alt="${videoElement.video.title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <a href="https://www.youtube.com/watch?v=${videoElement.video.videoId}" target="_blank" rel="noopener noreferrer" class="w-full">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${videoElement.video.title}
                    </h3>
                    </a>
                </div>
            </div>
            `
        ).slice(0,4).join("")}
        `
        content.innerHTML = view
    }catch(error){
        console.log(error)
    }
})()