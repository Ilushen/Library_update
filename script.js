const myLibrary = []

function Books(tittle,author,pages,read){
    this.id = crypto.randomUUID();
    this.tittle = tittle;
    this.read = read;
    this.author = author;
    this.pages = pages;

    this.info = function(){
        console.log(this.tittle, this.author+", "+this.pages+", "+ this.read);

    }
}

