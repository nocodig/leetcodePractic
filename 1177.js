/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// var canMakePaliQueries = function(s, queries) {
//   const result = [];

//   queries.forEach(item => {
//     const testStr = s.slice(item[0], item[1] + 1);

//     result.push(isPalindrome(testStr, item[2]));
//   })
  

//   return result;
// };

// function getDiff(str1, str2) {
//   let count = 0;

//   for(let i = 0; i < str1.length; i++ ) {
//     if (str1[i] !== str2[i]) {
//       count++;
//     }
//   }

//   return count;
// }

// function isPalindrome(str, canReplace) {
//   if (!str) {
//     return false;
//   }

//   const strLen = str.length;

//   if (strLen === 1) {
//     return true;
//   }

//   const leftStr = str.slice(0, Math.round(strLen / 2)).split('').reverse().join('');
//   const rightStr = str.slice(Math.floor(strLen / 2), strLen);

  
//   return getDiff(leftStr, rightStr) <= canReplace;
// }



// console.log(canMakePaliQueries('hunu', [[1,1,1],[2,3,0],[3,3,1],[0,3,2],[1,3,3],[2,3,1],[3,3,1],[0,3,0],[1,1,1],[2,3,0],[3,3,1],[0,3,1],[1,1,1]]));


/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function(s, queries) {
  const result = [];

  queries.forEach(item => {
    const testStr = s.slice(item[0], item[1] + 1);

    result.push(isPalindrome(testStr, item[2]));
  })
  

  return result;
};

function isPalindrome(str, canReplace) {
  const oStrCount = {}
  if (!str) {
    return false;
  }
  
  const strLen = str.length;
  
  if (strLen === 1) {
    return true;
  }
  
  for(let i = 0; i < strLen; i++) {
    if(oStrCount[str[i]]) {
      oStrCount[str[i]]++;
      continue;
    }
    
    oStrCount[str[i]] = 1;
  }
  
  let count = 0 - canReplace;
  if (strLen % 2 !== 0) {
    count -= 1; 
  }

  Object.keys(oStrCount).forEach(item => {
    if(oStrCount[item] % 2 !== 0) {
      count++;
    }
  })


  return count <= canReplace;
}



console.log(canMakePaliQueries('hunu', [[1,1,1],[2,3,0],[3,3,1],[0,3,2],[1,3,3],[2,3,1],[3,3,1],[0,3,0],[1,1,1],[2,3,0],[3,3,1],[0,3,1],[1,1,1]]));


