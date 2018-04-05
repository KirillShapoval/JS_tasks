function solution(str){
  return str.split("").reverse().join("");
}

solution("Kiev");

var checkSolution = solution("Kiev is the capital of Ukraine");
console.log(checkSolution);