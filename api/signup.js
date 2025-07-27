export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const formData = new URLSearchParams();
  formData.append('gmail', req.body.gmail);
  formData.append('password', req.body.password);
  formData.append('toa', 'true');

  try {
    const response = await fetch('https://brgygo.great-site.net/resident_database/signup.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const text = await response.text(); // Assuming PHP returns text
    res.status(200).send(text); // You can parse it if JSON is returned
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ message: 'Proxy error', error: error.message });
  }
}
