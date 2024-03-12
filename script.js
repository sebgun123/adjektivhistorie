let color = '___';
let entity = '___';
let action = '___';
let place = '___';
view();

function view() {
let html = `    <div id="story">
<div>Once, there was a </div>
<div id="color">${color}</div>
<div id="entity">${entity}</div>
<div>that</div>
<div id="action">${action}</div>
<div>in the</div>
<div id="place">${place}</div>
<div>- and great things happened. The End.</div>
</div>
<div id="buttons">
<button onclick="changeColor1()">green</button>
<button onclick="changeColor2()">red</button>
</div>
<div id="buttons">
<button onclick="changeEntity1()">cat</button>
<button onclick="changeEntity2()">man</button>
</div>
<div id="buttons">
<button onclick="changeAction1()">stared</button>
<button onclick="changeAction2()">jumped</button>
</div>
<div id="buttons">
<button onclick="changePlace1()">pool</button>
<button onclick="changePlace2()">wall</button>
</div>`

document.getElementById('app').innerHTML = html;
}

function changeColor1() {
    color = 'Green';
    view();
}

function changeColor2() {
    color = 'Red';
    view();
}

function changeEntity1() {
    entity = 'cat';
    view();
}

function changeEntity2() {
    entity = 'man';
    view();
}

function changeAction1() {
    action = 'Stared';
    view();
}

function changeAction2() {
    action = 'Jumped';
    view();
}

function changePlace1() {
    place = 'Pool';
    view();
}

function changePlace2() {
    place = 'Wall';
    view();
}