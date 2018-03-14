#get trump
import requests
from bs4 import BeautifulSoup
payload = {
    'from':'/bbs/Gossiping/index.html',
    'yes':'yes'
}
rs = requests.session()
res = rs.post('https://www.ptt.cc/ask/over18', verify=False, data=payload)
res = rs.get('https://www.ptt.cc/bbs/Gossiping/M.1493425627.A.F1F.html', verify=False)
soup = BeautifulSoup(res.text, "html5lib")
soup = soup.select('.push-content')
##get the text part and append to list and then export with json
list=[]
for k in soup:
    #print(k.text)
    list.append(k.text)
##convert list into string

str1 = ''.join(list)
json.dump(str1,open("data/trump.json","w"))

##open the json file 
import json
with open('data/trump.json') as json_data:
    content = json.load(json_data)

import jieba
import json
import jieba.analyse
content_stop = open ('data/stop_words.txt', "r",encoding='utf-8').read()
content_Dp = open('data/NTUSD_positive_utf-8.txt', 'r',encoding='utf-8').read()
content_Np = open('data/NTUSD_negative_utf-8.txt', 'r',encoding='utf-8').read()

words = jieba.cut(content)

hash = {}
total = 0
good = 0
bad = 0
score = 0
for word in words:
    if word in content_stop:
        continue
    elif word in hash:
        hash[word] +=1
    else:
        hash[word] =1

for word in hash:
    if word in content_Dp:
        good +=1*hash[word]
        total +=1*hash[word]
        print('good',word)
    elif word in content_Np:
        bad +=1*hash[word]
        total +=1*hash[word]
        print('bad',word)

print('good:',good,'bad:',bad,'total:',total)
print('///////////////////////')
score=(good/(total))*100
print('YOUR SCORE IS:',float('%.2f' % (score)))
# tags = jieba.analyse.extract_tags(content, 5)
# print( 'top 5 frequency words：',",".join(tags))
