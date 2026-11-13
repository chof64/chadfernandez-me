# chof64/chadfernandez-me

**chadfernandez-me** repository contains the code for my personal website. Built with Astro and Tailwind CSS. The goal is to build a responsive and simple website + blog to have my own little space in the web where I can share things that are cool and interesting.

## Development

```sh
pnpm install
cp .env.example .env
pnpm dev
```

Run `pnpm check` and `pnpm typecheck` before committing. For a production build, set `BASE_URL` to the deployed origin:

```sh
BASE_URL=https://chadfernandez.me pnpm build
```

The static output goes to `dist/` and deploys to Cloudflare Workers with `pnpm wrangler deploy`.

## License

**chof64/chadfernandez-me** is licensed under the [MIT License](/LICENSE).
