// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

import { CarProps } from "@/types";

export async function fetchCars(model: string) {
  const headers = {
    'X-RapidAPI-Key': '96bae30498msh2ee53d13833af06p1545a1jsn7ee985a9f1ae',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}`;
  const response = await fetch(url, {
    headers: headers
  })

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  // API key - hrjavascript-mastery
  const url = new URL('https://cdn.imagin.studio/getimage');
  const {year,make,model} = car;

  url.searchParams.append('customer','hrjavascript-mastery');
  url.searchParams.append('modelFamily',model.split(' ')[0]);
  url.searchParams.append('zoomType','fullscreen');
  url.searchParams.append('modelYear',`${year}`);
  url.searchParams.append('angle',`${angle}`);

  return url.toString();
}

