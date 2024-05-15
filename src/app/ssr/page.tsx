import { getDateString, getRandomUUID } from "../utils";

export const dynamic = "force-dynamic";

async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error();
  return res.json();
}

export default async function Page() {
  const pokemon = await getPokemon("ditto");
  return (
    <main className="content">
      <h1 className="heading">A server generated page!</h1>

      <section className="data-container">
        <article className="card">
          <p>Generated</p>
          <h2>{getDateString()}</h2>
        </article>
        <article className="card">
          <p>UUID</p>
          <h2>{getRandomUUID()}</h2>
        </article>
      </section>
      <section className="data-container">
        <article className="card">
          <p>Generated</p>
          <h2>{pokemon.name}</h2>
        </article>
        <article className="card">
          <p>UUID</p>
          <h2>{pokemon.weight}</h2>
        </article>
      </section>
    </main>
  );
}
