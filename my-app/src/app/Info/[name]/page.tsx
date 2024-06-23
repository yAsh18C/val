import { notFound } from 'next/navigation';



const getDetails = async (name: string) => {
  const res = await fetch(`https://valorant-api.com/v1/agents/${name}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.data;
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const details = await getDetails(params.name);

  if (!details) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-center font-mono font-bold text-7xl">Valorant Agents</h1>

      
      <h1 className='text-center text-5xl py-4 text-white hover:scale-110'>{details.displayName}</h1>
              
        
        <div className='container flex p-4 mx-72'>
          
        <div className='flex-col basis 1/2 text-white py-5'>
        <img src={details.fullPortrait} alt="Couldn't load image " className="width-100% hover:scale-150 hover:delay-300 h-96 p-2" />
        
        </div>
        <div className=' flex-col basis 1/2 justify-center items-center text-2xl  w-[450px] h-[400px] text-white py-2'>
        {/* border border-gray-400 border-2 px-4 hover:bg-gray-900 hover:delay-300 */}
       
        {/* <h1 className='basis-1/4 py-2'>{details.role.displayName}</h1> */}
        

         {/* <h1 className='py-2'>{details.role.description}</h1> */}
         
        <h1 className='justify-center animate-fadeInLine'>{details.description}</h1>
        <div className='mt-4'></div>
        <div className='container flex flex-col justify-center items-center  hover:bg-red-900 w-[120px] hover:delay-300 border border-red-900 border-2 mx-auto px-1 py-1'>
       
        {/* <h1 className='basis-1/4 py-2'>{details.role.displayName}</h1> */}
       
        <h1 className='flex justify-center items-center'>Role:</h1>

        <img src={details.role.displayIcon} alt="Couldn't load image "  className=' h-16 py-1 flex justify-center items-center'/>
        <h1 className='basis-1/4 py-2 flex justify-center items-center'>{details.role.displayName}</h1>
        </div>
        </div>
        </div>


        <h1 className='text-4xl text-center text-white py-10'>Special Abilities:</h1>
        <div className=" container font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center px-12 py-10 text-white mx-20">

        <div className=" w-[300px] h-[480px] mb-10 border border-gray-200 border-2 bg-transparent hover:bg-gray-900 px-1 text-white" >
        <img src={details.abilities[0].displayIcon} alt="Couldn't load image " className='w-32 h-32 mx-auto' />
        <h1 className='text-center py-1'>{details.abilities[0].displayName}</h1>
        <h1 className='text-justify px-1 py-1'>{details.abilities[0].description}</h1>
       </div>

       <div className=" w-[300px] h-[480px] mb-10 border border-gray-200 border-2 bg-transparent hover:bg-gray-900 px-1" >
       <img src={details.abilities[1].displayIcon} alt="Couldn't load image " className='w-32 h-32 mx-auto' />
        <h1 className='text-center py-1'>{details.abilities[1].displayName}</h1>
        <h1 className='text-justify px-1 py-1'>{details.abilities[1].description}</h1>
        </div>

        <div className=" w-[300px] h-[480px] mb-10 border border-gray-200 border-2 bg-transparent hover:bg-gray-900 px-1"  >
        <img src={details.abilities[2].displayIcon} alt="Couldn't load image " className='w-32 h-32 mx-auto' />
        <h1 className='text-center py-1'>{details.abilities[2].displayName}</h1>
        <h1 className='text-justify px-1 py-1'>{details.abilities[2].description}</h1>
        </div>
        
        <div className=" w-[300px] h-[480px] mb-10 border border-gray-200 border-2 bg-transparent hover:bg-gray-900 px-1" >
        <img src={details.abilities[3].displayIcon} alt="Couldn't load image " className='w-32 h-32 justify-center mx-auto' />
        <h1 className='text-center py-1'>{details.abilities[3].displayName}</h1>
        <h1 className='text-justify px-1 py-1'>{details.abilities[3].description}</h1>
        </div>
        

        </div>
        </div>
  )
 
}

          
 


//   return(
//      <div>
//          {agent.map((user: any) => {
//           return (

//             <div key={user.uuid}>
        
//        <h1>{details.displayName}</h1>
//       <h1>{details.background}</h1>
//       <h1>{details.description}</h1>
//       <h1>{details.developerName}</h1>
      
//     </div>
         
//   );
  
// }


// import { notFound } from 'next/navigation';

// interface AgentDetails {
//   uuid: string;
//   displayName: string;
//   description: string;
//   developerName: string;
//   fullPortrait: string;
//   background: string;
//   // Add any other fields you need from the API response
// }

// const getDetails = async (Name: string): Promise<AgentDetails | null> => {
//   const res = await fetch(`https://valorant-api.com/v1/agents/${Name}`);
//   if (!res.ok) {
//     return null;
//   }
//   const data = await res.json();
//   return data.data;
// };

// interface Params {
//   params: { Name: string };
// }

// export default async function Page({ params }: Params) {
//   const details = await getDetails(params.Name);

//   if (!details) {
//     notFound();
//     return null;  // Ensure a null return in case of not found
//   }

//   return (
//     <div>
//       <h1>{details.displayName}</h1>
//       <h1>{details.background}</h1>
//       <h1>{details.description}</h1>
//       <h1>{details.developerName}</h1>
//     </div>
//   );
// }
