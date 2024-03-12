 /* ### Task-3

You task is to divide the given number by 5 and show the remainder as the output.

**Input:**
</br>
The first line of the input contains the number.

**Output:**
</br>
Print the remainder.

---

**Sample Input:**
</br>
119

**Sample Output:**
</br>
4
*/

const number = prompt("Enter a number: ") * 1; 

if (number % 5 === 0) {
  console.log(`${number} is divisible by 5, so the remainder is 0.`);
} else {
  console.log(`The remainder when ${number} is divided by 5 is: ${number % 5}`);
}
