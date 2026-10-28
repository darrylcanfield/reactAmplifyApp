import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

const SITE = "https://realgrappling.com"; // your real domain
const NAME = "RealGrappling";

// Override anything the auto-formatting gets wrong
const overrides: Record<string, { title: string; description?: string }> = {
  "/": { title: "Home", description: "The highest percentage, and most up to date grappling and jiujitsu available." },
  "/about": { title: "About", description: "The highest percentage, and most up to date grappling and jiujitsu available.." },
  "/standup2on1WristControl": { title: "Standup 2 on 1 Wrist Control" },
  "/attacking5050": { title: "Attacking 50/50 Guard" },
};

function prettify(path: string) {
  return path
    .replace("/", "")
    .replace(/([a-z])([A-Z0-9])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  const o = overrides[pathname];
  const title = o?.title ?? prettify(pathname);
  const description =
    o?.description ?? `${title}: techniques, details and videos on ${NAME}.`;
  const url = `${SITE}${pathname === "/" ? "" : pathname}`;
  const fullTitle = pathname === "/" ? NAME : `${title} | ${NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
