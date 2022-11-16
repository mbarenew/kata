function solution(A, K) {
    for(let i = 0; i<K; i++){
        A.unshift(A.pop());
    }
    return A;
}