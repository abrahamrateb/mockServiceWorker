import { ClientOptions, Middleware } from "openapi-fetch";
import fetchClient from "openapi-fetch"
import paths from "../src/types/schema"

function createClient<T extends object>(
    options: ClientOptions,
    middlewares?: Middleware[]
) {
    const baseUrl = options.baseUrl;

    const client = fetchClient<T>({
        ...options,
        baseUrl,
    });

    client.use(...(middlewares || []));

    return client;
}

export const petClient = createClient<paths>({baseUrl: "https://petstore3.swagger.io/api/v3"});


