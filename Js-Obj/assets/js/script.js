class CustomMatch{
    constructor(number){
        this.num=number;
    }
    plus(plusNum){
        this.num+=plusNum;
        return this;
    }
    minus(minusNum){
        this.num-=minusNum;
        return this;
    }
    multiply(multiNum){
        this.num*=multiNum;
        return this;
    }
    divide(divideNum){
         this.num/=divideNum;
        return this.num;
    }
}

var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);

console.log(result);

