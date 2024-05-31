/*
Aassessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
const NFTStore = [];
let nextId = 1; // Unique ID for each NFT

// Function to mint an NFT
function mintNFT(_name, _species, _age, _magicalPower, _habitat) {
  const nft = {
    id: nextId++,
    name: _name,
    species: _species,
    age: _age,
    magicalPower: _magicalPower,
    habitat: _habitat,
    creationDate: new Date().toISOString(),
  };
  NFTStore.push(nft);
  console.log(`${_name} the ${_species} Minted | ID -> ${nft.id}`);
}

// Function to list all NFTs
function listNFTs() {
  console.log("\nListing all minted Magical Creatures:\n");
  NFTStore.forEach((nft) => {
    console.log(`NFT ID: ${nft.id}`);
    console.log(`Name: ${nft.name}`);
    console.log(`Species: ${nft.species}`);
    console.log(`Age: ${nft.age}`);
    console.log(`Magical Power: ${nft.magicalPower}`);
    console.log(`Habitat: ${nft.habitat}`);
    console.log(`Creation Date: ${nft.creationDate}`);
    console.log("\n");
  });
  console.log("These are all the minted Magical Creatures so far!\n");
}

// Function to get the total supply of NFTs
function getTotalSupply() {
  console.log(`Total number of minted Magical Creatures: ${NFTStore.length}`);
}

// Call your functions below this line
mintNFT("Firagon", "Dragon", 150, "Fire Breath", "Volcanic Mountains");
mintNFT("Merlin", "Wizard", 300, "Spell Casting", "Ancient Forests");
mintNFT("Selkie", "Selkie", 85, "Shape-shifting", "Ocean Shores");
listNFTs();
getTotalSupply();
