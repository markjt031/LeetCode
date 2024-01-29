/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPoints(points) {
    if (points.length === 1) {
        return 1;
    }

    let lines = {};
    let max = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue; // Skip duplicate points

            let line = getLineRepresentation(points[i], points[j]);

            lines[line] = lines[line] || [];
            if (!lines[line].includes(points[i])) {
                lines[line].push(points[i]);
            }
            if (!lines[line].includes(points[j])) {
                lines[line].push(points[j]);
            }
        }
    }

    for (line in lines) {
        max = Math.max(max, lines[line].length);
    }

    return max;
}

function getLineRepresentation(p1, p2) {
    if (p1[0] === p2[0]) {
        return `x=${p1[0]}`; 
    }

    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const gcd = calculateGCD(dx, dy); // Greatest common divisor

    const slopeNumerator = dy / gcd;
    const slopeDenominator = dx / gcd;
    const yint = p1[1] - slopeNumerator * p1[0] / slopeDenominator;

    return `y=${slopeNumerator}/${slopeDenominator}*x+${yint}`;
}

function calculateGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    return b === 0 ? a : calculateGCD(b, a % b); 
}