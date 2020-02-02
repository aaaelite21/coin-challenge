# coin-challenge

Simple test to prove a statistical problem proposed at our daily lunch table.

# The Problem

You have 3 coins, on with two heads, one with two tales and one with both heads and tails. You then randomly select one of the coins. If you flip that coin twice in a row and get heads 2 times what is the percent chance of getting heads a third time. Assume all coins are fair.

# The Result

After being on the wrong side of this at the lunch table I decided I needed to try this out for myself. Given the choice between flipping coins all morning and writing a script I chose the latter. Something important to note head is that we are not choosing a new coin every time, meaning every flip gives us a little more information as to which coin, we have. Also, there are only a finite number of states within the scenario. After flipping 3 coins there are 8 possible combinations for each coin (each flip has two possible faces, 3 flips = 2^3) All eight of the possibilities for the heads only coin will yield heads on the 3rd flip. We remove all the possibilities given by the tails only coin because we know we do not have it. Finally, we remove all possibilities of the fair coin that include tails after two flips. This leaves us with two branches, one that goes heads-heads-tails and the other that goes heads-heads-heads. If we look at our group of remaining possible states, we will see that 9 of them yield heads-heads-heads and only one yields heads-heads-tails. This gives a 90% chance of flipping heads after flipping two previous heads given the rules of the game.

# To Run

- Download and install [NodeJS](https://nodejs.org/en/)
- Save the repository to your local machiene
- Open your command line tool of choice and navigate to the directory containing "coin-challenge.js"
- run `node coin-challenge.js`
- View Results

```
Two heads in a row was flipped 3650 times
A 3rd head was flipped 89.863% of the time after that
```

![meme](/wait_what.png)
