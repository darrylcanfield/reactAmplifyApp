import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1>Page not found</h1>
      <p>Sorry, that page doesn't exist.</p>
    </>
  );
}
