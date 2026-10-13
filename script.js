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



// Testing
//book = new Books("Entre as Memorias Silenciasdas", "Ungulani Ba kha Khosa", 300, "Not Read Yet");
//book.info();

//addBooktoLibrary("Entre as Memorias Silenciasdas", "Ungulani Ba kha Khosa", 300, "Not Read Yet");
//console.log(myLibrary);

//for(let i=0;i<myLibrary.length;i++){
//    console.log(myLibrary[i].info());
//}