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
            sleep(1200).then(() => {die.src = 'dice/d20/one.jpg'});
            break;
        case 2:
            sleep(1200).then(() => {die.src = 'dice/d20/two.jpg'});
            break;
        case 3:
            sleep(1200).then(() => {die.src = 'dice/d20/three.jpg'});
            break;
        case 4:
            sleep(1200).then(() => {die.src = 'dice/d20/four.jpg'});
            break;
        case 5:
            sleep(1200).then(() => {die.src = 'dice/d20/five.jpg'});
            break;
        case 6:
            sleep(1200).then(() => {die.src = 'dice/d20/six.jpg'});
            break;
        case 7:
            sleep(1200).then(() => {die.src = 'dice/d20/seven.jpg'});
            break;
        case 8:
            sleep(1200).then(() => {die.src = 'dice/d20/eight.jpg'});
            break;
        case 9:
            sleep(1200).then(() => {die.src = 'dice/d20/nine.jpg'});
            break;
        case 10:
            sleep(1200).then(() => {die.src = 'dice/d20/ten.jpg'});
            break;
        case 11:
            sleep(1200).then(() => {die.src = 'dice/d20/eleven.jpg'});
            break;
        case 12:
            sleep(1200).then(() => {die.src = 'dice/d20/twelve.jpg'});
            break;
        case 13:
            sleep(1200).then(() => {die.src = 'dice/d20/thirteen.jpg'});
            break;
        case 14:
            sleep(1200).then(() => {die.src = 'dice/d20/fourteen.jpg'});
            break;
        case 15:
            sleep(1200).then(() => {die.src = 'dice/d20/fifteen.jpg'});
            break;
        case 16:
            sleep(1200).then(() => {die.src = 'dice/d20/sixteen.jpg'});
            break;
        case 17:
            sleep(1200).then(() => {die.src = 'dice/d20/seventeen.jpg'});
            break;
        case 18:
            sleep(1200).then(() => {die.src = 'dice/d20/eighteen.jpg'});
            break;
        case 19:
            sleep(1200).then(() => {die.src = 'dice/d20/nineteen.jpg'});
            break;
        case 20:
            sleep(1200).then(() => {die.src = 'dice/d20/twenty.jpg'});
            break;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}

function clearOut(){
    document.getElementById('max').value = '';
    document.getElementById('min').value = '';
    document.getElementById('die').src = 'dice/d20/twenty.jpg';
}

function customChar(){
    document.getElementById('race').innerHTML = `Race: ???`
    document.getElementById('subrace').innerHTML = `Subrace: ???`
    document.getElementById('class').innerHTML = `Class: ???`
    document.getElementById('subclass').innerHTML = `Subclass: ???`
    document.getElementById('backG').innerHTML = `Background: ???`
    document.getElementById('body').innerHTML = `Body Type: ???`
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
    back = Math.floor(Math.random() * backArr.length);
    sleep(3000).then(() => {document.getElementById('backG').innerHTML = `Background: ${backArr[back]}`});
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}

function choiceRoll(){
    document.getElementById('custom').style.display = 'none';
    document.getElementById('other').style.display = 'none';
    document.getElementById('choice').style.display = 'block';
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
    document.getElementById('d4').style.backgroundColor = 'antiquewhite';
    document.getElementById('d4').style.color = 'black';
    document.getElementById('d6').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d6').style.color = 'antiquewhite';
    document.getElementById('d8').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d8').style.color = 'antiquewhite';
    document.getElementById('d10').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d10').style.color = 'antiquewhite';
    document.getElementById('d12').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d12').style.color = 'antiquewhite';
    document.getElementById('d20').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d20').style.color = 'antiquewhite';
    document.getElementById('die2').src = 'dice/d4/four.jpg'
    document.getElementById('die2').style.visibility = 'visible';
}

function dSix(){
    document.getElementById('d6').style.backgroundColor = 'antiquewhite';
    document.getElementById('d6').style.color = 'black';
    document.getElementById('d4').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d4').style.color = 'antiquewhite';
    document.getElementById('d8').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d8').style.color = 'antiquewhite';
    document.getElementById('d10').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d10').style.color = 'antiquewhite';
    document.getElementById('d12').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d12').style.color = 'antiquewhite';
    document.getElementById('d20').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d20').style.color = 'antiquewhite';
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d6/six.jpg'
}

