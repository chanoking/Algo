function solution(a, b) {
  // 2016년 1월 1일은 금요일로 시작합니다.
  const daysOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  // 각 월의 일수를 배열로 저장합니다.
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 입력된 월(a)과 일(b)을 이용하여 총 일수를 계산합니다.
  let totalDays = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDays += daysInMonth[i];
    // console.log(totalDays);
  }
  totalDays += b - 1; // 일(day)를 더해줍니다. (0부터 시작하므로 1을 뺌)
//   console.log(totalDays);

  // 요일을 계산하고 반환합니다.
  const dayOfWeekIndex = totalDays % 7;
  console.log(dayOfWeekIndex);
  return daysOfWeek[dayOfWeekIndex];
}

// 예제 테스트
console.log(solution(5, 24)); // "TUE"
