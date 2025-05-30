class Video {
    constructor(title, uploader, time ){
        this.title = title,
        this.uploader = uploader,
        this.time = time
    }

    watch(){
        console.log(`${this.uploader}  watched all ${this.time}  of ${this.title} .`)
    }}


const video1 = new Video("learning javascript ", "zineb", 900 )
video1.watch();

const video2 = new Video("discover germany", "maryam", 300  )
video2.watch();



const videoData = [
    { title: "start with pyhton", uploader: "salma", time: 456 },
    { title: "postgres & SQL", uploader: "jake", time: 100 },
    { title: "React.Js", uploader: "maryam", time: 500 },
    { title: "java script", uploader: "laila", time: 600 },
   ]
const videoInstances = [];
for (let i = 0; i < videoData.length; i++) {
    const data = videoData[i];
    const video = new Video(data.title, data.uploader, data.time)
    videoInstances.push(video);
    video.watch();
};
