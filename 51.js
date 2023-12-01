function solution(cards1, cards2, goal) {
  for (const s of goal) {
    // console.log(s);
    if (cards1[0] == s) {
      // console.log(cards1[0]);
      cards1.shift();
      //   console.log(cards1);
    } else if (cards2[0] == s) {
    //   console.log(cards2[0]);
      cards2.shift();
      console.log(cards2);
    } else {
      return "No";
    }
  }

  return "Yes";
}
console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
// console.log(
//   solution(
//     ["i", "water", "drink"],
//     ["want", "to"],
//     ["i", "want", "to", "drink", "water"]
//   )
// );
