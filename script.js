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

    let lineCounter = 0;

    mapa.forEach(function(element){
        const line = document.createElement('div')
        line.classList.add("line")

        

        for(let counter = 0; counter < element.length; counter++){

            const wall = document.createElement('div');
            
            wall.id = `${lineCounter}/${counter}`;

            if(element[counter] !== 'W'){
                wall.classList.add('way')
            }
            else{
                wall.classList.add('wall')
            }

            if(element[counter] === 'S'){
                wall.id = 'start'
               
            }

            if(element[counter] === 'F'){
                wall.id = 'finish'
               
            }
            

            line.appendChild(wall)
        }

        lineCounter++;

        mapLab.appendChild(line)
    })


    
}
function addPlayer(){
    const start = document.getElementById('start')
    const player = document.createElement('div')
    player.id = 'player'
    
    start.appendChild(player)
}
lineLab(map);


const body = document.getElementsByTagName('body')
body[0].appendChild(mapLab)
addPlayer();


function movePlayer(){

}




let boxTop = 50;
let boxLeft = 25;

document.addEventListener('keydown', (event) => {

    
    const keyName = event.key;

    if(keyName === 'ArrowDown'){
       

        let player = []

        let lineOfS = 0
        map.forEach(function (element){
            if(element.split("").includes("S")){
                player[0] = element.indexOf("S")
                player[1] = lineOfS

                
            }
            lineOfS ++;
        }) 

        
        const move = document.getElementById(`${player[1] + 1}/${player[0]}`)
        
            if(map[player[1] + 1][player[0]] === ' '){

                const playerAtual = document.getElementById('player')

                

                move.appendChild(playerAtual)

                let changeLineOne = map[player[1]].split('')
                let changeLineTwo = map[player[1] + 1].split('')
                changeLineTwo[player[0]] = 'S'
                changeLineOne[player[0]] = ' '
                changeLineOne = changeLineOne.join("")
                changeLineTwo = changeLineTwo.join("")
               
                map[player[1]] = changeLineOne
                map[player[1] + 1] = changeLineTwo
                
            }

    }
    if(keyName === 'ArrowUp'){
       

        let player = []

        let lineOfS = 0
        map.forEach(function (element){
            if(element.split("").includes("S")){
                player[0] = element.indexOf("S")
                player[1] = lineOfS

                
            }
            lineOfS ++;
        }) 

        
        const move = document.getElementById(`${player[1] - 1}/${player[0]}`)
        
            if(map[player[1] - 1][player[0]] === ' '){

                const playerAtual = document.getElementById('player')

                

                move.appendChild(playerAtual)

                let changeLineOne = map[player[1]].split('')
                let changeLineTwo = map[player[1] - 1].split('')
                changeLineTwo[player[0]] = 'S'
                changeLineOne[player[0]] = ' '
                changeLineOne = changeLineOne.join("")
                changeLineTwo = changeLineTwo.join("")
               
                map[player[1]] = changeLineOne
                map[player[1] - 1] = changeLineTwo
                
            }

    }


    if(keyName === 'ArrowRight'){
        
        let player = []

        let lineOfS = 0
        map.forEach(function (element){
            if(element.split("").includes("S")){
                player[0] = element.indexOf("S")
                player[1] = lineOfS

                
            }
            lineOfS ++;
        }) 

        
        const move = document.getElementById(`${player[1]}/${player[0] + 1}`)
        
            if(map[player[1]][player[0] + 1] === ' '){

                const playerAtual = document.getElementById('player')

                

                move.appendChild(playerAtual)

                let change = map[player[1]].split('')
                change[player[0] + 1] = 'S'
                change[player[0]] = ' '
                change = change.join("")
                console.log(change)
                map[player[1]] = change 
                
            }
        
    }
    if(keyName === 'ArrowLeft'){
        

        let player = []

        let lineOfS = 0
        map.forEach(function (element){
            if(element.split("").includes("S")){
                player[0] = element.indexOf("S")
                player[1] = lineOfS

                
            }
            lineOfS ++;
        }) 

        
        const move = document.getElementById(`${player[1]}/${player[0] - 1}`)
        
            if(map[player[1]][player[0] - 1] === ' '){

                const playerAtual = document.getElementById('player')

                

                move.appendChild(playerAtual)

                let change = map[player[1]].split('')
                change[player[0] - 1] = 'S'
                change[player[0]] = ' '
                change = change.join("")
                console.log(change)
                map[player[1]] = change 
                
            }
    }

    
  });



  const description = document.createElement('div')
  description.id = 'description'
  const op = document.createElement('p')
  const descOp = document.createElement('p')
  op.textContent = 'ENCONTRE O ONE PIECE'
  descOp.textContent = 'Vença os desafios e encontre o tesouro One Piece, vire o REI DOS PIRATAS!'
  description.appendChild(op)
  description.appendChild(descOp)
  body[0].appendChild(description)