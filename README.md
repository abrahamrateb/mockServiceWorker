# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.


## Useful Commands / Tools
`npm i msw@latest` > install MSW
`npm i -g create-remix` > Install base to create your remix project
`create-remix` > creates your remix project
`npm i openapi-msw` > Library to strongly type your rest clients
`npx openapi-typescript .\app\src\openapi-spec\schema.yaml -o .\app\src\types\schema.ts` > Generate Typescript Client
`npm i openapi-fetch` > Fetch Client

## Steps

1. Create your remix project 
2. Create your pet route/page to fetch Pet data from the API
3. Fetch and render the data on apps/routes/pet.tsx
4. Build and run your app

5. Install Mock service Worker
6. Pull down the schema / yaml
7. Generate the typescript client
8. Set up your handlers
9. Register your server 
10. Set up the if mock variables in your entry.server.tsx
