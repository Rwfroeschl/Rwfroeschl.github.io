import WeatherAppHome from "../assets/images/weatherApp-home.png";
import WeatherAppExample from "../assets/images/weatherApp-example.png";
import frontPageIOS from "../assets/images/IOSapp-home.jpeg";
import factPageIOS from "../assets/images/IOSapp-fact.jpeg";
import jokePageIOS from "../assets/images/IOSapp-joke.jpeg";
import riddlePageIOS from "../assets/images/IOSapp-riddle.jpeg";
import RedBag from "../assets/images/redbag.png";
import upark from "../assets/videos/upark-video.mp4";
import uparkFinal from "../assets/videos/upark-final-edited.mov";
import uparkThumbnail from "../assets/images/uparkThumbnail.png"
import server from "../assets/images/Server-FinalTest.png";

console.log(uparkThumbnail);
console.log(upark);
export const ProjectList = [
    {
        name: "Weather Site",
        images: [WeatherAppHome, WeatherAppExample],
        thumbnail: WeatherAppHome,
        description: "A web app that provides the user with the current weather for a city of their choice.",
        skill: "JavaScript, HTML, CSS, APIs",
        link: "https://github.com/Rwfroeschl/weatherApp"
    },
    {
        name: "IOS app",
        images: [frontPageIOS, factPageIOS, jokePageIOS, riddlePageIOS],
        thumbnail: frontPageIOS,
        description: "An IOS app that provides the user with either a joke, riddle, or fact depending on the user's choice.",
        skill: "Swift, Xcode, UIKit",
        link: ""
    },
    {
        name: "Red Bag",
        image: RedBag,
        description: "A web app that is used to help find sponsorships for underprivileged children.",
        skill: "React, JavaScript, Unit Testing, Yarn",
        link: "https://github.com/kaytonfroeschl/redbag2"
    },
    {
        name: "Parking App",
        videos: [upark, uparkFinal],
        thumbnail: uparkThumbnail,
        description: "A parking app that allows users to find parking spots in their area for an event or gameday. Users can also rent out their own parking spots to other users.",
        skill: "Flutter, Firebase, Google Maps API, dart, full-stack development, error handling, sprint planning",
        link: "https://github.com/Jmurr2525/Upark"
    },
    {
        name: "Messaging Server",
        image: server,
        thumbnail: server,
        description: "This project includes two Python scripts that demonstrate the fundamental client-server network communication using TCP sockets. The server listens for incoming connections and can respond to client requests, while the client can send commands to the server and display the server's response.",
        skill: "TCP, UDP, Python",
        link: "https://github.com/Rwfroeschl/server"
    }
]