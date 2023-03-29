import pymongo

# Verbindung zur MongoDB-Instanz herstellen
client = pymongo.MongoClient("mongodb://root:example@localhost:27017/")

# Datenbank "Music" auswählen
db = client['Music']

# Kollektion "Interpret" erstellen und Daten einfügen
interpret = db['Interpret']
interpret_data = [
    {
    'name': 'Ton Steine Scherben',
    'genre': 'Rock',
    'origin': 'Berlin'
    },
    {
    'name': 'Queen',
    'genre': 'Rock',
    'origin': 'GB'
    }
]

for i in interpret_data:
    if not (interpret.find_one(i)):
        interpret.insert_one(i)
    

""" interpret.insert_one(interpret_data)
# Kollektion "Musikstück" erstellen und Daten einfügen
musikstueck = db['Musikstück']
musikstuecke_data = [
    {
        'title': 'Keine Macht für Niemand',
        'year': '1972',
        'album': 'Keine Macht für Niemand',
        'interpret': interpret_data['_id']
    },
    {
        'title': 'Der Traum ist aus',
        'year': '1972',
        'album': 'Keine Macht für Niemand',
        'interpret': interpret_data['_id']
    },
    {
        'title': 'Macht kaputt, was euch kaputt',
        'year': '1971',
        'album': 'Warum geht es mir so dreckig?',
        'interpret': interpret_data['_id']
    },
    {
        'title': 'Rauch-Haus-Song',
        'year': '1972',
        'album': 'Keine Macht für Niemand',
        'interpret': interpret_data['_id']
    },
    {
        'title': 'Wir müssen hier raus',
        'year': '1976',
        'album': 'IV',
        'interpret': interpret_data['_id']
    }
]
musikstueck.insert_many(musikstuecke_data)

# Verknüpfung der Kollektionen
musikstueck.create_index([('interpret', 1)])

print('Daten erfolgreich in MongoDB eingefügt.')
 """