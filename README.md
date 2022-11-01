# Password Generator Application
### About Project
This application allows you to generate a number of randomly generated passwords. The application gets the randomly generated passwords from the API developed using **Python's Flask** framework. You can interact with the API using the applications front-end developed using **ReactJS**. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started
### API requirements
- Python3 or later
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
### Front-end requirements 
- [Node.js installation](https://nodejs.org/en/download/package-manager/)
- [npm](https://docs.npmjs.com/cli/v6/commands/npm-install)

## Usage  
- Clone the repo:
```
git clone https://github.com/vahido9/password-api.git
```
## Starting the API 
- Go into the `api` directory:
```powershell
cd api
```
- Run the app.py: 
```powershell
python3 app.py
```
- The API is now running on **port 5001**. The API can be called by accessing its **/generate** endpoint with its query string parameters. 
    - Ex: http://localhost:5001/generate?length=4&amount=4
    - Query parameters are: 
        - *length*: integer length of randomly generated password(s)
        - *amount*: integer amount of randomly generated passwords
- The API can be started without starting the front-end. 
## Starting the Front-end
- In the project directory, you can run:
    ```powershell
    npm start
    ```
    Runs the app in the development mode on **port 3000**. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- Ensure that API is also running to be able to use the front-end application.