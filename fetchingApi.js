function fetchRandomUser(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        const firstName = user.name.first;
        const lastName = user.name.last;
        const email = user.email;
        const username = user.login.username;
        const city = user.location.city;
        const country = user.location.country;
  
        console.log('Random User:');
        console.log('Name:', firstName, lastName);
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('City:', city);
        console.log('Country:', country);
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Usage example:
  const apiUrl = 'https://randomuser.me/api';
  fetchRandomUser(apiUrl);