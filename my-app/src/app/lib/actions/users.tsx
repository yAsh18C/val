"use server";
 export default async function getData() {

    const res = await fetch('https://valorant-api.com/v1/agents')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
