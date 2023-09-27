"use client";
import Card from "@/components/cards";
import { useEffect, useState } from "react";
import fetchProposals from "@/graphql/queries/proposals";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const proposalsData = await fetchProposals();
        setProposals(proposalsData);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred."));
        }
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-5 gap-10">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error.message}</div>
      ) : (
        proposals &&
        proposals.map(({ id, title, body }) => (
          <Card key={id} id={id} title={title} body={body} />
        ))
      )}
    </main>
  );
}
