#Python code to illustrate parsing of XML files 
# importing the required modules 
import json
from flask import Flask, request, jsonify
app = Flask(__name__)

names = {
    'Texas State': 'TXST',
    'Lamar': 'LAM',
    'Auburn': 'AUB',
    'Alabama': 'BAMA',
    'MS State': 'MSST',
    'UTSA': 'UTSA',
    'South Carolina': 'SC',
}

def parseXML(filepath, team): 
    with open(filepath) as file_object:
        lines = file_object.readlines()
    for line in lines:
        if line not in ['\n', '\r\n']:
            line = line.strip()
            a = line.split('id="')
            if(len(a) > 1):
                if a[1].startswith(names[team]):
                    t = a[1].split('rank="')
                    q = t[1].split('" points')
                    return(q[0])
    return 'unranked'

def main(team): 
    # parse xml file 
    return parseXML('./src/back_end_components/sports/rankings.xml', team) 

def parseXMLT(filepath, team): 
    with open(filepath) as file_object:
        lines = file_object.readlines()
    for line in lines:
        if line not in ['\n', '\r\n']:
            line = line.strip()
            a = line.split('home="')
            if(len(a) > 1):
                if a[1].startswith('TXAM'):
                    #print(a[1])
                    awayTeam = a[1].split('away="')
                    #print(awayTeam[1])
                    if(awayTeam[1].startswith(names[team])):
                        #print('a[0]' + a[0])
                        t = a[0].split('scheduled="')
                        #print('t[1]' + t[1])
                        q = t[1].split('T')
                        date = q[0]
                        #print('q[1]' + q[1])
                        p = q[1].split('+')
                        #print('p[0]' + p[0])
                        r = p[0].split(':')
                        hours = int(r[0])
                        if hours == 0:
                            hours -= 1
                        minutes = r[1]
                        #print("hours: " + str(hours -5 )) 
                        hours = (hours-5) % 12
                        finalA = str(hours) + ':' + minutes
                        if hours == 11:
                            finalA = finalA + 'AM'
                        else:
                            finalA = finalA + 'PM'
                        return finalA
                        #print('date: ' + date + ' hours: ' + str(hours) + ' minutes: ' + minutes)

def mainT(team): 
    # parse xml file 
    return parseXMLT('./src/back_end_components/sports/schedule.xml', team)
#a = sys.argv[1]
#a = main(sys.argv[1])    
#print(a)

""" @app.route('/', methods = ['GET'])
def hello_world():
    return jsonify({'team': 'Texas State', 'rank': main('Texas State'), 'time': mainT('Texas State')},
    {'team': 'Lamar', 'rank': main('Lamar'), 'time': mainT('Lamar')},
    {'team': 'Auburn', 'rank': main('Auburn'), 'time': mainT('Auburn')},
    {'team': 'Alabama', 'rank': main('Alabama'), 'time': mainT('Alabama')},
    {'team': 'MS State', 'rank': main('MS State'), 'time': mainT('MS State')},
    {'team': 'UTSA', 'rank': main('UTSA'), 'time': mainT('UTSA')},
    {'team': 'South Carolina', 'rank': main('South Carolina'), 'time': mainT('South Carolina')})

if __name__ == '__main__':
    app.run(debug=True) """ 

def printJSON():
    """ data = {}
    data['teams'] = []
    data['teams'].append({'team': 'Texas State', 'rank': main('Texas State'), 'time': mainT('Texas State')})
    data['teams'].append({'team': 'Lamar', 'rank': main('Lamar'), 'time': mainT('Lamar')})
    data['teams'].append({'team': 'Auburn', 'rank': main('Auburn'), 'time': mainT('Auburn')})
    data['teams'].append({'team': 'Alabama', 'rank': main('Alabama'), 'time': mainT('Alabama')})
    data['teams'].append({'team': 'MS State', 'rank': main('MS State'), 'time': mainT('MS State')})
    data['teams'].append( {'team': 'UTSA', 'rank': main('UTSA'), 'time': mainT('UTSA')})
    data['teams'].append({'team': 'South Carolina', 'rank': main('South Carolina'), 'time': mainT('South Carolina')}) """
    data = { 'Texas State': {'rank': main('Texas State'), 'time': mainT('Texas State')},
            'Lamar': {'rank': main('Lamar'), 'time': mainT('Lamar')},
            'Auburn': {'rank': main('Auburn'), 'time': mainT('Auburn')},
            'Alabama': {'rank': main('Alabama'), 'time': mainT('Alabama')},
            'MS State': {'rank': main('MS State'), 'time': mainT('MS State')},
            'UTSA': {'rank': main('UTSA'), 'time': mainT('UTSA')},
            'South Carolina': {'rank': main('South Carolina'), 'time': mainT('South Carolina')},
            }
    
    with open('./src/back_end_components/sports/teaminfo.json', 'w') as outfile:
        json.dump(data, outfile)

printJSON()