function dEight(){
    document.getElementById('d8').style.backgroundColor = 'antiquewhite';
    document.getElementById('d8').style.color = 'black';
    document.getElementById('d6').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d6').style.color = 'antiquewhite';
    document.getElementById('d4').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d4').style.color = 'antiquewhite';
    document.getElementById('d10').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d10').style.color = 'antiquewhite';
    document.getElementById('d12').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d12').style.color = 'antiquewhite';
    document.getElementById('d20').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d20').style.color = 'antiquewhite';
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d8/eight.jpg'
}

function dTen(){
    document.getElementById('d10').style.backgroundColor = 'antiquewhite';
    document.getElementById('d10').style.color = 'black';
    document.getElementById('d6').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d6').style.color = 'antiquewhite';
    document.getElementById('d8').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d8').style.color = 'antiquewhite';
    document.getElementById('d4').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d4').style.color = 'antiquewhite';
    document.getElementById('d12').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d12').style.color = 'antiquewhite';
    document.getElementById('d20').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d20').style.color = 'antiquewhite';
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d10/ten.jpg'
}

function dTwelve(){
    document.getElementById('d12').style.backgroundColor = 'antiquewhite';
    document.getElementById('d12').style.color = 'black';
    document.getElementById('d6').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d6').style.color = 'antiquewhite';
    document.getElementById('d8').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d8').style.color = 'antiquewhite';
    document.getElementById('d10').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d10').style.color = 'antiquewhite';
    document.getElementById('d4').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d4').style.color = 'antiquewhite';
    document.getElementById('d20').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d20').style.color = 'antiquewhite';
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d12/twelve.jpg'
}

function dTwenty(){
    document.getElementById('d20').style.backgroundColor = 'antiquewhite';
    document.getElementById('d20').style.color = 'black';
    document.getElementById('d6').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d6').style.color = 'antiquewhite';
    document.getElementById('d8').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d8').style.color = 'antiquewhite';
    document.getElementById('d10').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d10').style.color = 'antiquewhite';
    document.getElementById('d12').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d12').style.color = 'antiquewhite';
    document.getElementById('d4').style.backgroundColor = 'rgba(47,57,67,255)';
    document.getElementById('d4').style.color = 'antiquewhite';
    document.getElementById('die2').style.visibility = 'visible';
    document.getElementById('die2').src = 'dice/d20/twenty.jpg'
}

