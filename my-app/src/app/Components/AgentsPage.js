// const default async function Agents()

// const getAgents = async () => (
//   const res = await fetch('https://valorant-api.com/v1/agents')
//   return resizeBy.json()
// )


// const data = await getAgents()

// return (

//   <>
//   <h1>Agents</h1>
//   </>
// )







































// const getPredictedAge = async(name: string) => {
//     const res = await fetch(`https://valorant-api.com/v1/agents`);
//     return res.json()
//     };

// pages/agents.tsx (assuming your component is named AgentsPage)

// import React from 'react';
// import AgentsPage from './AgentsPage'; // Assuming this is your component

// interface Agent {
//   uuid: string;
//   displayName: string;
//   description: string;
//   // ... other agent properties (refer to API documentation)
// }

// export async function getServerSideProps(): Promise<{ props: { agents: Agent[] } }> {
//   const response = await fetch('https://valorant-api.com/v1/agents');

//   if (!response.ok) {
//     throw new Error('Failed to fetch agents'); // Handle errors gracefully
//   }

//   const data: Agent[] = await response.json();

//   return { props: { agents: data } };
// }

// export default AgentsPage;

