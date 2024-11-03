let dieNum = 0;
function diceRoll(){
    let die = document.getElementById('die');
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    min = parseInt(min);
    max = parseInt(max);
    let answer = Math.floor(Math.random() * (max - min + 1)) + min;
    if(min > max){
        alert('Min must be lower than Max')
        document.getElementById('cap').innerHTML = 'Roll to start';
        return;
    }
    if(min < 1){
        alert('Min must be higher than 0');
        document.getElementById('cap').innerHTML = 'Roll to start';
        return;
    }
    if(max > 20){
        alert('Max must be lower than 20');
        document.getElementById('cap').innerHTML = 'Roll to start';
        return;
    }
    if(isNaN(min) || isNaN(max)){
        alert('Please insert numbers');
        document.getElementById('cap').innerHTML = 'Roll to start';
        return;
    }
    document.getElementById('cap').innerHTML = 'Rolling.';
    sleep(400).then(() => {document.getElementById('cap').innerHTML = 'Rolling..';})
    sleep(800).then(() => {document.getElementById('cap').innerHTML = 'Rolling...';})
    sleep(1200).then(() => {document.getElementById('cap').innerHTML = 'Done!';})
    switch(answer){
        case 1:
            sleep(1200).then(() => {die.src = 'dice/d20/one.png'});
            break;
        case 2:
            sleep(1200).then(() => {die.src = 'dice/d20/two.png'});
            break;
        case 3:
            sleep(1200).then(() => {die.src = 'dice/d20/three.png'});
            break;
        case 4:
            sleep(1200).then(() => {die.src = 'dice/d20/four.png'});
            break;
        case 5:
            sleep(1200).then(() => {die.src = 'dice/d20/five.png'});
            break;
        case 6:
            sleep(1200).then(() => {die.src = 'dice/d20/six.png'});
            break;
        case 7:
            sleep(1200).then(() => {die.src = 'dice/d20/seven.png'});
            break;
        case 8:
            sleep(1200).then(() => {die.src = 'dice/d20/eight.png'});
            break;
        case 9:
            sleep(1200).then(() => {die.src = 'dice/d20/nine.png'});
            break;
        case 10:
            sleep(1200).then(() => {die.src = 'dice/d20/ten.png'});
            break;
        case 11:
            sleep(1200).then(() => {die.src = 'dice/d20/eleven.png'});
            break;
        case 12:
            sleep(1200).then(() => {die.src = 'dice/d20/twelve.png'});
            break;
        case 13:
            sleep(1200).then(() => {die.src = 'dice/d20/thirteen.png'});
            break;
        case 14:
            sleep(1200).then(() => {die.src = 'dice/d20/fourteen.png'});
            break;
        case 15:
            sleep(1200).then(() => {die.src = 'dice/d20/fifteen.png'});
            break;
        case 16:
            sleep(1200).then(() => {die.src = 'dice/d20/sixteen.png'});
            break;
        case 17:
            sleep(1200).then(() => {die.src = 'dice/d20/seventeen.png'});
            break;
        case 18:
            sleep(1200).then(() => {die.src = 'dice/d20/eighteen.png'});
            break;
        case 19:
            sleep(1200).then(() => {die.src = 'dice/d20/nineteen.png'});
            break;
        case 20:
            sleep(1200).then(() => {die.src = 'dice/d20/twenty.png'});
            break;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}

function clearOut(){
    document.getElementById('max').value = '';
    document.getElementById('min').value = '';
    document.getElementById('die').src = 'dice/d20/twenty.png';
}

function clearChar(){
    document.body.className = 'default';
    document.getElementById('customButt').style.display = 'block';
    document.getElementById('customClear').style.display = 'none';
    document.getElementById('race').innerHTML = `Race: ???`
    document.getElementById('subrace').innerHTML = `Subrace: ???`
    document.getElementById('class').innerHTML = `Class: ???`
    document.getElementById('subclass').innerHTML = `Subclass: ???`
    document.getElementById('backG').innerHTML = `Background: ???`
    document.getElementById('body').innerHTML = `Body Type: ???`
    document.getElementById('logo').src = 'misc/bg3.png';
    document.getElementById('dark').style.display = 'none';
}

function customChar(){
    document.getElementById('customButt').style.display = 'none';
    let x = Math.random();
    let urge = x < 1.2;
    if(urge){
        document.body.className = 'darkUrge';
        document.getElementById('logo').src = 'misc/Dark.png';
        document.getElementById('dark').style.display = 'block';
    }else{
        document.body.className = 'default';
        document.getElementById('dark').style.display = 'none';
    }
    raceArr = ['Elf', 'Tiefling', 'Drow', 'Human', 'Githyanki', 'Dwarf', 'Half-Elf', 'Halfing', 'Gnome', 'Dragonborn', 'Half-Orc']
    bodyArr = [['Male 1', 'Female 1', 'Male 2', 'Female 2'],
             ['Male 1', 'Female 1', 'Male 2', 'Female 2'],
             ['Male 1', 'Female 1', 'Male 2', 'Female 2'],
             ['Male 1', 'Female 1', 'Male 2', 'Female 2'],
             ['Male', 'Female'],
             ['Male', 'Female'],
             ['Male 1', 'Female 1', 'Male 2', 'Female 2'],
             ['Male', 'Female'],
             ['Male', 'Female'],
             ['Male', 'Female'],
             ['Male', 'Female']]

    subraceArr =[['High Elf', 'Wood Elf'], 
                ['Asmodeus Tiefling', 'Mephistopheles Tiefling', 'Zariel Tiefling'],
                ['Lolth-Sworn Drow', 'Seldarine Drow'],
                ['N/A'],
                ['N/A'],
                ['Gold Dwarf', 'Shield Dwarf', 'Duergar'],
                ['High Half-Elf', 'Wood Half-Elf', 'Drow Half-Elf'],
                ['Lightfoot Halfling', 'Strongheart Halfling'],
                ['Rock Gnome', 'Forest Gnome', 'Deep Gnome'],
                ['Black Dragonborn', 'Blue Dragonborn', 'Copper Dragonborn', 'Gold Dragonborn', 'Green Dragonborn', 'Red Dragonborn', 'Brass Dragonborn', 'Bronze Dragonborn', 'Silver Dragonborn', 'White Dragonborn'],
                ['N/A']]
    race = Math.floor(Math.random() * raceArr.length);
    body = Math.floor(Math.random() * bodyArr[race].length);
    subrace = Math.floor(Math.random() * subraceArr[race].length);
    sleep(500).then(() => {document.getElementById('race').innerHTML = `Race: ${raceArr[race]}`});
    sleep(1000).then(() => {document.getElementById('subrace').innerHTML = `Subrace: ${subraceArr[race][subrace]}`});
    sleep(1500).then(() => {document.getElementById('body').innerHTML = `Body Type: ${bodyArr[race][body]}`})
    classArr = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
    subclassArr = [['Wildheart', 'Berserker', 'Wild Magic'],
                ['Lore', 'Valour', 'Swords'],
                ['Life', 'Light', 'Trickery', 'Knowledge', 'Nature', 'Tempest', 'War'],
                ['Circle of the Land', 'Circle of the Moon', 'Circle of Spores'],
                ['Battle Master', 'Eldritch Knight', 'Champion'],
                ['Way of the Four Elements', 'Way of the Open Hand', 'Way of the Shadow'],
                ['Oath of the Ancients', 'Oath of Devotion', 'Oath of Vengeance'],
                ['Beast Master', 'Gloom Stalker', 'Hunter'],
                ['Thief', 'Arcane Trickster', 'Assassin'],
                ['Wild Magic', 'Draconic Bloodline', 'Storm Sorcery'],
                ['The Fiend', 'The Great Old One', 'The Archfey'],
                ['Abjuration', 'Evocation', 'Necromancy', 'Conjuration', 'Enchantment', 'Divination', 'Illusion', 'Transmutation']];
    class_ = Math.floor(Math.random() * classArr.length);
    subclass = Math.floor(Math.random() * subclassArr[class_].length);
    sleep(2000).then(() => {document.getElementById('class').innerHTML = `Class: ${classArr[class_]}`});
    sleep(2500).then(() => {document.getElementById('subclass').innerHTML = `Subclass: ${subclassArr[class_][subclass]}`});

    backArr = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Noble', 'Outlander', 'Sage', 'Soldier', 'Urchin'];
    
    
    sleep(3000).then(() => {
        if(urge){
            document.getElementById('backG').innerHTML = `Background: The Haunted One`;
        }else{
            back = Math.floor(Math.random() * backArr.length);
            document.getElementById('backG').innerHTML = `Background: ${backArr[back]}`
        }});

        sleep(3000).then(() => {document.getElementById('customClear').style.display = 'block'})  
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}

function choiceRoll(){
    document.getElementById('custom').style.display = 'none';
    document.getElementById('other').style.display = 'none';
    document.getElementById('choice').style.display = 'block';
    document.getElementById('minMax').style.display = 'inline-flex';
    document.getElementById('choiceButt').style.backgroundColor = 'antiquewhite';
    document.getElementById('choiceButt').style.color = 'black';
    document.getElementById('randomButt').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('randomButt').style.color = 'antiquewhite';
    document.getElementById('otherButt').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('otherButt').style.color = 'antiquewhite';
}

function randomChar(){
    document.getElementById('choice').style.display = 'none';
    document.getElementById('other').style.display = 'none';
    document.getElementById('custom').style.display = 'block';
    document.getElementById('randomButt').style.backgroundColor = 'antiquewhite';
    document.getElementById('randomButt').style.color = 'black';
    document.getElementById('choiceButt').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('choiceButt').style.color = 'antiquewhite';
    document.getElementById('otherButt').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('otherButt').style.color = 'antiquewhite';
}

function otherDice(){
    document.getElementById('choice').style.display = 'none';
    document.getElementById('other').style.display = 'block';
    document.getElementById('custom').style.display = 'none';
    document.getElementById('otherButt').style.backgroundColor = 'antiquewhite';
    document.getElementById('otherButt').style.color = 'black';
    document.getElementById('choiceButt').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('choiceButt').style.color = 'antiquewhite';
    document.getElementById('randomButt').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('randomButt').style.color = 'antiquewhite';
}

function dFour(){
    dieNum = 4;
    document.getElementById('die2').src = 'dice/d4/four.png'
    document.getElementById('die2').style.visibility = 'visible';
}

function dSix(){
    dieNum = 6;
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d6/six.png'
}

function dEight(){
    dieNum = 8;
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d8/eight.png'
}

function dTen(){
    dieNum = 10;
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d10/ten.png'
}

function dTwelve(){
    dieNum = 12;
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d12/twelve.png'
}

function dTwenty(){
    dieNum = 20;
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d20/twenty.png'
}

function otherRoll(){
    document.getElementById('otherTitle').innerHTML = 'Rolling.';
    sleep(400).then(() => {document.getElementById('otherTitle').innerHTML = 'Rolling..';});
    sleep(800).then(() => {document.getElementById('otherTitle').innerHTML = 'Rolling...';});
    sleep(1200).then(() => {document.getElementById('otherTitle').innerHTML = 'Done!';});
    
    if(dieNum === 4){
        let answer = Math.floor(Math.random() * 4) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d4/one.png'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d4/two.png'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d4/three.png'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d4/four.png'});
                break;
    }
    return;
    }
    else if(dieNum === 6){
        let answer = Math.floor(Math.random() * 6) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d6/one.png'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d6/two.png'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d6/three.png'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d6/four.png'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d6/five.png'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d6/six.png'});
                break;
        } 
        return;
    }
    else if(dieNum === 8){
        let answer = Math.floor(Math.random() * 8) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d8/one.png'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d8/two.png'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d8/three.png'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d8/four.png'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d8/five.png'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d8/six.png'});
                break;
            case 7:
                sleep(1200).then(() => {die.src = 'dice/d8/seven.png'});
                break;
            case 8:
                sleep(1200).then(() => {die.src = 'dice/d8/eight.png'});
                break;
        }
        return;
    }
    else if(dieNum === 10){
        let answer = Math.floor(Math.random() * 10) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d10/one.png'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d10/two.png'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d10/three.png'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d10/four.png'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d10/five.png'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d10/six.png'});
                break;
            case 7:
                sleep(1200).then(() => {die.src = 'dice/d10/seven.png'});
                break;
            case 8:
                sleep(1200).then(() => {die.src = 'dice/d10/eight.png'});
                break;
            case 9:
                sleep(1200).then(() => {die.src = 'dice/d10/nine.png'});
                break;
            case 10:
                sleep(1200).then(() => {die.src = 'dice/d10/ten.png'});
                break;
        }
        return;
    }
    else if(dieNum === 12){
        let answer = Math.floor(Math.random() * 12) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d12/one.png'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d12/two.png'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d12/three.png'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d12/four.png'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d12/five.png'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d12/six.png'});
                break;
            case 7:
                sleep(1200).then(() => {die.src = 'dice/d12/seven.png'});
                break;
            case 8:
                sleep(1200).then(() => {die.src = 'dice/d12/eight.png'});
                break;
            case 9:
                sleep(1200).then(() => {die.src = 'dice/d12/nine.png'});
                break;
            case 10:
                sleep(1200).then(() => {die.src = 'dice/d12/ten.png'});
                break;
            case 11:
                sleep(1200).then(() => {die.src = 'dice/d12/eleven.png'});
                break;
            case 12:
                sleep(1200).then(() => {die.src = 'dice/d12/twelve.png'});
                break;
        }
        return;
    }
    else if(dieNum === 20){
        let answer = Math.floor(Math.random() * 20) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d20/one.png'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d20/two.png'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d20/three.png'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d20/four.png'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d20/five.png'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d20/six.png'});
                break;
            case 7:
                sleep(1200).then(() => {die.src = 'dice/d20/seven.png'});
                break;
            case 8:
                sleep(1200).then(() => {die.src = 'dice/d20/eight.png'});
                break;
            case 9:
                sleep(1200).then(() => {die.src = 'dice/d20/nine.png'});
                break;
            case 10:
                sleep(1200).then(() => {die.src = 'dice/d20/ten.png'});
                break;
            case 11:
                sleep(1200).then(() => {die.src = 'dice/d20/eleven.png'});
                break;
            case 12:
                sleep(1200).then(() => {die.src = 'dice/d20/twelve.png'});
                break;
            case 13:
                sleep(1200).then(() => {die.src = 'dice/d20/thirteen.png'});
                break;
            case 14:
                sleep(1200).then(() => {die.src = 'dice/d20/fourteen.png'});
                break;
            case 15:
                sleep(1200).then(() => {die.src = 'dice/d20/fifteen.png'});
                break;
            case 16:
                sleep(1200).then(() => {die.src = 'dice/d20/sixteen.png'});
                break;
            case 17:
                sleep(1200).then(() => {die.src = 'dice/d20/seventeen.png'});
                break;
            case 18:
                sleep(1200).then(() => {die.src = 'dice/d20/eighteen.png'});
                break;
            case 19:
                sleep(1200).then(() => {die.src = 'dice/d20/nineteen.png'});
                break;
            case 20:
                sleep(1200).then(() => {die.src = 'dice/d20/twenty.png'});
                break;
        }
        return;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}