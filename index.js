// O(n) - Time | O(1) - Space
function minimumBribes(q) {
  let bribes = 0;
  let max = q.length;

  for (let i = q.length - 1; i >= 0; i--) {
    if(q[i] - (i + 1) > 2){
      console.log('Too chaotic');
    }
    else if(q[i] > i + 1){
      bribes += q[i] - (i + 1);
    } 
    else {
      if(max >= q[i]){
        max = q[i];
      } 
      else {
      bribes++;
      }
    }
  }
  console.log(bribes);
}
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// Steps:

// 1.  Check if the current person made more than 2 bribes. Check if the differnce between the current value and index + 1 is greater than 2.

// 2.  Check if the current person made any
// bribes. Check if the current value is greater than index + 1.

// 3. Check is the current person was bribed.      a. Check if the current value is less than      the index + 1. 
//   b. Set a variable (max) to the length of the array to keep track of the last person bribed with the smallest value. This variable sets the bar for the highest possible value a bribed person can have to maintain order amongst the remainder of the bribed people.

// 4. Check if the bribed person also bribed someone. Check if the value is larger than the max value
