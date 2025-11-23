/* We are Learnig Server Craetion on the Node JS*/
let http = require("http");

let server = http.createServer((req, res) => {

    // Routing
    switch (req.url) {
        case "/":
                res.end("Namaste World!"); // Send the response fron the server            
            break;
            case "/Categories":
                res.end("Categories"); // Send the response fron the server            
                break;
            case "/Services":
                res.end("Services"); // Send the response fron the server                            
            break;
        case "/About":
                res.end("About");
            break;
        case "/Contact":
                res.end("Conatact");
            break;
        default:
                res.end("Namaste World!"); // Send the response fron the server
            break;
    }
});

server.listen("8000"); // http://localhost:8000