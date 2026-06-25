export const calculateNext = (prev: string): string => {
    // 연속 개수
    let count = 1;
    // 결과값
    let val = "";
  
    for (let i = 0; i < prev.length; i++) {
      if (prev[i] === prev[i + 1]) {
        count++;
      } else {
        val += count.toString() + prev[i]; // count(개수) + 문자 그대로
        count = 1; // reset
      }
    }
  
    return val;
  };
  
  export const calculateLn = (n: number): string => {
    let res = "1";
  
    for (let i = 0; i < n - 1; i++) {
      res = calculateNext(res);
    }
  
    return res;
  };
  
  export const getCenter = (n: number): string => {
    const result = calculateLn(n);
    const centerIdx = Math.floor(result.length / 2);
  
    return result.substring(centerIdx - 1, centerIdx + 1);
  };