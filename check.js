const https = require('https');
https.get('https://images.unsplash.com/photo-1544365558-35aa28373bdf', (res) => {
  console.log(res.statusCode);
});
