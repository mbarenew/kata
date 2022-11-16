function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let finalGap = 0;
    //1 is  0
    if (N == 1) {
        return 0;
    }
    //use the shortest way to convert to a binary representation
    const binaryRep = N.toString(2).split('');
    let tempGap=0;
    
    for (let x = 0; x < binaryRep.length; x++) {
        if(binaryRep[x]==='0'){
            tempGap++;
            continue;
        }else if(binaryRep[x]==='1'){
            if(tempGap>finalGap)
            finalGap=tempGap;
            tempGap=0;
        }
        
    }
    return finalGap;
}