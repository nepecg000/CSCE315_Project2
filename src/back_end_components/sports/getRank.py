#Python code to illustrate parsing of XML files 
# importing the required modules 
import http.client

def loadRSS(): 
    conn = http.client.HTTPSConnection("api.sportradar.us")

    conn.request("GET", "/ncaafb-t1/polls/AP25/2019/15/rankings.xml?api_key=m54x5e266q7b5sh727hsz39b")

    res = conn.getresponse()
    data = res.read()
    # saving the xml file 
    with open('./src/back_end_components/sports/rankings.xml', 'wb') as f: 
        f.write(data)

loadRSS()