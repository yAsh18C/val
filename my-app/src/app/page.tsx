"use client";

import { useState } from "react";
import React, { useEffect } from 'react';
import getData from "./lib/actions/users";
import getDetails from "./Info/[name]/page";
import Image from 'next/image';
import Link from "next/link";


export default function Home() {
  const [agent, setagent, ] = useState([])

  useEffect(() => {
    getData().then((data) => {
      setagent(data.data);
    })
  }, []);


  return (
    <div>

      <h1 className="text-center font-mono font-bold text-7xl ">Valorant Agents</h1>
      <div className=" container mx-auto font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center px-12 py-10">

        {agent.map((user: any) => {
          return (

            <div key={user.uuid} className=" w-full sm:w-[300px] h-[350px] mb-10 border border-gray-400 border-2 bg-transparent hover:bg-red-950" >

              <div className="bg-transparent hover:bg-maroon h-[30px] transition duration-300 ease-in-out">
                <h2 className="text-bold text-center text-xl text-white">{user.displayName}</h2>
              </div>

              <img src={user.fullPortrait} alt="Couldn't load image " className="width-100% hover:scale-110 hover:delay-300" />

              <div className="flex justify-center items-center">
              <Link href={`/Info/${user.uuid}`}>
                <button className=" flex flex-row bg-maroon-500 p-4 rounded shadow-md text-white hover:bg-red-400 justify-items-center mb-10 border border-gray-50 border-2 border-spacing-4 w-[130px] px-3 py-1 mb-1 text-center">
                  Know More
                </button>
                </Link>
              </div>

              {/* <p>{user.description}</p> 
                <p>{user.developerName}</p>  */}

            </div>



          );
        })
      
      }
      </div>
    </div>
  )
}


















// export default function AgentsPage({ agents }: { agents: Agent[] }) {
//   return (
//     <div>
//       <h1>Valorant Agents</h1>
//       <ul>
//         {agents.map((agent) => (
//           <li key={agent.uuid}>
//             <h2>{agent.displayName}</h2>
//             <p>{agent.description}</p>
//             {/* Display other agent properties as needed */}
//           </li>
//         ))}
//       </ul>











// import React from 'react';

// interface Agent {
//   uuid: string;
//   displayName: string;
  // Add other agent properties as needed


// export async function Home() {
//   let agents: Agent[] = []; // Initialize empty array

//   try {
//     const response = await fetch("https://valorant-api.com/v1/agents");

//     if (!response.ok) {
//       throw new Error(`API request failed with status ${response.status}`);
//     }

//     const data = await response.json();
//     agents = data.data;
//   } catch (error) {
//     console.error('Error fetching agents:', error);
//     // Handle errors gracefully (e.g., provide an error message)
//   }

//   return (
//     <div>
//       <h1>Agents</h1>
//       {agents.length > 0 ? (
//         agents.map((agent) => (
//           <div key={agent.uuid}>
//             <h2>{agent.displayName}</h2>
//             {/* Uncomment the following lines to display additional agent properties */}
//             {/* <p>{agent.description}</p> */}
//             {/* <p>{agent.developerName}</p> */}
//           </div>
//         ))
//       ) : (
//         <p>No agents found.</p>
//       )}
//     </div>
//   );
// }







// type Repository = {
//   uuid: string;
//   displayName: string;
//   description: string;
// };


// export default async function Page() {
//   const res = await fetch ('https://valorant-api.com/v1/agents');
//   const data: Repository = await res.json();
//   return <h1>Agents:{data.displayName}</h1>
// }






























// import Image from "next/image";
// "use client";

// import { useState, FormEvent } from "react";
// import {useRouter} from 'next/navigation'
// export default function Home() {
// return(
//   <div className="text fill-white"> Hello </div>
// )

// }


// export default async function Page() {
//   // This request should be cached until manually invalidated.
//   // Similar to `getStaticProps`.
//   // `force-cache` is the default and can be omitted.
//   const staticData = await fetch(`https://valorant-api.com/v1/agents`)

//   // This request should be refetched on every request.
//   // Similar to `getServerSideProps`.
//   // const dynamicData = await fetch(`https://valorant-api.com/v1/agents`, { cache: 'no-store' })

//   // This request should be cached with a lifetime of 10 seconds.
//   // Similar to `getStaticProps` with the `revalidate` option.
//   // const revalidatedData = await fetch(`https://...`, {
//   //   next: { revalidate: 10 },
//   // })

//   return (
//   <div>Valorant Agents</div>
//   <ul>
//            {agents.map((agent) => (
//             <li key={agent.uuid}>
//               <h2>{agent.displayName}</h2>
//               <p>{agent.description}</p>
//             </li>
//           ))}
//          </ul>
//   )
// }

// import React from 'react';

// interface Agent {
//   uuid: string;
//   displayName: string;
//   description: string;
//   // ... other agent properties (refer to API documentation)
// }

// export async function fetch(): Promise<{ props: { agents: Agent[] } }> {
//   const response = await fetch('https://valorant-api.com/v1/agents');

//   // if (!response.ok) {
  //   throw new Error('Failed to fetch agents'); // Handle errors gracefully
  // }

//   const data: Agent[] = await response.json();

//   return { props: { agents: data } };
// }

// export default function AgentsPage({ agents }: { agents: Agent[] }) {
//   return (
//     <div>
//       <h1>Valorant Agents</h1>
//       <ul>
//         {agents.map((agent) => (
//           <li key={agent.uuid}>
//             <h2>{agent.displayName}</h2>
//             <p>{agent.description}</p>
//             {/* Display other agent properties as needed */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



















//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
