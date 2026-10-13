const myLibrary = []

function Books(tittle,author,pages,read){
    this.id = crypto.randomUUID();
    this.tittle = tittle;
    this.read = read;
    this.author = author;
    this.pages = pages;

    this.info = function(){
        console.log(this.tittle+" by "+ this.author+", "+this.pages+", "+ this.read);

    }
}


function addBooktoLibrary(tittle,author,pages,read){
    const book = new Books(tittle,author,pages,read);
    myLibrary.push(book);
}

function createTable(){
    const div = document.createElement('div');
    div.setAttribute("id","Table");

    const table = document.createElement('table');

    const tr = document.createElement('tr');
    const th1  = document.createElement('th');
    th1.textContent = "ID";
    tr.append(th1);

    const th2  = document.createElement('th');
    th2.textContent = "TITLE";
    tr.append(th2);

    const th3  = document.createElement('th');
    th3.textContent = "AUTHOR";
    tr.append(th3);

    const th4  = document.createElement('th');
    th4.textContent = "PAGES";
    tr.append(th4);

    const th5  = document.createElement('th');
    th5.textContent = "READ";
    tr.append(th5);

    table.appendChild(tr);
    div.appendChild(table);

    for(let i=0;i<myLibrary.length;i++){
        const trlinhas = document.createElement('tr');

        const tdID = document.createElement('td');
        tdID.textContent = myLibrary[i].id;
        trlinhas.appendChild(tdID);

        const tdTitle = document.createElement('td');
        tdTitle.textContent = myLibrary[i].tittle;
        trlinhas.appendChild(tdTitle);

        const tdAUTHOR = document.createElement('td');
        tdAUTHOR.textContent = myLibrary[i].author;
        trlinhas.appendChild(tdAUTHOR);

        const tdPAGES = document.createElement('td');
        tdPAGES.textContent = myLibrary[i].pages;
        trlinhas.appendChild(tdPAGES);

        const tdREAD = document.createElement('td');
        tdREAD.textContent = myLibrary[i].read;
        trlinhas.appendChild(tdREAD);
        table.appendChild(trlinhas);
    
    }
    document.body.appendChild(div);
}

function readArray(){
    for(let i=0;i<myLibrary.length;i++){
        console.log(myLibrary[i].info());}

}


// Testing
//book = new Books("Entre as Memorias Silenciasdas", "Ungulani Ba kha Khosa", 300, "Not Read Yet");
//book.info();

addBooktoLibrary("Entre as Memorias Silenciasdas", "Ungulani Ba kha Khosa", 300, "Not Read Yet");
addBooktoLibrary("BALADAS DE AMOR AO VENTO", "PAULINHA CHIZIANE", 500, "Read Yet");
addBooktoLibrary("UALALAPI", "Ungulani Ba kha Khosa", 600, "Not Read Yet");
addBooktoLibrary("VENTOS DO APOCALIPSE", "PAULINHA CHIZIANE", 800, "Read Yet");
//console.log(myLibrary);

//for(let i=0;i<myLibrary.length;i++){
//    console.log(myLibrary[i].info());
//}

createTable();