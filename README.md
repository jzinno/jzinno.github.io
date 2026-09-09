# jzinno.github.io

### *forever under construction*

#### Development

Uses Bun 1.4.2, Vite, React, Tailwind CSS v4, and TanStack Router.
The portfolio is a single page; the sidebar scrolls to each section.
The sidebar's theme button follows the system theme until manually changed,
then remembers the choice across visits. A sun switches to light mode; a moon
switches to dark mode.

```bash
git clone https://github.com/jzinno/jzinno.github.io.git
cd jzinno.github.io
bun upgrade
bun install --frozen-lockfile
bun run dev
```

Local development runs at `http://localhost:5173` with HMR. To share the
development server with devices on your Tailscale network:

```bash
bun run dev:tailnet
```

This binds to the machine's Tailscale IPv4 address and prints its preview URL.
Both the page and HMR WebSocket use port 5173; the viewing device must be
connected to the tailnet and allowed to reach that port. No public tunnel is used.

#### Build and deployment

```bash
bun run build
bun run preview
```

The build checks TypeScript and produces `dist/`, including prerendered homepage
content, metadata, a 404 page, and redirects from the old `/edu`, `/experience`,
`/pubs`, and `/gallery` URLs (including `.html` forms) to homepage sections.
The CV, images, game, and dotfiles script remain static files in `public/`.

Pull requests validate the frozen lockfile and production build. Pushes to `main`
also publish `dist/` to the existing `gh-pages` branch. `bun run deploy` performs
the same build and publishes manually. CI reads its Bun version from `.bun-version`;
keep that pin and `packageManager` aligned when upgrading Bun.

#### an iteration of my dotfiles

```bash
curl -LsSf https://jzinno.github.io/dots.sh | bash
```
