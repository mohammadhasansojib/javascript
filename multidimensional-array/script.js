



let arr = [
    [
        [10,20,30],
        [40,50,60]
    ],[
        [70,80,90],
        [100,110,120]
    ]
];


document.write("<table border='1px' border-collapse='collapse'>")
for(let a = 0; a < arr.length; a++){
    for(let b = 0; b < arr[a].length; b++){
        document.write("<tr>")
        for(let c = 0; c < arr[a][b].length; c++){
            document.write("<td>"+arr[a][b][c] + "</td>");
        }
        document.write("</tr>");
    }
}
document.write("</table>")