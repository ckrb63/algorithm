function solution(record) {
  const arr = [];
  const hash = new Map();
  record.forEach((r) => {
    const temp = r.split(" ");
    if (temp[0] === "Enter") {
      arr.push({ action: "Enter", id: temp[1] });
      hash.set(temp[1], temp[2]);
    } else if (temp[0] === "Leave") arr.push({ action: "Leave", id: temp[1] });
    else hash.set(temp[1], temp[2]);
  });
  const answer = arr.map((e) => {
    if (e.action === "Enter") return `${hash.get(e.id)}님이 들어왔습니다.`;
    else return `${hash.get(e.id)}님이 나갔습니다.`;
  });
  return answer;
}
