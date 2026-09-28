import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("AIFORTHAI_API_KEY")

url = "https://api.aiforthai.in.th/ssense"

text = "สินค้าดีมาก ใช้งานง่าย ส่งเร็วมาก"

headers = {
    "Apikey": API_KEY
}

params = {
    "text": text
}

response = requests.get(
    url,
    headers=headers,
    params=params,
    timeout=30
)

print("Status Code:", response.status_code)
print("Result:")
print(response.json())
