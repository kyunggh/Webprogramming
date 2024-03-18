// 구구단 프로그램
function printMultiplicationTable() {
  for (let i = 2; i <= 9; i++) {
    console.log(`\n${i}단`);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

// 구구단 출력
printMultiplicationTable();
