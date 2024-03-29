function diceRoll(){
    let die = document.getElementById('die');
    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;
    min = parseInt(min);
    max = parseInt(max);
    let answer = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('cap').innerHTML = 'Rolling.';
    sleep(400).then(() => {document.getElementById('cap').innerHTML = 'Rolling..';})
    sleep(800).then(() => {document.getElementById('cap').innerHTML = 'Rolling...';})
    sleep(1200).then(() => {document.getElementById('cap').innerHTML = 'Done!';})
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
            sleep(1200).then(() => {die.src = 'dice/one.jpg'});
            break;
        case 2:
            sleep(1200).then(() => {die.src = 'dice/two.jpg'});
            break;
        case 3:
            sleep(1200).then(() => {die.src = 'dice/three.jpg'});
            break;
        case 4:
            sleep(1200).then(() => {die.src = 'dice/four.jpg'});
            break;
        case 5:
            sleep(1200).then(() => {die.src = 'dice/five.jpg'});
            break;
        case 6:
            sleep(1200).then(() => {die.src = 'dice/six.jpg'});
            break;
        case 7:
            sleep(1200).then(() => {die.src = 'dice/seven.jpg'});
            break;
        case 8:
            sleep(1200).then(() => {die.src = 'dice/eight.jpg'});
            break;
        case 9:
            sleep(1200).then(() => {die.src = 'dice/nine.jpg'});
            break;
        case 10:
            sleep(1200).then(() => {die.src = 'dice/ten.jpg'});
            break;
        case 11:
            sleep(1200).then(() => {die.src = 'dice/eleven.jpg'});
            break;
        case 12:
            sleep(1200).then(() => {die.src = 'dice/twelve.jpg'});
            break;
        case 13:
            sleep(1200).then(() => {die.src = 'dice/thirteen.jpg'});
            break;
        case 14:
            sleep(1200).then(() => {die.src = 'dice/fourteen.jpg'});
            break;
        case 15:
            sleep(1200).then(() => {die.src = 'dice/fifteen.jpg'});
            break;
        case 16:
            sleep(1200).then(() => {die.src = 'dice/sixteen.jpg'});
            break;
        case 17:
            sleep(1200).then(() => {die.src = 'dice/seventeen.jpg'});
            break;
        case 18:
            sleep(1200).then(() => {die.src = 'dice/eighteen.jpg'});
            break;
        case 19:
            sleep(1200).then(() => {die.src = 'dice/nineteen.jpg'});
            break;
        case 20:
            sleep(1200).then(() => {die.src = 'dice/twenty.jpg'});
            break;
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}

function clearOut(){
    document.getElementById('max').value = '';
    document.getElementById('min').value = '';
    document.getElementById('die').src = 'dice/twenty.jpg';
}

function customChar(){
    document.getElementById('race').innerHTML = `Race: ???`
    document.getElementById('subrace').innerHTML = `Subrace: ???`
    document.getElementById('class').innerHTML = `Class: ???`
    document.getElementById('subclass').innerHTML = `Subclass: ???`
    document.getElementById('backG').innerHTML = `Background: ???`
    raceArr = ['Elf', 'Tiefling', 'Drow', 'Human', 'Githyanki', 'Dwarf', 'Half-Elf', 'Halfing', 'Gnome', 'Dragonborn', 'Half-Orc']
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
    subrace = Math.floor(Math.random() * subraceArr[race].length);
    sleep(500).then(() => {document.getElementById('race').innerHTML = `Race: ${raceArr[race]}`});
    sleep(1000).then(() => {document.getElementById('subrace').innerHTML = `Subrace: ${subraceArr[race][subrace]}`});

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
    sleep(1500).then(() => {document.getElementById('class').innerHTML = `Class: ${classArr[class_]}`});
    sleep(2000).then(() => {document.getElementById('subclass').innerHTML = `Subclass: ${subclassArr[class_][subclass]}`});

    backArr = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Noble', 'Outlander', 'Sage', 'Soldier', 'Urchin'];
    back = Math.floor(Math.random() * backArr.length);
    sleep(2500).then(() => {document.getElementById('backG').innerHTML = `Background: ${backArr[back]}`});
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
}