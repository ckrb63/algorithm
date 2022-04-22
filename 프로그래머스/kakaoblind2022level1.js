const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;
function solution(id_list, report, k) {
  var answer = [];
  // [["신고당한 이름","신고당한 이름"],] 배열 만들기
  let reportArray = {};
  for(const id of id_list){
      reportArray[id]=[];
  }
  let reportNumber = {};
  for(const id of id_list){
      reportNumber[id] = 0;
  }
  
  for(const each of report){
      const [id1,id2] = each.split(" ");
      if(!reportArray[id1].includes(id2)){
        reportArray[id1].push(id2);
        reportNumber[id2]++;
      }
  }
  // 신고횟수 number[] 배열 만들기
  // 정지유무 boolean[] 오브젝트 만들기
  let reportComplete = [];
  for(id in reportNumber){
      if(reportNumber[id]>=k){
          reportComplete.push(id);
      }
  }
  for(id of id_list){
      let count = 0;
      for(idx of reportComplete){
          if(reportArray[id].includes(idx))
              count+=1;
      }
      answer.push(count);
  }
  console.log(answer);
  // 내가 정지시킨 사람 number[] 배열 만들기
  // 정지시킨 사람 배열 반환
  return answer;
}

const answer = solution(id_list,report,k);
console.log(answer);