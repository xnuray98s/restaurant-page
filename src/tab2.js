const content = document.querySelector("#content");

function setMenu() {
    let divTab2 = document.createElement('div');
    let tabContent = document.createElement('article');
    divTab2.id = 'tab2';
    
    tabContent.innerHTML = `<ul>
    <li>Neapolitan Pizza</li>
    <li>Chicago Pizza</li>
    <li>New York-Style Pizza</li>
    <li>Sicilian Pizza</li>
    <li>Greek Pizza</li>
    <li>California Pizza</li>
    <li>Detroit Pizza</li>
    <li>St. Louis Pizza</li>
    </ul>`;
    tabContent.style.cssText = `position: fixed; top:38%; left:30%; font-size: 30px; width:700px;
                                background-color: #E8D4A8; padding: 30px; z-index: -1; height: 400px;
                                border: #45433F 1px solid;`;
    divTab2.appendChild(tabContent);
    content.appendChild(divTab2);
}
export {setMenu};