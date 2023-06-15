function makeBoard(){
    let board=[];
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            board[[i,j]]=makeValidMoves(i,j);
        }
    }
    return board;
}

function makeValidMoves(x,y){
    let validMoves=[];
    let offset=[[1,2],[2,1],[-1,2],[2,-1],[1,-2],[-2,1],[-1,-2],[-2,-1]];
    for(let i=0;i<offset.length;i++){
        let move=[offset[i][0]+x,offset[i][1]+y];
        if(checkValidMoves(move)){
            validMoves.push(move);
        }
    }
    return validMoves;
}

function checkValidMoves([x,y]){
    if(x<0 || y<0 || x>7 || y>7){
        return false;
    }
    else{
        return true;
    }
    
}

function knightMoves(start,end){
    if(start[0]<0 || start[0]>7 || start[1]<0 || start[1]>7 || end[0]<0 || end[0]>7 || end[1]<0 || end[1]>7){
        return 'Positions does not exists on the Chess Board';
    }
    let visited=new Set();
    let queue=[];
    queue.push([start,[start]]);
    let count = 2;
    while(queue.length!=0){
        let item=queue.shift();
        let current=item[0];
        let path=item[1];
        visited.add(current);
        if(current[0]===end[0] && current[1]===end[1]){
            return path;
        }
        let neighbors=board[current];
        for(let position of neighbors){
            if(!visited.has(position)){
                queue.push([position, [...path,position]])
            }
        }
    }

}

let board=makeBoard()

console.log(knightMoves([0,0],[1,2]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([3,3],[0,0]));


