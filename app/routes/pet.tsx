// app/routes/pet.tsx
import { json, LoaderFunction } from 'react-router';
import { useLoaderData } from 'react-router-dom';

// Define the loader to fetch data from the Petstore API
export const loader: LoaderFunction = async () => {
  const res = await fetch('https://petstore3.swagger.io/api/v3/pet/7');
  if (!res.ok) {
    throw new Error('Failed to fetch pet data');
  }
  const pet = await res.json();
  return json(pet);
};

// Component to display pet data
export default function PetPage() {
  const pet = useLoaderData();

  return (
    <div>
      <h1>Pet Details</h1>
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <img src={pet.imageUrl} alt={pet.name} />
    </div>
  );
}
