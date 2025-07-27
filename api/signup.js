// File: /api/signup.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
https://github.com/KEL013021/brgygo/blob/main/api/signup.js
  try {
    const response = await fetch('https://brgygo.great-site.net/resident_database/signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    return res.status(response.status).json(result);
  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({ success: false, message: 'Server error (proxy)' });
  }
}
