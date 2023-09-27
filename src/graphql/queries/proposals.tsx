import { client } from "@/utils/apolloClient";
import { gql } from "@apollo/client";

async function fetchProposals() {
  try {
    const { data } = await client.query({
      query: gql`
        query GetProposals {
          proposals(
            first: 20
            skip: 0
            where: { space_in: ["apecoin.eth"], state: "closed" }
            orderBy: "created"
            orderDirection: desc
          ) {
            id
            title
            body
            choices
            start
            end
            snapshot
            state
            scores
            scores_by_strategy
            scores_total
            scores_updated
            author
            space {
              id
              name
            }
          }
        }
      `,
    });

    const proposals = data.proposals || [];
    return proposals;
  } catch (error) {
    console.error("Error fetching proposals:", error);
    throw error;
  }
}

export default fetchProposals;
