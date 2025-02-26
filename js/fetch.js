// This is a Vercel serverless function that acts as our simple redirection fetcher.
module.exports = async (req, res) => {
    const { url } = req.query;
    if (!url) {
      res.status(400).send("No URL provided.");
      return;
    }
    try {
      const response = await fetch(url);
      const data = await response.text();
      res.setHeader("Content-Type", "text/html");
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send("Error fetching the URL.");
    }
  };
  