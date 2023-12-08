class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        //doc raiz
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");
        //div left
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //div right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newImage = document.createElement("img");
        newImage.src= this.getAttribute("photo") || "../../assets/default-foto.jpg";
        newImage.alt="Foto da Notícia";
        cardRight.appendChild(newImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        

        return componentRoot
    }

    styles(){
        const styles = document.createElement("style");
        styles.textContent = `
        .card{
            display: flex;
            flex-direction: row;
            width: 720px;
            border: 1px solid gray;
            box-shadow: 12px 12px 46px -4px rgba(0,0,0,0.49);
            -moz-box-shadow: 12px 12px 46px -4px rgba(0,0,0,0.49);
            box-shadow: 12px 12px 46px -4px rgba(0,0,0,0.49);;
        }
        
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        
        }
        
        .card__left h1{
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card__left span{
            font-weight:400;
        }
        
        .card__left p{
            color: gray;
            margin-top: 10px;
        }
        `
        return styles

    }
}

customElements.define("card-news", Cardnews);




/* class CardNews extends HTMLElement{
    constructor (){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1> Olá Mundo </h1>";
    }
}

customElements.define('card-news', CardNews); */