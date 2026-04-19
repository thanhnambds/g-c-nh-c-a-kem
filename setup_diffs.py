import urllib.request
import json
import os

images = [
    {"url": "https://illustoon.com/photo/8282.png", "name": "diff_real_1.png"},
    {"url": "https://illustoon.com/photo/8285.png", "name": "diff_real_2.png"}
]

for img in images:
    path = os.path.join('assets', img['name'])
    try:
        urllib.request.urlretrieve(img['url'], path)
        print(f"Saved {path}")
    except Exception as e:
        print(f"Failed {img['url']}: {e}")

