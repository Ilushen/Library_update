const myLibrary = []

function Books(tittle, author, pages, read) {
    this.id = crypto.randomUUID();
    this.tittle = tittle;
    this.read = read;
    this.author = author;
    this.pages = pages;

    this.info = function () {
        console.log(this.tittle + " by " + this.author + ", " + this.pages + ", " + this.read);

    }

}

Books.prototype.readstatus = function () {
        console.log(this.read);
        if (this.read == "Read")
            this.read = "Not Read Yet";
        else
            this.read = "Read";

        console.log(this.read);
        createTable();
    }

function addBooktoLibrary(tittle, author, pages, read) {
    const book = new Books(tittle, author, pages, read);
    myLibrary.push(book);
}


const div = document.createElement('div');
div.setAttribute("id", "Table");
function createTable() {

    if (document.getElementById('tab')) {
        div.removeChild(document.getElementById('tab'))
    }

    const table = document.createElement('table');
    table.setAttribute("id", "tab");

    const tr = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.textContent = "ID";
    tr.append(th1);

    const th2 = document.createElement('th');
    th2.textContent = "TITLE";
    tr.append(th2);

    const th3 = document.createElement('th');
    th3.textContent = "AUTHOR";
    tr.append(th3);

    const th4 = document.createElement('th');
    th4.textContent = "PAGES";
    tr.append(th4);

    const th5 = document.createElement('th');
    th5.textContent = "READ";
    tr.append(th5);

    const th6 = document.createElement('th');
    th6.textContent = "DELETE";
    tr.append(th6);

    const th7 = document.createElement('th');
    th7.textContent = "READ STATUS";
    tr.append(th7);

    table.appendChild(tr);
    div.appendChild(table);

    for (let i = 0; i < myLibrary.length; i++) {
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

        const tddelete = document.createElement('td');
        const btn = document.createElement('button')
        btn.textContent = "DELETE";
        btn.setAttribute("id", myLibrary[i].id);
        tddelete.appendChild(btn);
        trlinhas.appendChild(tddelete);

        const tdread = document.createElement('td');
        const btn1 = document.createElement('button')
        btn1.textContent = "READ STATUS";
        btn1.setAttribute("data-id", myLibrary[i].id);
        tdread.appendChild(btn1);
        trlinhas.appendChild(tdread);

        table.appendChild(trlinhas);

    }
    document.body.appendChild(div);
    deletebooks();
}

function readArray() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].info());
    }

}

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#submit");

showBtn.addEventListener("click", () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');

    title.value = "";
    author.value = "";
    pages.value = "";
    read.value = "";
    dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    addbooks();
    createTable();

});

function addbooks() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');
    addBooktoLibrary(title.value, author.value, pages.value, read.value);

}


// Testing
//book = new Books("Entre as Memorias Silenciasdas", "Ungulani Ba kha Khosa", 300, "Not Read Yet");
//book.info();

addBooktoLibrary("Entre as Memorias Silenciasdas", "Ungulani Ba kha Khosa", 300, "Not Read Yet");
addBooktoLibrary("BALADAS DE AMOR AO VENTO", "PAULINHA CHIZIANE", 500, "Read");
addBooktoLibrary("UALALAPI", "Ungulani Ba kha Khosa", 600, "Not Read Yet");
addBooktoLibrary("VENTOS DO APOCALIPSE", "PAULINHA CHIZIANE", 800, "Read");
//console.log(myLibrary);

//for(let i=0;i<myLibrary.length;i++){
//    console.log(myLibrary[i].info());
//}



function deletebooks() {

    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener("click", () => {
            for (let i = 0; i < myLibrary.length; i++) {
                if (button.id == myLibrary[i].id) {
                    myLibrary.splice(i, 1);
                    createTable();

                }
                if(button.dataset.id == myLibrary[i].id){
                    myLibrary[i].readstatus();
                }
            }


        });
    });

}

createTable();