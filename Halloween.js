let promptList = [{name: "Abominable Snowman", description: ""},
    {name: "Alien", description: ""},
    {name:"Ammit", description: ""},
    {name:"Angelic Abomination", description: ""},
    {name:"Animatronic", description: ""},
    {name:"Baba Yaga", description: ""},
    {name:"Banshee", description: ""},
    {name:"Bat Wings", description: ""},
    {name:"Beauty & the Beast", description: ""},
    {name:"Bedsheet Ghost", description: ""},
    {name:"Belly Mouth", description: ""},
    {name:"Bigfoot", description: ""},
    {name:"Black Widow", description: ""},
    {name:"Bloody Mary", description: ""},
    {name:"Boogie Man", description: ""},
    {name:"Brain"},
    {name:"Brain & Brawn"},
    {name:"Bugbear"},
    {name:"Butler/Maid"},
    {name:"Candle"},
    {name:"Candy Witch"},
    {name:"Cat"},
    {name:"Cenobite"},
    {name:"Chained"},
    {name:"Chimera"},
    {name:"Chupacabra"},
    {name:"Clockwork"},
    {name:"Cockatrice"},
    {name:"Costumn"},
    {name:"Covered in Plants"},
    {name:"Creepy Kid"},
    {name:"Cthulhu"},
    {name:"Cyclops"},
    {name:"Death"},
    {name:"Deer"},
    {name:"Devil"},
    {name:"Dolphin"},
    {name:"Doppelganger"},
    {name:"Dragon"},
    {name:"Dr Jekyll & Mr Hyde"},
    {name:"Dullahan"},
    {name:"El Sulbón"},
    {name:"Elder God"},
    {name:"Electric Spirit"},
    {name:"Empty Eye Sockets"},
    {name:"Evil Overlord"},
    {name:"Exposed Organs"},
    {name:"Eyeball Plant"},
    {name:"Eye Stalks"},
    {name:"Fairy"},
    {name:"Fish Humanoid"}, 
    {name:"Flaming Skull"},
    {name:"Flatwoods Monster"},
    {name:"The Fly"},
    {name:"Fortune Teller"},
    {name:"Frankenstein"},
    {name:"Freak Show Attraction"},
    {name:"From Outerspace"},
    {name:"Gargoyle"},
    {name:"Ghost"},
    {name:"Glowing"},
    {name:"Gnoll"},
    {name:"Goatman"},
    {name:"Golem"},
    {name:"Greedy"},
    {name:"Gremlin"},
    {name:"Griffin"},
    {name:"Hairy"},
    {name:"Harpy"},
    {name:"Hastur"},
    {name:"Haunted Armor"},
    {name:"Haunted Tree"},
    {name:"Haunted Vehicle"},
    {name:"Headless Horseman"},
    {name:"Heart"},
    {name:"Hellhound"},
    {name:"Hell’s Cook"},
    {name:"Hide-Behind"},
    {name:"Hitchhiker"},
    {name:"Hocus (Witchs Hat)"},
    {name:"Homunculus"},
    {name:"Horns"},
    {name:"Horror Host"},
    {name:"Horseman of the Apocalypse"},
    {name:"Insect"},
    {name:"Invisible"},
    {name:"Iron Maiden"},
    {name:"Jabberwocky"},
    {name:"Jarjacha"},
    {name:"Jersey Devil"},
    {name:"Jiang-shi"},
    {name:"Kaiju"},
    {name:"Kappa"},
    {name:"Karakasa"},
    {name:"Killer"},
    {name:"Kitsune"},
    {name:"Kobold"},
    {name:"Kraken"},
    {name:"Krampus"},
    {name:"La Llorona"},
    {name:"Living Location"},
    {name:"Living Shadow"},
    {name:"Living Statue"},
    {name:"Loch Ness Monster"},
    {name:"Long"},
    {name:"Lovers"},
    {name:"Lure"},
    {name:"Mad Scientist"},
    {name:"Maneating Plant"},
    {name:"Manticore"},
    {name:"Mapinguari"},
    {name:"Mimic"},
    {name:"Minotaur"},
    {name:"Mole Men"},
    {name:"Moloch"},
    {name:"Monster Biker"},
    {name:"Moon"},
    {name:"Moth Man"},
    {name:"Mummy"},
    {name:"Mushroom Creature"},
    {name:"Naga"},
    {name:"Necromancer"},
    {name:"Nervous System"},
    {name:"Nuckelavee"},
    {name:"Old Cartoon"},
    {name:"Oni"},
    {name:"Owl"},
    {name:"Painting"},
    {name:"Pandora’s Box"},
    {name:"Parasite"},
    {name:"Phantom of the Opera"},
    {name:"Pig"},
    {name:"Plague Doctor"},
    {name:"Pocus (Witches Cauldron)"},
    {name:"Pollution Monster"},
    {name:"Poltergeist"},
    {name:"Possessed Doll"},
    {name:"Pumpkin"},
    {name:"Rat"},
    {name:"Raven/Crow"},
    {name:"Rawhead and Bloody Bones"},
    {name:"Robot"},
    {name:"Roundabout Mouth"},
    {name:"Scarecrow"},
    {name:"Sea Monster"},
    {name:"Shark"},
    {name:"Sharp Claws"},
    {name:"Sirenhead"},
    {name:"Skeleton"},
    {name:"Slenderman"},
    {name:"Slime"},
    {name:"Slit Mouth Woman"},
    {name:"Smile Dog"},
    {name:"Spider"},
    {name:"Spring Heel Jack"},
    {name:"Stego Spines"},
    {name:"Stingy Jack"},
    {name:"Succubus/Inccubus"},
    {name:"Swamp Creature"},
    {name:"Sweet Fiends"},
    {name:"Tentacles"},
    {name:"Test Tube Creature"},
    {name:"Toad"},
    {name:"Toilet Monster"},
    {name:"Too Many Eyes"},
    {name:"Too Many Teeth"},
    {name:"Troll"},
    {name:"Tsuchinoko"},
    {name:"Two Headed"},
    {name:"Umi-Bozu"},
    {name:"Vampire"},
    {name:"Voodoo Doll"},
    {name:"Walking Head"},
    {name:"Werewolf"},
    {name:"Will-o’-the-Wisp"},
    {name:"Witch"},
    {name:"Worm"},
    {name:"Yog-Sothoth"},
    {name:"Yokai"},
    {name:"Zombie"},]

function random(prompts) {
    let n = Math.floor(Math.random() * (prompts.length))
    console.log(n)
    document.getElementById("prompt").innerHTML=prompts[n].name
    document.getElementById("Description").innerHTML=prompts[n].description
}
