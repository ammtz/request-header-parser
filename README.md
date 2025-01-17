# Request Header Parser Microservice

A simple Node.js API that returns client information such as IP address, language, and software details.

## Endpoints

### `/api/whoami`
- Returns a JSON object with the following:
  - `ipaddress`: The client's IP address.
  - `language`: The client's preferred languages.
  - `software`: The client's operating system and browser details.

#### Example Response:
```json
{
  "ipaddress": "192.168.69.10",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}
