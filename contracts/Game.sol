// SPDX-License-Identifier: MIT
pragma solidity >=0.4.16 <0.9.0;

contract Game {
    // We can't  get the player count in solidity
    uint public playerCount = 0;

    //Creating an array things in Players
    // Player[] public Players;

    // Using mapping 
    mapping(address => Player) public Players;
    

    enum Level{ Novince, Intermediate, Advanced}

    // Creating a struct that contains some certains things
    struct Player {
        address playerAddress;
        string firstName;
        Level playerLevel;
        string lastName;
    }

    // Adding the memory that get it from memory
    function addPlayer(string memory firstName, string memory lastName) public {
        // Players.push(Player(firstName,Level.Advanced,lastName));
        Players[msg.sender] = Player(msg.sender, firstName, Level.Advanced, lastName);
        playerCount += 1;
    }

    function getPlayerLevel(address playerAddress) public view returns (Level) {
        return Players[playerAddress].playerLevel;
    }
}