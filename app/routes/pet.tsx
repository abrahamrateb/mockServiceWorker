// app/routes/pet.tsx
import { json, LoaderFunction } from 'react-router';
import { useLoaderData } from 'react-router-dom';
import { getPet } from '~/src/pet';

// Define the loader to fetch data from the Petstore API
export const loader: LoaderFunction = async () => {
//   const res = await fetch('https://petstore3.swagger.io/api/v3/pet/7');
//   if (!res.ok) {
//     throw new Error('Failed to fetch pet data');
//   }
//   const pet = await res.json();
//   return json(pet);
// };

const res = await getPet("7");
if (!res.response.ok) {
    throw new Error('Failed to fetch pet data');
}
const pet = await res.data;
return json(pet)
};

// Component to display pet data
export default function PetPage() {
  const pet = useLoaderData();

  return (
    <div className="flex flex-col items-center gap-9">
      {/* <title>Get PET</title> */}
      <h1 className='leading text-2xl font-bold text-gray-800 dark:text-gray-100' >Pet Details</h1>
      <h2 className='leading text-2xl font-bold text-gray-600 dark:text-gray-100'>{pet.name}</h2>
      <p className='leading text-xl font-bold text-blue-600 dark:text-gray-100'>Id: {pet.id}</p>
      <p className='leading text-xl font-bold text-green-600 dark:text-gray-100'>Status: {pet.status}</p>
      <img src={pet.imageUrl} alt={pet.name} />
    </div>
  );
}
