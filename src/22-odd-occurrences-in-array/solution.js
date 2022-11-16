function solution(A) {
    let result = 0;
  
    for (let element of A) {
        // Apply Bitwise XOR to the current and next element
        result ^= element;
    }

    return result;
}