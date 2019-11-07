#OX COW BULL

Ox Cow Bull is a game playing by childrens

##Game Explanation
 * one should think one name with the given length
 * Opponent should guess name
 * The player should say how many OX COW BULL he got with this suggession
 * OX : Letter not present in the name
 * Bull: Letter present but not in the right place
 * Cow : Letter present in the right Place

 ###Example
 Dog is the name Person A thought
 If Person B says TOY MEANs 3 OX
 If Person B says GOD Means 1 Cow 2 Bull
 If Person B says Dog Means 3 Cow and he is the winner

### Code Sample
```
const oxcowbull = require('oxcowbull'); 
const result = oxcowbull('name', 'suggession'); 
console.log(result);
```

This code you can use it in the OXCOWBULL Game
