import { createClient } from "next-sanity";

export const client = createClient({
  projectId: 'n2d0sl08',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-08-01' // Specify Sanity API version
});