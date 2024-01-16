import WeatherApp from "../assets/images/weatherApp-home.png";
import IOSapp from "../assets/images/IOSapp-home.jpeg";
import RedBag from "../assets/images/redbag.png";
import upark from "../assets/videos/upark-video.mp4";
import uparkThumbnail from "../assets/images/uparkThumbnail.png"

console.log(uparkThumbnail);
console.log(upark);
export const ProjectList = [
    {
        name: "Weather Site",
        image: WeatherApp,
        description: "A web app that provides the user with the current weather for a city of their choice.",
        skill: "JavaScript, HTML, CSS, APIs",
        link: "https://github.com/Rwfroeschl/weatherApp"
    },
    {
        name: "IOS app",
        image: IOSapp,
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
        video: upark,
        thumbnail: uparkThumbnail,
        description: "A parking app that allows users to find parking spots in their area for an event or gameday. Users can also rent out their own parking spots to other users.",
        skill: "Flutter, Firebase, Google Maps API, dart, full-stack development, error handling, sprint planning",
        link: ""
    }
]