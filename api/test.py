import requests

response = requests.get(
    url = 'http://127.0.0.1:5000/generate',
    params = {
        'length': 10,
        'amount': 2
    }
)

print(response.content) 