// api/validateElectric.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const customer = req.body.customer;
  
      try {
        const response = await fetch(
          `https://api.flutterwave.com/v3/bill-items/CB188/validate?code=BIL122&customer=${customer}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLUTTERWAVE_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
  
        if (!response.ok) {
          throw new Error('Failed to fetch data from the Flutterwave API');
        }
  
        const result = await response.json();
        res.status(200).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
      }
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }