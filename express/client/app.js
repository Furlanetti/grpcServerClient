const PROTO_PATH = "./proto/customers.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;
const client = new CustomerService(
    "127.0.0.1:3333",
    grpc.credentials.createInsecure()
);

module.exports = client;