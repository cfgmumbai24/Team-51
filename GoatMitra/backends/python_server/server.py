from flask import Flask, request, jsonify
from langchain_community.document_loaders import PyPDFLoader
from langchain_google_genai import ChatGoogleGenerativeAI
import os
import dotenv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
dotenv.load_dotenv()
key = os.getenv('GOOGLE_API_KEY')
loader = PyPDFLoader("C:\\Users\\sashr\\OneDrive\\Desktop\\JPMC hack\\final-Sangamneri.pdf")
llm = ChatGoogleGenerativeAI(model="gemini-pro")
pages = loader.load_and_split()

disease = """

DISEAES FOR GOAT 

BACTERIAL DISEASES
Anthrax	 : Sudden fever and death
Dark color bloody discharge from the natural orifice such as nose, anus and vagina	Vaccination once in a year in affected area
Disposal of carcass either by burying or burning
Don’t open the carcass as the germ spread through air
Haemorrhagic Septicemia	: Fever, dysentery, swelling of lower mandible and death
More occurrence in rainy season	Vaccinate the animal once in a year before onset of rainy season
Brucellosis	 : Abortion during late pregnancy, infertility, scrotal swelling in male, joint swelling	Disposal of dead foetus and placenta
Use gloves while handling infected items as it affect human beings
Enterotoxaemia : 	Sudden death in young growing kids. Mucous diarrhea may also seen during death	Vaccinate the animals once in a year before the onset of monsoon
Don’t feed on young grass
Pneumonia : 	Fever, respiratory distress, mucous discharge from nostril, reduced feed intake and weight gain, cough	Clean water, well ventilated house
Foot rot	 : Wound in foot region	Keep the animal in dry clean house
Mastitis	: Swelling of udder, change in milk	Clean shed, wash the udder with disinfectant solution
VIRAL DISEASES
Peste Des Petits Ruminants (PPR)	 : Fever, Occular and nasal mucous discharge, mouth lesion, respiratory distress	Yearly vaccination
Separation of infected one from healthy animals
Foot and Mouth Disease:	Fever, wound lesion in foot and mouth, excess salivary secretion, difficult in walking	First vaccination at 3rd moth and then once in 4-6 months interval
Goat pox	Fever : , Occular and nasal mucous discharge, respiratory distress, pox lesion in un hairy parts such as lips, thigh udder etc	Yearly vaccination (Optional)
Endo-parasitic diseases
Fluke infection : 	Emaciation, anaemia, edema in lower jaw	Control of snails, avoid grazing in early morning and late evening, deworming of animals periodically
Tape worm : 	Reduced growth, fever, kid mortality	Deworming of animals periodically
Round worm	: Fever, anaemia, edema in lower jaw, reduced growth	deworming of animals periodically
Coccidiosis	: Blood tinged brownish diarrhea, anaemia, kid mortality	Clean house, spray of 10% ammonia solution, administration of anticoccidial drugs
Ecto-parasitic infestation
Tick, lice etc : 	Reduced growth, skin allergy and wound	Clean house, periodical dipping
"""

data = ""

for page in pages:
    data += page.page_content

def ask(query):
    if not isinstance(query, str):
        query = str(query)
    prompt = disease + query + " Based on the below content details provide disease and comprihensive details about the goats conditions "
    response = llm.invoke(prompt)
    return response.content

print(ask("tell me symptoms of anthrax"))

def ask2(query):
    if not isinstance(query, str):
        query = str(query)
    query += "summerise data in highly comprehensive way and also predict goats disease "
    response = llm.invoke(query)
    return response.content

print(ask2("my goat height is 41 cm is that normal or short what can be disease"))

@app.route('/ask', methods=['POST'])
def ask_endpoint():
    try:
        query = request.json.get('query')
        if not query:
            return jsonify({"error": "No query provided"}), 400
        
        response = ask(query)
        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/ask2', methods=['POST'])
def ask2_endpoint():
    try:
        query = request.json.get('query')
        if not query:
            return jsonify({"error": "No query provided"}), 400
        
        response = ask2(query)
        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
