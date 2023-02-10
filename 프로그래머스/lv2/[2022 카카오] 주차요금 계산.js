function solution(fees, records) {
  const hash = new Map();
  const answer = [];
  records.forEach((r) => {
    const temp = r.split(" ");
    let time = temp[0].split(":");
    time = time[0] * 60 + time[1] * 1;
    if (hash.has(temp[1])) {
      if (hash.get(temp[1]).time === -1)
        hash.set(temp[1], { ...hash.get(temp[1]), time });
      else {
        const cal = time - hash.get(temp[1]).time;
        hash.set(temp[1], {
          num: temp[1] * 1,
          time: -1,
          total: hash.get(temp[1]).total + cal
        });
      }
    } else hash.set(temp[1], { num: temp[1] * 1, time, total: 0 });
  });
  for ([key, val] of hash) if (val.time > -1) val.total += 1439 - val.time;
  const arr = [...hash].sort((a, b) => a[0] - b[0]);
  arr.forEach((e) => {
    let t = e[1].total - fees[0];
    let fee = 0;
    if (t > 0) fee = Math.ceil(t / fees[2]) * fees[3];
    fee += fees[1];
    answer.push(fee);
  });
  return answer;
}
