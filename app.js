const moon = 
"M73 127.5C73 197.916 127.5 261 127.5 255C57.0837 255 0 197.916 0 127.5C0 57.0837 57.0837 0 127.5 0C127.5 0 73 57.0837 73 127.5Z"
const sun = 
"M255 127.5C255 197.916 197.916 255 127.5 255C57.0837 255 0 197.916 0 127.5C0 57.0837 57.0837 0 127.5 0C197.916 0 255 57.0837 255 127.5Z"

const darkMode = document.querySelector('#dark_mode');
const span = document.querySelector('span');

let toggle = false;

span.addEventListener('click',() => {

    const timeline = anime.timeline({
      duration : 650,
      easing : "easeOutExpo"
    });
    timeline.add({
     targets : ".sun",
     d : [{value : toggle ? sun : moon }]
    })
    .add({
        targets : "#dark_mode",
        rotate :  320 
    },'-=350')
    .add({
        targets : "section",
        backgroundColor : toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color : toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    },"-=700")
    .add({
        targets : span ,
        borderColor : toggle ? "rgb(22,22,22)" : "rgb(255,255,255)" ,

    },"-=850")
    .add({
        targets : ".in-check",
        translateX : toggle ? -1 : 65 ,
        backgroundColor : toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"

    },"-=850");

    if (!toggle) {
        toggle = true;
        
    }else{
        toggle = false;
    }

});



