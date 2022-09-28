"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
// Declare a route
fastify.get('/', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(request.headers);
    reply
        .header('Authorization', request.headers['authorization'])
        .header('X-Date', request.headers['x-date'])
        .header('Content-Type', request.headers['content-type']);
}));
// Run the server!
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fastify.listen({ port: 3000 });
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
start();
