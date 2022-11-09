function Greetings({lang, children}){
    let greeting = "";

    switch (lang) {
        case "de":
            greeting = "Hallo";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "es":
            greeting = "Hola";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        default:
            greeting = "Bom dia";
            break;
    }
    return (
        <div className="greeting">
            <h2>{greeting}</h2>
        </div>
    );
}

export default Greetings;