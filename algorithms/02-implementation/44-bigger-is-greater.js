function biggerIsGreater(w) {
w= w.split('');
    for(let i=w.length-1;i>=0;i--){
        if(w[i]>w[i-1]){
            for(let j= w.length-1;j>=i-1;j--){
                if(w[j]>w[i-1]){
                    let [index1,index2] =[i-1,j];
                    let temp = w[index1];
                    w[index1] = w[index2];
                    w[index2] = temp;

                    let wArrStart = w.slice(0, index1 + 1);
                    let wArrEnd = w.slice(index1 + 1);

                    return wArrStart.concat(wArrEnd.reverse()).join('');
                }
            }
            break;
        }
    }
    return 'no answer';
}
