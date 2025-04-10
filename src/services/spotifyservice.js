const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

let accessToken = null;

async function getAccessToken() {
  if (accessToken) return accessToken;

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  accessToken = data.access_token;
  return accessToken;
}

export async function fetchSoundtrack(movieTitle) {
  try {
    const token = await getAccessToken();

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(movieTitle)}%20soundtrack&type=album&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    if (data.albums && data.albums.items.length > 0) {
      return data.albums.items[0];
    } else {
      console.warn('No soundtrack found for', movieTitle);
      return null;
    }
  } catch (error) {
    console.error('Error fetching soundtrack:', error);
    return null;
  }
}
