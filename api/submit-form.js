import { sql } from '@vercel/postgres';

// This file defines a serverless function that handles form submissions
// and stores the data in a PostgreSQL database.

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body;

    console.log('POSTGRES_URL:', process.env.POSTGRES_URL);

    try {
      // Insert the form data into PostgreSQL
      // Use the POSTGRES_URL environment variable
    const connectionString = process.env.POSTGRES_URL;
      await sql`
        INSERT INTO contacts (first_name, last_name, email, submitted_at)
        VALUES (${firstName}, ${lastName}, ${email}, ${new Date()})
      `;
      
      res.redirect(302, '/contact-thank-you');
    } catch (error) {
      console.error('Failed to submit form:', error);
      res.status(500).json({ error: 'Failed to submit form' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
// How this works:
// 1. This file is a serverless function that runs on-demand when the form is submitted.
// 2. It checks if the request method is POST (form submission).
// 3. It extracts the form data from the request body.
// 4. It connects to a PostgreSQL database using the @vercel/postgres package.
// 5. It inserts the form data into a 'contacts' table in the database.
// 6. If successful, it redirects to a thank you page.
// 7. If there's an error, it logs the error and returns a 500 status code.
// 8. If the request method is not POST, it returns a 405 status code.

// To use this serverless function with your PostgreSQL database:
// 1. Ensure you have set up a PostgreSQL database with Vercel.
// 2. The POSTGRES_URL should be automatically set as an environment variable by Vercel.
// 3. Create a 'contacts' table in your database with columns: id, first_name, last_name, email, submitted_at.
// 4. Deploy this file to Vercel as an API route.
// 5. Update your form's action attribute to point to this serverless function's URL.
// 6. Make sure your form field names match the ones used in this code (firstName, lastName, email).
