const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
const mapLab = document.createElement('div')
mapLab.id = 'container'

function lineLab(mapa){

    mapa.forEach(function(element){
        const line = document.createElement('div')
        line.classList.add("line")

        for(let counter = 0; counter < element.length; counter++){
            const wall = document.createElement('div')
            

            if(element[counter] !== 'W'){
                wall.classList.add('way')
            }else{
                wall.classList.add('wall')
            }
            

            line.appendChild(wall)
        }

        mapLab.appendChild(line)
    })
}
lineLab(map)

const body = document.getElementsByTagName('body')
body[0].appendChild(mapLab)