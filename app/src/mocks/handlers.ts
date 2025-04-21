// src/mocks/handlers.ts

import { createOpenApiHttp } from "openapi-msw";
import type { paths } from "../types/schema"
import { petSample } from "../samples/petSample";
// import { http, HttpResponse } from 'msw'

const rest = createOpenApiHttp<paths>({baseUrl: "https://petstore3.swagger.io/api/v3"})

export const handlers = [
    rest.get("/pet/{petId}", async({request, response, params}) => {
        return response(200).json(petSample)
    }),

    // http.get('https://petstore3.swagger.io/api/v3/pet/7', () => {
    //     console.log("interecepted exact response")
    //     return HttpResponse.json(petSample)
    // })
]




