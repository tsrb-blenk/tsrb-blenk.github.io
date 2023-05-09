class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
        this.template = document.createElement("template");
        this.template.innerHTML = this.markup;
        this.shadow.append(this.template.content.cloneNode(true));
    }


    style = /*css*/`
        nav {
            background: linear-gradient(#313244AA, #31324477, #31324444, #31324400);
            padding: 1rem 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        
        
        .nav-logo {
            width: 20%;
        }
        
        
        .nav-logo a {
            text-decoration: none;
        }
        .nav-logo h1 {
            color: #ffffff;
            margin: 0 0 0 2rem;
            user-select: none;
            font-family: 'Anton', sans-serif;
            letter-spacing: 5px;
            font-size: 2.5rem;
        }
        .nav-logo span {
            color: #ff0000;
            font-family: 'Anton', sans-serif;
            letter-spacing: 5px;
            font-size: 2.5rem;
        }
        
        .nav-links {
            width: 55%;
        }
        .nav-links ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .nav-links li {
            list-style: none;
            margin: 0 1.5rem;
        }
        .nav-links a {
            color: #ffffff;
            text-decoration: none;
            font-size: 1.1rem;
        }
        .nav-links a:hover {
            color: #676b8a;
        }
    `;

    markup = /*html*/`
        <style>
            ${this.style}
        </style>
        <nav>
        <div class="nav-logo">
            <a href="/index.html"><h1><span>B</span>LENK<span>.</span></h1></a>
        </div>
        <div class="nav-center nav-links">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/events.html">Events</a></li>
                <li><a href="#">Photo Gallery</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
    `;

}

customElements.define("nav-bar", NavBar);