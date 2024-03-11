function diceRoll(){
    let die = document.getElementById('die');
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    min = parseInt(min);
    max = parseInt(max);
    let answer = Math.floor(Math.random() * (max - min + 1)) + min;
    if(min > max){
        alert('Min must be lower than Max')
        return;
    }
    if(min < 1){
        alert('Min must be higher than 0');
        return;
    }
    if(max > 20){
        alert('Max must be lower than 20');
        return;
    }
    if(isNaN(min) || isNaN(max)){
        alert('Please insert numbers');
        return;
    }
    switch(answer){
        case 1:
            die.src = 'dice/one.jpg';
            break;
        case 2:
            die.src = 'dice/two.jpg';
            break;
        case 3:
            die.src = 'dice/three.jpg';
            break;
        case 4:
            die.src = 'dice/four.jpg';
            break;
        case 5:
            die.src = 'dice/five.jpg';
            break;
        case 6:
            die.src = 'dice/six.jpg';
            break;
        case 7:
            die.src = 'dice/seven.jpg';
            break;
        case 8:
            die.src = 'dice/eight.jpg';
            break;
        case 9:
            die.src = 'dice/nine.jpg';
            break;
        case 10:
            die.src = 'dice/ten.jpg';
            break;
        case 11:
            die.src = 'dice/eleven.jpg';
            break;
        case 12:
            die.src = 'dice/twelve.jpg';
            break;
        case 13:
            die.src = 'dice/thirteen.jpg';
            break;
        case 14:
            die.src = 'dice/fourteen.jpg';
            break;
        case 15:
            die.src = 'dice/fifteen.jpg';
            break;
        case 16:
            die.src = 'dice/sixteen.jpg';
            break;
        case 17:
            die.src = 'dice/seventeen.jpg';
            break;
        case 18:
            die.src = 'dice/eighteen.jpg';
            break;
        case 19:
            die.src = 'dice/nineteen.jpg';
            break;
        case 20:
            die.src = 'dice/twenty.jpg';
            break;
    }
}

function clearOut(){
    document.getElementById('max').value = '';
    document.getElementById('min').value = '';
    document.getElementById('die').src = 'dice/twenty.jpg';
}