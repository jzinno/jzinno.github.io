const result = Bun.spawnSync(["tailscale", "status", "--json"]);
if (result.exitCode !== 0) {
  throw new Error(`Cannot read Tailscale status: ${result.stderr.toString()}`);
}

const status = JSON.parse(result.stdout.toString());
const ip = status.Self?.TailscaleIPs?.find((ip: string) => /^100\./.test(ip));
if (status.BackendState !== "Running" || !ip) {
  throw new Error("Connect this machine to Tailscale before running dev:tailnet.");
}

const hostname = status.Self.DNSName?.replace(/\.$/, "");
console.log(`Tailscale preview: http://${hostname || ip}:5173`);

const server = Bun.spawn(["bun", "run", "dev", "--host", ip], {
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
  env: { ...process.env, __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS: hostname || ip },
});

process.on("SIGINT", () => server.kill("SIGINT"));
process.on("SIGTERM", () => server.kill("SIGTERM"));
process.exit(await server.exited);
