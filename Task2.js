
/*
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

**Input:**
</br>
The first line of the input is the marks of the five subjects mentioned above, respectively.

**Output:**
</br>
Print the result in 2 decimal places.

---

**Sample Input:**
</br>
75.25, 65, 80, 35.45, 99.50

**Sample Output:**
</br>
71.04
*/
var marks = [75.25, 65, 80, 35.45, 99.50]; 

var sum = 0;
for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
}

var average = sum / marks.length;
console.log("Average marks:", average.toFixed(2));
