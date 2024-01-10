// Mock API endpoint to fetch weather data
const getWeatherData = () => {
    // Simulate fetching weather data (replace with actual API call)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomTemperature = Math.floor(Math.random() * 30) + 50; // Simulated temperature data
        const weatherData = {
          temperature: randomTemperature,
          humidity: Math.floor(Math.random() * 60) + 40, // Simulated humidity data
        };
        resolve(weatherData);
      }, 1000); // Simulate delay of 1 second
    });
  };

  // A. fetchWeatherData function
  const fetchWeatherData = async () => {
    try {
      const data = await getWeatherData();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };

  // B. updateDashboard function
  const updateDashboard = (weatherData) => {
    // Update the dashboard with the latest weather data
    console.log('Updating dashboard with data:', weatherData);
    // Replace with actual dashboard update logic
  };

  // C. startMonitoring function
  const startMonitoring = () => {
    const monitoringInterval = 5000; // 5 seconds

    const monitor = async () => {
      try {
        const weatherData = await fetchWeatherData();
        updateDashboard(weatherData);
      } catch (error) {
        // Stop monitoring if an error occurs
        clearInterval(intervalId);
      }
    };

    // Initial call to fetch and update weather data
    monitor();

    // Set up interval to fetch data periodically
    const intervalId = setInterval(monitor, monitoringInterval);
  };

  // Start the monitoring process
  startMonitoring();


  // O/P:

  // Updating dashboard with data: {temperature: 53, humidity: 68}


//   Question – 1

// You are building a real-time dashboard for monitoring a weather station's data. The weather station 
// updates its data every 5 seconds. You need to fetch this data and update the dashboard accordingly. 
// Implement the following functions: 
// A. fetchWeatherData function: This function should return a Promise that resolves with the latest 
// weather data from the station. You can assume that there's an API endpoint getWeatherData that 
// returns the data.
// B. updateDashboard function: This function should be called every time new weather data is fetched. It 
// takes the weather data as a parameter and updates the dashboard with the latest information. 
// C. startMonitoring function: This function should use setInterval to fetch weather data every 5 seconds 
// and update the dashboard.
// Requirements: 
// ● Use async/await to handle asynchronous operations. 
// ● Ensure that the dashboard is updated with the latest data.
// ● Implement error handling for fetching data.
// ● Stop monitoring when an error occurs and log an error message. Your code should demonstrate the 
// correct usage of async/await, Promise, setTimeout, and setInterval. Provide a code example that 
// initialises and starts the monitoring process.


//   In this code:

//   We have a mock getWeatherData function that simulates fetching weather data.
//    Replace it with your actual API call.
//   The fetchWeatherData function fetches weather data and handles errors.
//   The updateDashboard function updates the dashboard with the latest weather data.
//   The startMonitoring function sets up an interval to fetch data every 5 seconds
//    and handles errors by stopping the monitoring if an error occurs.
//   We initiate the monitoring process by calling startMonitoring().