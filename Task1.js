//### Task-1
/*
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

**Input:**
</br>
The first line of the input is the taka you have.
The second line is the cost of 1 kg of oranges and 1 kg of apples.

**Output:**
</br>
Print the result.

---

**Sample Input:**
</br>
1000
</br>
700

**Sample Output:**
</br>
300
*/

var money = 1000;
var orangeCost = 50; 
var appleCost = 70;
var orangekg = 1;
var applekg = 1;

var totalcost = (orangeCost * orangekg) + (appleCost *applekg)
change = money - totalcost ;
console.log(totalcost,change);

