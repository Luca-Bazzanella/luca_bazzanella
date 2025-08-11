
export async function getAllConferencesContent(locale: string = 'en') {
  // Example GROQ query, adjust fields to match your Sanity schema
  const query = `
    *[_type == "allConferences" && language == $locale][0]{
      allConferences {
        backToHome,
        title,
        subtitle,
        allConferences[] {
          title,
          date,
          location,
          attendees,
          topic,
          link,
          links[] {
            name,
            url
          }
        },
        attendees
      }
    }
  `;
  const params = { locale };
  const result = await client.fetch(query, params);
  return result;
}
import { client } from "@/sanity/client";

