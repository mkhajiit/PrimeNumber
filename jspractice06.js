//n까지의 자연수중 소수를 구하는 함수다

function showPrimes(n){
    for(let i =2; i<=n; i++){
        if(!isPrime(i)) continue;
        
        
        alert(i);
    }
    
}

function isPrime(n){
        if(n == 2) return true;
    else{
        for(let i =2; i < n; i++){
            
            if (n % i == 0) return false;
            // return true; 여기다 true를 써넣으면 if를 만족못시키는 경우 바로 함수가 종료 되면서 true를 반환하기 때문에 소수가 아닐때도 true가 나오므로 틀린것
        }
        return true;
    }
}