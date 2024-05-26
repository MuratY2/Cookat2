// utils/auth.js

export async function signupUser(username, password) {
    if (username.length < 3 || password.length < 3) {
      throw new Error('Username and password must be at least 3 characters long');
    }
  
    const existingUsersResponse = await fetch('https://6644200a6c6a656587094591.mockapi.io/users');
    const existingUsers = await existingUsersResponse.json();
  
    const userExists = existingUsers.some(user => user.username === username);
    if (userExists) {
      throw new Error('Username already exists');
    }
  
    const response = await fetch('https://6644200a6c6a656587094591.mockapi.io/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }
  
    const data = await response.json();
    return data;
  }
  
  export async function loginUser(username, password) {
    if (username.length < 3 || password.length < 3) {
      throw new Error('Username and password must be at least 3 characters long');
    }
  
    const response = await fetch('https://6644200a6c6a656587094591.mockapi.io/users');
    const users = await response.json();
  
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
      throw new Error('Invalid username or password');
    }
  
    const sessionResponse = await fetch('https://6644200a6c6a656587094591.mockapi.io/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: user.id, username: user.username })
    });
  
    const sessionData = await sessionResponse.json();
    return sessionData;
  }
  
  export async function logoutUser(sessionId) {
    await fetch(`https://6644200a6c6a656587094591.mockapi.io/sessions/${sessionId}`, {
      method: 'DELETE'
    });
  }
  
  export async function getLoggedInUser() {
    const response = await fetch('https://6644200a6c6a656587094591.mockapi.io/sessions');
    const sessions = await response.json();
    return sessions.length > 0 ? sessions[0] : null;
  }
  