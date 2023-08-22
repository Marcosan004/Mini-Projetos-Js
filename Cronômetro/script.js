var sec=0

function start(){
    setInterval(watch,1000)
}

function pause(){
    console.log('pausou')
}

function stop(){
    console.log('parou')
}

function watch(){
    sec++
    document.getElementById('watch').innerText=sec
}