import { basehub } from "basehub";
import { RenderBaseHubRichText } from "basehub/react";

export default async function HomePage() {
  const firstQuery = await basehub().query({
    homepage: {
      _title: true,
    },
  });

  return (
    <main>
      <pre>{JSON.stringify(firstQuery, null, 2)}</pre>
      <br />
      <RenderBaseHubRichText html="<h1>Holis</h1>" />
    </main>
  );
}
