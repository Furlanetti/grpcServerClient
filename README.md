# Example of Server/Client communication with gRPC

On this example, the are used the REST API with Express to communicate with the browser, but the client/server communication are on gRPC.
All the data are storage on a vector, so when the server is down all the info is lost.

## Express

How to make it work: 
1. server: Open a Prompt and go to the server folder. Then, run "npm start";
2. client: Open a Prompt and go to the client folder. Then, run "node index";
3. browser: Acess the application on the browser on the following url: "http://localhost:3000/";

Source: https://blog.logrocket.com/creating-a-crud-api-with-node-express-and-grpc/
