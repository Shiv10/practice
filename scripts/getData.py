import bs4 as bs
import requests
import json

resp = requests.get('https://sachuverma.github.io/DataStructures-Algorithms/Striver%20Sheet/')
soup = bs.BeautifulSoup(resp.text, features='lxml')
elements = soup.findAll('li')
elements = elements[:len(elements)-6]

data = []
id = 0

for element in elements:
    anchor = element.find('a')
    d = {'status': False, 'link': anchor['href'], 'title': anchor.text, 'id': id+1 }
    id += 1
    data.append(d)

json_object = json.dumps(data)

with open("sample.json", "w") as outfile:
    outfile.write(json_object)

    

