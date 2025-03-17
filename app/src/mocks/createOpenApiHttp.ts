import type { AnyApiSpec, HttpOptions } from "openapi-msw";
import { createOpenApiHttp } from "openapi-msw";

export function createMockApiHttp<Paths extends AnyApiSpec>(options?: HttpOptions) {
    options = {...options, baseUrl: options?.baseUrl || "*"};

    return createOpenApiHttp<Paths>(options)
}
