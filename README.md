# ipolls
作品介紹：利用網路爬蟲抓取特定網站資料，經過斷詞、分析正向詞語負向詞，算出一篇文章或網名對某議題的看法支持度，最後將過程放在自架的網頁上做demo。

## 大約製作過程:

### 第一步
找好你想要抓取內容的網站(有些需要設定playload，例如ptt)，找到其網頁標籤class名稱(可用chrome擴充功能info lite)，用python抓取下來。

### 第二步
利用python套件jieba斷詞，並過濾掉無意義之詞彙。

### 第三步
利用NTUSD比對詞彙的正向與負向，算出資料之意見傾向。

### Mysite is publish at https://leejongkai.github.io/ipolls/
