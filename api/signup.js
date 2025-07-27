export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://brgygo.great-site.net/resident_database/signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();  // kunin raw text para makita
    console.log('Raw response from InfinityFree:', text);  // log it

    // Subukang i-parse kung JSON
    try {
      const data = JSON.parse(text);
      res.status(200).json(data);
    } catch (parseError) {
      console.error('Response is not valid JSON:', text);
      res.status(500).json({ message: 'Invalid JSON response from backend', raw: text });
    }
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
