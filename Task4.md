### Task-4

What will be the result of the following codes:

**var a = isNaN(‘11’);**

**var a = isNaN(2-10);**

Explain your answers.



Code 1: var a = isNaN('11');

Result: a will be false.

Explanation:

The isNaN function checks if the value passed to it is Not a Number (NaN).
In this case, "11" is a string representing a number, but it's still a string.
JavaScript attempts to convert the string "11" to a number before the isNaN check. Since "11" can be successfully converted to a number (11), isNaN returns false.



Code 2: var a = isNaN(2 - 10);

Result: a will be true.

Explanation:

Here, 2 - 10 is a mathematical expression that evaluates to -8.
-8 is a valid number, not NaN.

In this case, even though 2 - 10 results in a valid number (-8), the isNaN function still performs the conversion step. Since converting a mathematical expression to a number doesn't involve any operations that would lead to NaN, the result is still -8.
Finally, isNaN(-8) returns true because -8 is a number, and isNaN is not designed to identify regular numbers.