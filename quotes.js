
    const quote = document.getElementById("quote");
    const author = document.getElementById("author")
  
    const button1 = document.getElementById("bn");
        button1.addEventListener("click",getQuote);
     function getQuote(){
        fetch("http://type.fit/api/quotes")
        .then(res => res.json())
    
        .then(data => {
            console.log(data)
            document.getElementById("quote").innerHTML=data[0].text;
            document.getElementById("author").innerHTML=data[0].author;
            console.log(author.textContent);
        });
        
     }




