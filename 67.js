function anagrams(stringA, stringB) {
  const newStringA = stringA.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const newStringB = stringB.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let arrA = {};
  let arrB = {};

  for (let i = 0; i < newStringA.length; i++) {
    if (!arrA[newStringA[i]]) {
      arrA[newStringA[i]] = 1;
    } else {
      arrA[newStringA[i]]++;
    }
  }

  for (let j = 0; j < newStringB.length; j++) {
    if (!arrB[newStringB[j]]) {
      arrB[newStringB[j]] = 1;
    } else {
      arrB[newStringB[j]]++;
    }
  }

  let isAnagram = true;

  for (let char in arrB) {
    if (arrA[char] !== arrB[char]) {
      isAnagram = false;
      break;
    }
  }
  console.log(isAnagram);
  return isAnagram;
}
anagrams("One one", "One one C");
