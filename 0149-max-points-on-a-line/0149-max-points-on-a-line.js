/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let lines={};
    if (points.length===1){
        return 1;
    }
    let line=""
    let slope=""
    let yint=""
    for (let i=0; i<points.length; i++){
        for (let j=0; j<points.length; j++){
            if (points[i]!==points[j]){
                if (points[i][0]-points[j][0]===0){
                    line=`x=${points[i][0]}`
                }
                else{
                    slope=(points[i][1]-points[j][1])/(points[i][0]-points[j][0]);
                    yint=(points[i][1]-slope*points[i][0]);
                    line=`y=${slope}*x+${yint}`
                }
                if (lines[line]){
                    if (!lines[line].includes(points[i])){
                        lines[line].push(points[i]);
                    }
                }
                else{
                    lines[line]=[points[i]]
                }
                if (!lines[line].includes(points[j])){
                    lines[line].push(points[j]);
                }
                
            } 
        }
    }
    let max=0;
    for (line in lines){
        if (lines[line].length>max){
            max=lines[line].length;
        }
    }
    return max;
}
