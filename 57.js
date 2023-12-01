function solution(babbling) {
  const regexp1 = /(ma|aya|ye|woo)\1+/;
  const regexp2 = /^(ma|aya|ye|woo)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
