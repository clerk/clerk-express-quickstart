<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk and Express Quickstart
  </h1>
  <a href="https://www.npmjs.com/package/@clerk/clerk-js">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-js" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a>
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any application.

After following the [quickstart](https://clerk.com/docs/quickstarts/express), you'll have learned how to:

- Install `@clerk/express`
- Set your Clerk API keys
- Add `clerkMiddleware()` to your application
- Protect your routes using `requireAuth()`

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerk%2Fclerk-express-quickstart&env=NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&envDescription=Clerk%20API%20keys&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%express&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%express)

## Running the template

```bash
git clone https://github.com/clerk/clerk-express-quickstart
```

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart).

2. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart) and create an application.

3. Set the required Clerk environment variables as shown in [the example `env.example` file](./.env.example).

4. `npm install` the required dependencies.

5. `npm run dev` to launch the development server.

## Learn more

To learn more about Clerk and Express, check out the following resources:

- [Quickstart: Get started with Clerk and Express](https://clerk.com/docs/quickstarts/express?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart)
- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-express-quickstart)
- [Express Documentation](https://expressjs.com/en/starter/installing.html)

## Found an issue?

If you have found an issue with the quickstart, please create an [issue](https://github.com/clerk/clerk-express-quickstart/issues).

If it's a quick fix, such as a misspelled word or a broken link, feel free to skip creating an issue.
Go ahead and create a [pull request](https://github.com/clerk/clerk-express-quickstart/pulls) with the solution. :rocket:

## Want to leave feedback?

Feel free to create an [issue](https://github.com/clerk/clerk-express-quickstart/issues) with the **feedback** label. Our team will take a look at it and get back to you as soon as we can!

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
