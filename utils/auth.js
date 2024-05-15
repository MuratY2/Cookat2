// utils/auth.js

export async function signupUser(username, password) {
    const response = await fetch('https://64e8b8f1b07acb9a4c04577d.mockapi.io/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    const data = await response.json();
    if (response.ok) {
      console.log("Registered successfully:", data);
      return data;
    } else {
      throw new Error(data.error || 'Failed to signup');
    }
  }
  