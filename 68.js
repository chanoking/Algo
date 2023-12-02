function capitalize(str) {
  const newArr = str.split(" ");
  let result = str[0].toUpperCase();
  console.log(result);
  for (let i = 0; i < newArr.length; i++) {
    const capitalizedWord = newArr[i].charAt(0).toUpperCase();
    console.log(capitalizedWord);
  }
}

capitalize("a short sentence");
