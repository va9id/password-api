# Password Generator Application

Allows you to generate a number of randomly generated passwords through a REST API. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### API requirements

- [Python3+](https://www.python.org/downloads/)
- Flask
  ```powershell
  pip install Flask
  ```
- Flask-Cors
  ```powershell
  pip install Flask-Cors
  ```
- requests
  ```powershell
  pip install requests
  ```
- [Node.js](https://nodejs.org/en/download/package-manager/)
- [npm](https://docs.npmjs.com/cli/v6/commands/npm-install)

## Usage
### API
```powershell
python3 api/app.py
```
- API runs on **port 5001** and is accessible at `/generate` with the require query string parameters.
  - Query parameters are:
    - _length_: integer length of randomly generated password(s)
    - _amount_: integer amount of randomly generated passwords
  - Ex: http://localhost:5001/generate?length=8&amount=3
- API can run on standalone

## Front-end
```powershell
npm start
```
- Front-end runs on **port 3000** and can be accessed @ [http://localhost:3000](http://localhost:3000).
- Ensure the API is running
