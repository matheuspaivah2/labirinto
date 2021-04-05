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
const map2 = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W WWW   WWWWWWWWW   W",
    "W     W    W      WWW",
    "WWWW WW W WWW W    WW",
    "WWWWWWW W WWWWW W WWW",
    "WW      W     W W WWW",
    "WWW W WWWW WW W W WWW",
    "WWW W W    WW   W  WW",
    "W   W WWWWWWWWWWWW WW",
    "W WW             W  F",
    "W WWWWWWWWWWWW WWWWWW",
    "S  W        W       W",
    "W WWWWW W  WWWWW W  W",
    "W       W        W  W",
    "WWWWWWWWWWWWWWWWWWWWW",
    
    ];

    const map3 = [
        "WWWWWWWWWWWWWWWWWWFWW",
        "W    WWWW  WWWW    WW",
        "W WW    WW      WWWWW",
        "WWWWWWW WWW WWW     W",
        "W       WWW WWWWWWW W",
        "W WWWW WW   WWWWWWW W",
        "W    W WWWWWW    WW W",
        "W WW W W      WW WW W",
        "W WW W W WWWWWWW    W",
        "W  W WWW WWWW WWW WWW",
        "WW W        W     WWW",
        "W  WWWWWW  WWWWW WWWW",
        "W WW   WWW WWW      W",
        "W    W      WWWWWWW W",
        "WWWWWWSWWWWWWWWWWWWWW",
        
        ];

        const map4 = [
            "WWWWWWWWWWWWWWWWWWWFW",
            "WW    WWWWWW    WWW W",
            "WW WW WW     WW     W",
            "S WWW WW WWW WWWWWWWW",
            "W WWW    WWW      WWW",
            "W WWWWWWWWWW WWWW WWW",
            "W         WW    W  WW",
            "WWWWWWW W WW WWWWW WW",
            "W    WW W  W    WW WW",
            "W WW    WWWWWWW WW WW",
            "W WWWWWWW       WW  W",
            "W      WWWW WWW WWW W",
            "W WWWW WWWW WWW WW WW",
            "W           WWW    WW",
            "WWWWWWWWWWWWWWWWWWWWW",
        
        ];

        let lab = [
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


const mapLab = document.getElementById('container');
const body = document.getElementsByTagName('body');
const blackBlackground = document.getElementById('black-blackground');
let mapaAtual = 0;
let control = false;
let index = '9/0'

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
                wall.classList.add('wall')
               
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
addPlayer();







let boxTop = 50;
let boxLeft = 25;

document.addEventListener('keydown', (event) => {

    
    const keyName = event.key;

    if(control === true){

    if(keyName === 'ArrowDown'){
       

        let player = []

        let lineOfS = 0
        lab.forEach(function (element){
            if(element.split("").includes("S")){
                player[0] = element.indexOf("S")
                player[1] = lineOfS

                
            }
            lineOfS ++;
        }) 

        
        const move = document.getElementById(`${player[1] + 1}/${player[0]}`)
        
            if(lab[player[1] + 1][player[0]] === ' '){

                const playerAtual = document.getElementById('player')

                

                move.appendChild(playerAtual)

                let changeLineOne = lab[player[1]].split('')
                let changeLineTwo = lab[player[1] + 1].split('')
                changeLineTwo[player[0]] = 'S'
                changeLineOne[player[0]] = ' '
                changeLineOne = changeLineOne.join("")
                changeLineTwo = changeLineTwo.join("")
               
                lab[player[1]] = changeLineOne
                lab[player[1] + 1] = changeLineTwo
                
            }

    }
    if(keyName === 'ArrowUp'){
       

        let player = []

        let lineOfS = 0
        lab.forEach(function (element){
            if(element.split("").includes("S")){
                player[0] = element.indexOf("S")
                player[1] = lineOfS

                
            }
            lineOfS ++;
        }) 

        
        const move = document.getElementById(`${player[1] - 1}/${player[0]}`)
        
            if(lab[player[1] - 1][player[0]] === ' '){

                const playerAtual = document.getElementById('player')

                

                move.appendChild(playerAtual)

                let changeLineOne = lab[player[1]].split('')
                let changeLineTwo = lab[player[1] - 1].split('')
                changeLineTwo[player[0]] = 'S'
                changeLineOne[player[0]] = ' '
                changeLineOne = changeLineOne.join("")
                changeLineTwo = changeLineTwo.join("")
               
                lab[player[1]] = changeLineOne
                lab[player[1] - 1] = changeLineTwo
                
            }

            if(lab[player[1] - 1][player[0]] === 'F'){

                if(mapaAtual === 2){
                    const kaido = document.getElementById('quarto-mapa');
                    kaido.classList.remove('hidden');
                    lab = map4;
                    
                    const mapName = document.getElementById('name-map')
                    mapName.textContent = 'WANO'

                    const imgMachine = document.getElementById('img-machine')
                    imgMachine.src = 'images/kaido.png'

                    const nameMachine = document.getElementById('name-machine')
                    nameMachine.textContent = 'KAIDO'

                    const imgPlayer = document.getElementById('img-player')
                    imgPlayer.src = 'images/luffygearfour.png'

                    const namePlayer = document.getElementById('name-player')
                    namePlayer.textContent = 'MONKEY D. LUFFY'
                }
                if(mapaAtual === 3){
                    const op = document.getElementById('one-piece');
                    op.classList.remove('hidden');
                    lab = map;
                   
                }


                control = false
                mapaAtual ++;
                
                blackBlackground.classList.remove('hidden');
                

            }

    }


    if(keyName === 'ArrowRight'){
        
        let player = []

        let lineOfS = 0
        lab.forEach(function (element){
            if(element.split("").includes("S")){
                player[0] = element.indexOf("S")
                player[1] = lineOfS

                
            }
            lineOfS ++;
        }) 

        
        const move = document.getElementById(`${player[1]}/${player[0] + 1}`)
        
            if(lab[player[1]][player[0] + 1] === ' '){

                const playerAtual = document.getElementById('player');

                

                move.appendChild(playerAtual);

                let change = lab[player[1]].split('');
                change[player[0] + 1] = 'S';
                change[player[0]] = ' ';
                change = change.join("");
                
                lab[player[1]] = change ;
                
            }

            if(lab[player[1]][player[0] + 1] === 'F'){

                if(mapaAtual === 0){
                    const enel = document.getElementById('segundo-mapa');
                    enel.classList.remove('hidden');
                    lab = map2;
                    
                    const mapName = document.getElementById('name-map')
                    mapName.textContent = 'SKYPIEA'

                    const imgMachine = document.getElementById('img-machine')
                    imgMachine.src = 'images/enel.png'

                    const nameMachine = document.getElementById('name-machine')
                    nameMachine.textContent = 'ENEL'

                    const imgPlayer = document.getElementById('img-player')
                    imgPlayer.src = 'images/luffy2.png'
                }
                if(mapaAtual === 1){
                    const enel = document.getElementById('terceiro-mapa');
                    enel.classList.remove('hidden');
                    lab = map3;

                    const mapName = document.getElementById('name-map')
                    mapName.textContent = 'ELBAF'
                    
                    const imgMachine = document.getElementById('img-machine')
                    imgMachine.src = 'images/mihawk.png'

                    const nameMachine = document.getElementById('name-machine')
                    nameMachine.textContent = 'MIHAWK'

                    const imgPlayer = document.getElementById('img-player')
                    imgPlayer.src = 'images/zorao.png'
                    

                    const namePlayer = document.getElementById('name-player')
                    namePlayer.textContent = 'RORONOA ZORO'
                }


                control = false
                mapaAtual ++;
                
                blackBlackground.classList.remove('hidden');
                

            }
        
    }
    if(keyName === 'ArrowLeft'){
        

        let player = []

        let lineOfS = 0
        lab.forEach(function (element){
            if(element.split("").includes("S")){
                player[0] = element.indexOf("S")
                player[1] = lineOfS

                
            }
            lineOfS ++;
        }) 

        
        const move = document.getElementById(`${player[1]}/${player[0] - 1}`)
        
            if(lab[player[1]][player[0] - 1] === ' '){

                const playerAtual = document.getElementById('player')

                

                move.appendChild(playerAtual)

                let change = lab[player[1]].split('')
                change[player[0] - 1] = 'S'
                change[player[0]] = ' '
                change = change.join("")
                
                lab[player[1]] = change 
                
            }
    }
}

    
  });




  const btStart = document.getElementById('bt-start')
  btStart.addEventListener('click', function(){
      
    
    blackBlackground.classList.add('hidden')

    const openGame = document.getElementById('opengame')
    openGame.classList.add('hidden')
    control = true;
  })



  const btContinuarEnel = document.getElementById('bt-continuar-enel')
  btContinuarEnel.addEventListener('click', function(){
    mapLab.innerHTML = " "

    lineLab(map2);
    addPlayer();
    control = true;
    blackBlackground.classList.add('hidden');
    const enel = document.getElementById('segundo-mapa');
    enel.classList.add('hidden');
  })


  const btContinuarMihawk = document.getElementById('bt-continuar-mihawk')
  btContinuarMihawk.addEventListener('click', function(){
    mapLab.innerHTML = " "

    lineLab(map3);
    addPlayer();
    control = true;
    blackBlackground.classList.add('hidden');
    const mihawk = document.getElementById('terceiro-mapa');
    mihawk.classList.add('hidden');
  })




  const btContinuarKaido = document.getElementById('bt-continuar-kaido')
  btContinuarKaido.addEventListener('click', function(){
      mapLab.innerHTML = " "

    lineLab(map4);
    addPlayer();
    control = true;
    blackBlackground.classList.add('hidden');
    const kaido = document.getElementById('quarto-mapa');
    kaido.classList.add('hidden');
  })




  const btPlayAgain = document.getElementById('bt-jogar-novamente')
  btPlayAgain.addEventListener('click', function(){
      

    location.reload();
    
  })