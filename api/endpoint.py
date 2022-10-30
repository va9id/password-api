import random, string

CHARACTERS = string.ascii_letters + string.digits + string.punctuation

def generate_response(length: int, amount: int) -> str: 
    response = [__generate_password(length) for i in range(amount)]
    return response

def __generate_password(length: int) -> str: 
    password = "".join(random.choices( 
                population=CHARACTERS,
                k=length
            ))
    return {
        'password': password
    }



if __name__ == '__main__':
    print(generate_response(5, 10))