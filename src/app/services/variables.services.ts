var n: any;

var coef = new Array();

var roots = new Array();

export function setN(num: any){
    n=num;
}

export function getN(){
    return n;
}

export function setCoef(coefficient: any){
    for(let i=0; i<=n; i++){
        coef[i]=coefficient[i];
    }
}

export function getCoef(){
    console.log(coef);
    return coef;
}

export function BirgeVieta(){
    

    var copia=new Array();

    for (let j=n; j>0; j--){
        for (let i=0; i<=n; i++){
            copia[i]=coef[i];
        }
        var x=0;
        x=x-(copia[j]/copia[j-1]);
        console.log(coef);
        console.log(x);
        while (copia[j] != 0){
            for(let i=0; i<=j; i++){
                copia[i]=coef[i];
            }
            var pivAnt=0;
            for(let i=0; i<=j; i++){
                copia[i]=copia[i]+(pivAnt*x);
                pivAnt=copia[i];
                console.log(i,"=",copia[i]);
            }
            pivAnt=0;
            if (copia[j] != 0){
                for(let i=0; i<j; i++){
                copia[i]=copia[i]+(pivAnt*x);
                pivAnt=copia[i];
                }
            }
            x=x-(copia[j]/copia[j-1]);
        }
        
        pivAnt=0;
        for (let i=0; i<=n; i++){
            coef[i]=copia[i];
        }
        
        roots[n-j]=x;

    }

    console.log(roots);
}

export function getRoots(){
    return roots;
}