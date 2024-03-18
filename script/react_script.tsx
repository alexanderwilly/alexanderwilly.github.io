function Nav() {
    return (

        <nav>
            <input type = "checkbox" id = "check"/>
            <label htmlFor = "check" className = "checkbtn">
                <i className='fas fa-bars'></i>
            </label>
            <label className = "logo">
                <a href = "#"><img src = "resources/logo.png" alt = "logo"/></a>
            </label>
            <ul>
                <li><a href ="#home" className = "active">Home</a></li>
                <li><a href ="#about">About</a></li>
                <li><a href ="#exp">Experience</a></li>
                <li><a href ="#edu">Education</a></li>
                <li><a href ="#cert">Certifications</a></li>
                <li><a href ="#skills">Skills</a></li>
                <li><a href ="#contact">Contact</a></li>
            </ul>
        </nav>

        
    );
}

function Home(){
    return(
        <div className = "intro">
            <h2>HI!</h2>
            <h4>I'm Willy</h4>
        </div>
    );
}


ReactDOM.render(
    <Nav />,
    document.getElementById("nav-bar")
);

ReactDOM.render(
    <Home />,
    document.getElementById("home")
);

/*function Header(props) {
    return (
        <header>
            <h1>{props.name}'s Kitchen</h1>
        </header>
    );
}

function Main(props) {
    return (
        <section>
            <img
                height={200}
                src="./restaurant.jpeg"
                alt="A server presents two plates at a fancy restaurant"
            />
            <ul>
                {props.dishes.map((dish) => (
                    <li key={dish.id}>
                        {dish.title}
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Footer(props) {
    return (
        <footer>
            <p>Copyright {props.year}</p>
        </footer>
    );
}

const dishes = [
    "Black Bean Soup",
    "Macaroni and Cheese",
    "Salmon and Potatoes",
    "Pizza"
];
const dishObjects = dishes.map(
    (dish, i) => ({
        id: i,
        title: dish
    })
);

function App() {
    return (
        <React.Fragment>
            <Header name="Cindy" />
            <Main dishes={dishObjects} />
            <Footer year={new Date().getFullYear()} />
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);*/