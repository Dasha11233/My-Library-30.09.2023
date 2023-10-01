
function search(){
    let a; // Автор
    let f = 0; // Автор не найден
    a = prompt("Введите фамилию автора","Чехов");
    const divelem = document.querySelector('.table');
    const table = document.createElement("table");
    table.border = '1';
    divelem.append(table);
    for (let k = 0; k < b.length; k++)
    {
        if (b[k][2] == a)
        {
            f = 1;
            
            const tr = document.createElement('tr');
            table.append(tr);
            
            for (let l = 0; l <b[k].length; l++){
                
                const td = document.createElement('td');
                tr.append(td);
                td.append(b[k][l]);}
            
        }
                
    }
    if (!f) {
        const p = document.createElement('p');
        divelem.append(p);
        p.append('Автора '+a+' в библиотеке нет.');
        
    }
}
function contentsL(){
    const divelem = document.querySelector('.table');
    const table = document.createElement("table");
    table.border = '1';
    divelem.append(table);
    for (let i = 0; i <b.length; i++)
    {
        const tr = document.createElement('tr');
        table.append(tr);
        for (let j = 0; j <b[i].length; j++){
            const td = document.createElement('td');
            tr.append(td);
            td.append(b[i][j]);}
    }
}


function init(){
    
    const Search = document.querySelector(".search");
Search.onclick = search;
const contents_L = document.querySelector(".contents_L");
contents_L.onclick = contentsL;
}
window.addEventListener("DOMContentLoaded", init);