function otherRoll(){
    document.getElementById('otherTitle').innerHTML = 'Rolling.';
    sleep(400).then(() => {document.getElementById('otherTitle').innerHTML = 'Rolling..';});
    sleep(800).then(() => {document.getElementById('otherTitle').innerHTML = 'Rolling...';});
    sleep(1200).then(() => {document.getElementById('otherTitle').innerHTML = 'Done!';});
    
    if(document.getElementById('d4').style.backgroundColor === 'antiquewhite'){
        let answer = Math.floor(Math.random() * 4) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d4/one.jpg'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d4/two.jpg'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d4/three.jpg'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d4/four.jpg'});
                break;
    }
    return;
    }
    else if(document.getElementById('d6').style.backgroundColor === 'antiquewhite'){
        let answer = Math.floor(Math.random() * 6) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d6/one.jpg'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d6/two.jpg'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d6/three.jpg'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d6/four.jpg'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d6/five.jpg'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d6/six.jpg'});
                break;
        } 
        return;
    }
    else if(document.getElementById('d8').style.backgroundColor === 'antiquewhite'){
        let answer = Math.floor(Math.random() * 8) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d8/one.jpg'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d8/two.jpg'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d8/three.jpg'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d8/four.jpg'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d8/five.jpg'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d8/six.jpg'});
                break;
            case 7:
                sleep(1200).then(() => {die.src = 'dice/d8/seven.jpg'});
                break;
            case 8:
                sleep(1200).then(() => {die.src = 'dice/d8/eight.jpg'});
                break;
        }
        return;
    }
    else if(document.getElementById('d10').style.backgroundColor === 'antiquewhite'){
        let answer = Math.floor(Math.random() * 10) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d10/one.jpg'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d10/two.jpg'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d10/three.jpg'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d10/four.jpg'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d10/five.jpg'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d10/six.jpg'});
                break;
            case 7:
                sleep(1200).then(() => {die.src = 'dice/d10/seven.jpg'});
                break;
            case 8:
                sleep(1200).then(() => {die.src = 'dice/d10/eight.jpg'});
                break;
            case 9:
                sleep(1200).then(() => {die.src = 'dice/d10/nine.jpg'});
                break;
            case 10:
                sleep(1200).then(() => {die.src = 'dice/d10/ten.jpg'});
                break;
        }
        return;
    }
    else if(document.getElementById('d12').style.backgroundColor === 'antiquewhite'){
        let answer = Math.floor(Math.random() * 12) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d12/one.jpg'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d12/two.jpg'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d12/three.jpg'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d12/four.jpg'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d12/five.jpg'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d12/six.jpg'});
                break;
            case 7:
                sleep(1200).then(() => {die.src = 'dice/d12/seven.jpg'});
                break;
            case 8:
                sleep(1200).then(() => {die.src = 'dice/d12/eight.jpg'});
                break;
            case 9:
                sleep(1200).then(() => {die.src = 'dice/d12/nine.jpg'});
                break;
            case 10:
                sleep(1200).then(() => {die.src = 'dice/d12/ten.jpg'});
                break;
            case 11:
                sleep(1200).then(() => {die.src = 'dice/d12/eleven.jpg'});
                break;
            case 12:
                sleep(1200).then(() => {die.src = 'dice/d12/twelve.jpg'});
                break;
        }
        return;
    }
    else if(document.getElementById('d20').style.backgroundColor === 'antiquewhite'){
        let answer = Math.floor(Math.random() * 20) + 1;
        let die = document.getElementById('die2');
        switch(answer){
            case 1:
                sleep(1200).then(() => {die.src = 'dice/d20/one.jpg'});
                break;
            case 2:
                sleep(1200).then(() => {die.src = 'dice/d20/two.jpg'});
                break;
            case 3:
                sleep(1200).then(() => {die.src = 'dice/d20/three.jpg'});
                break;
            case 4:
                sleep(1200).then(() => {die.src = 'dice/d20/four.jpg'});
                break;
            case 5:
                sleep(1200).then(() => {die.src = 'dice/d20/five.jpg'});
                break;
            case 6:
                sleep(1200).then(() => {die.src = 'dice/d20/six.jpg'});
                break;
            case 7:
                sleep(1200).then(() => {die.src = 'dice/d20/seven.jpg'});
                break;
            case 8:
                sleep(1200).then(() => {die.src = 'dice/d20/eight.jpg'});
                break;
            case 9:
                sleep(1200).then(() => {die.src = 'dice/d20/nine.jpg'});
                break;
            case 10:
                sleep(1200).then(() => {die.src = 'dice/d20/ten.jpg'});
                break;
            case 11:
                sleep(1200).then(() => {die.src = 'dice/d20/eleven.jpg'});
                break;
            case 12:
                sleep(1200).then(() => {die.src = 'dice/d20/twelve.jpg'});
                break;
            case 13:
                sleep(1200).then(() => {die.src = 'dice/d20/thirteen.jpg'});
                break;
            case 14:
                sleep(1200).then(() => {die.src = 'dice/d20/fourteen.jpg'});
                break;
            case 15:
                sleep(1200).then(() => {die.src = 'dice/d20/fifteen.jpg'});
                break;
            case 16:
                sleep(1200).then(() => {die.src = 'dice/d20/sixteen.jpg'});
                break;
            case 17:
                sleep(1200).then(() => {die.src = 'dice/d20/seventeen.jpg'});
                break;
            case 18:
                sleep(1200).then(() => {die.src = 'dice/d20/eighteen.jpg'});
                break;
            case 19:
                sleep(1200).then(() => {die.src = 'dice/d20/nineteen.jpg'});
                break;
            case 20:
                sleep(1200).then(() => {die.src = 'dice/d20/twenty.jpg'});
                break;
        }
        return;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}