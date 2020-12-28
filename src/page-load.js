import { setAbout } from "./tab1";
const content = document.querySelector("#content");
function setHeader(){
    let header = document.createElement('header');
    let img = document.createElement('img');
    let title = document.createElement('h1');
    let headerTxt = document.createElement('h2');
    img.setAttribute('src', 'https://i.ibb.co/S6yKT3s/544pizza2-100268.png');
    img.style.cssText = 'width: 300px; position: fixed; top: 0%; left: 60%;';
    title.innerText = 'Nuray Pizza';
    title.style.cssText = 'position: fixed; top: 5%; left: 30%;font-size: 60px'
    headerTxt.innerText = 'The best pizza in town'
    headerTxt.style.cssText = 'position: fixed; top: 15%; left: 30%;font-size: 40px;color:#F8E43601; font-weight: 100;-webkit-text-stroke: black 1px;'
    header.appendChild(title);
    header.appendChild(headerTxt);
    header.appendChild(img);
    content.appendChild(header);
    setAbout();
}
export {content, setHeader};