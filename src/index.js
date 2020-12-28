import { setHeader } from "./page-load";
import {setAbout} from "./tab1";
import { setMenu } from "./tab2";
import { setContact } from "./tab3";
let content = document.getElementById('content');
console.log("HI");
setHeader();

function createbuttons(){
    let buttonA = document.createElement('input');
    buttonA.setAttribute('type', 'button');
    buttonA.setAttribute('value', 'About');
    buttonA.id = 'about';
    buttonA.style.cssText = `padding:5px;background-color: #E06146;text-align: center; color: white;
                            position: fixed; top:35%; left:30%;
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;
                            border: #45433F 1px solid;
                            width: 150px;`;
    content.appendChild(buttonA);
    let buttonB = document.createElement('input');
    buttonB.setAttribute('type', 'button');
    buttonB.setAttribute('value', 'Menu');
    buttonB.id = 'menu';
    buttonB.style.cssText = `padding:5px;background-color: #E06146;text-align: center; color: white;
                            position: fixed; top:35%; left:38%;
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;
                            border: #45433F 1px solid; width: 150px;`;
    content.appendChild(buttonB);
    let buttonC = document.createElement('input');
    buttonC.setAttribute('type', 'button');
    buttonC.setAttribute('value', 'contact');
    buttonC.id = 'contact';
    buttonC.style.cssText = `padding:5px;background-color: #E06146;text-align: center; color: white;
                            position: fixed; top:35%; left:46%;
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;
                            border: #45433F 1px solid; width: 150px;`;
    content.appendChild(buttonC)
};
createbuttons();
document.getElementById('about').addEventListener('click',() =>{
    setAbout();
});
document.getElementById('menu').addEventListener('click',() =>{
    setMenu();
});
document.getElementById('contact').addEventListener('click',() =>{
    setContact();
});

