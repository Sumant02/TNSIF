document.getElementById("rollDiceBtn").addEventListener("click", function() {
    var diceImages = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
    
    var player1Name = document.getElementById("player1Name").value || "Player 01";
    var player2Name = document.getElementById("player2Name").value || "Player 02";
    var player3Name = document.getElementById("player3Name").value || "Player 03";
    
    document.getElementById("player1Label").textContent = player1Name;
    document.getElementById("player2Label").textContent = player2Name;
    document.getElementById("player3Label").textContent = player3Name;
    
    var player1Roll = Math.floor(Math.random() * 6) + 1;
    var player2Roll = Math.floor(Math.random() * 6) + 1;
    var player3Roll = Math.floor(Math.random() * 6) + 1;
    
    document.querySelector(".img1").setAttribute("src", diceImages[player1Roll - 1]);
    document.querySelector(".img2").setAttribute("src", diceImages[player2Roll - 1]);
    document.querySelector(".img3").setAttribute("src", diceImages[player3Roll - 1]);
    
    var rolls = [
        {name: player1Name, roll: player1Roll},
        {name: player2Name, roll: player2Roll},
        {name: player3Name, roll: player3Roll}
    ];
    
    var maxRoll = Math.max(player1Roll, player2Roll, player3Roll);
    var winners = rolls.filter(player => player.roll === maxRoll).map(player => player.name);
    
    document.getElementById("winner").textContent = winners.length > 1 
        ? "It's a tie! " + winners.join(" & ") + " win!" 
        : winners[0] + " Wins!";
});
