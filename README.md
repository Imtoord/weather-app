<h2>Weather App</h2>

<h3>Project Overview</h3>
<p>This project is a simple Weather App that provides weather information based on user-specified locations. It uses Express.js for the server, EJS for templating, and a weather API to fetch weather data.</p>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js installed</li>
  <li>npm installed</li>
  <li>A valid weather API key</li>
</ul>

<h3>Installation</h3>
<ol>
  <li>Clone the repository.</li>
  <li>Run <code>npm install</code> to install dependencies.</li>
  <li>Create a <code>.env</code> file in the root directory and add your weather API key:
    <pre>
WEATHER_API_KEY=your_api_key_here
WEATHER_URL=your_weather_api_url_here
PORT=3000
    </pre>
  </li>
</ol>

<h3>File Structure</h3>
<pre>
project-root
│
├── public
│   └── (static files like CSS, JS, images)
│
├── utils
│   └── weatherData.js
│
├── views
│   └── index.ejs
│
├── .env
├── package.json
├── main.js
└── README.md
</pre>

<h3>Routes</h3>

<h4>GET /</h4>
<p>Renders the main page of the Weather App.</p>
<p>Response: Renders the <code>index.ejs</code> view.</p>
<p>Example: <code>http://localhost:3000/</code></p>

<h4>GET /weather</h4>
<p>Fetches weather data for a specified address.</p>
<ul>
  <li><strong>Query Parameters:</strong></li>
  <ul>
    <li><code>address</code> (required): The address/location for which to fetch the weather.</li>
  </ul>
  <li><strong>Response:</strong> Returns weather data in JSON format.</li>
  <li><strong>Example:</strong> <code>http://localhost:3000/weather?address=London</code></li>
</ul>

<h4>ALL *</h4>
<p>Handles all other routes and returns a 404 error.</p>
<p>Response: Renders a simple HTML message indicating the route was not found.</p>
<p>Example: <code>http://localhost:3000/nonexistentroute</code></p>

<h3>Utilities</h3>

<h4><code>utils/weatherData.js</code></h4>
<ul>
  <li><strong>Function:</strong> <code>weatherData(address, cb)</code></li>
  <li><strong>Description:</strong> Fetches weather data from the weather API.</li>
  <li><strong>Parameters:</strong>
    <ul>
      <li><code>address</code>: The location for which to fetch the weather.</li>
      <li><code>cb</code>: A callback function to handle the response.</li>
    </ul>
  </li>
  <li><strong>Example Usage:</strong>
    <pre>
weatherData('London', (err, data) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Data:', data);
    }
});
    </pre>
  </li>
</ul>

<h3>Running the Application</h3>
<ol>
  <li>Ensure you have created the <code>.env</code> file with the appropriate API key and URL.</li>
  <li>Start the server:
    <pre>node main.js</pre>
  </li>
  <li>Open your browser and navigate to:
    <pre>http://localhost:3000/</pre>
  </li>
</ol>

<h3>Example .env File</h3>
<pre>
WEATHER_API_KEY=your_api_key_here
WEATHER_URL=http://api.openweathermap.org/data/2.5/weather?q=
PORT=3000
</pre>
