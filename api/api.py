#!flask/bin/python
from flask import Flask, jsonify, request, make_response, url_for
from flask.ext.restful import Api, Resource, reqparse
import requests
from lxml import html
from bs4 import BeautifulSoup
import geocoder
from geopy.distance import vincenty
from geopy.geocoders import Nominatim
import urllib2, re, urlparse, json

app = Flask(__name__)
api = Api(app)

class GetTripResponse(Resource):
    def get(self):
        return make_response(jsonify( { 'error': 'not implimented' } ), 200)
    def post(self):
        parameter_data = request.get_json(force=True)
        if parameter_data.get('cityname') and parameter_data.get('lat') and parameter_data.get('lng'):
            #do city stuff
            main_response = []
            dest_city_name = parameter_data.get('cityname');
            city_lat = parameter_data.get('lat')
            city_lng = parameter_data.get('lng')
            
            g = geocoder.google(parameter_data.get('cityname'))
            
            current_city = [city_lat, city_lng]
            
            destination_city = g.latlng
            
            distance = vincenty(current_city, destination_city).miles
            geolocator = Nominatim()
            location = geolocator.reverse([city_lat, city_lng])
            
            response_data = {}
            if(distance < 100):
                #do uber
                url = 'https://api.uber.com/v1/estimates/price'
                parameters = {
                'server_token': 'KwHygnd9UVQOSWT8qJB9fhm2OoStOILx4IrBH_I6',
                'start_latitude': city_lat,
                'start_longitude': city_lng,
                'end_latitude': g.latlng[0],
                'end_longitude': g.latlng[1]
                }
                response = requests.get(url, params=parameters)
                data = response.json()
                response_data['uber'] = data
                #print(data);
            else:
                #do flights
                base_url = "http://www.hitlistapp.com/flights/cheap-flights-from-"
                split_dest_name = str(dest_city_name).lower().split(",")
                url = (base_url+'philadelphia-PHL'+'-to-'+split_dest_name[0].replace(' ', '-')+'-'+split_dest_name[1]+'/')
                print(url);
                
                hdr = {'User-Agent': 'Mozilla/5.0'}
                req = urllib2.Request(url,headers=hdr)
                page = urllib2.urlopen(req)
                #soup = BeautifulSoup(urllib2.urlopen(url).read(), 'lxml')
                soup = BeautifulSoup(page, 'lxml')
                if(soup):
                    for div in soup.select('div#flightslist'):
                        for href in div.find('a'):
                            response_data['flight'] = [href]
                main_response.append(response_data)
                print(main_response)
                return main_response
        else:
             return make_response(jsonify( { 'error': 'error' } ), 400)
            
class startSavings(Resource):
    def get(self):
        return make_response(jsonify( { 'error': 'not implimented' } ), 200)
    def post(self):
        parameter_data = request.get_json(force=True)
        if parameter_data.get('answer') == "yes":
            customerId = '55e94a6af8d8770528e60de6'
            apiKey = '0688fc45411b8718aebfad365408e41a'
            url = 'http://api.reimaginebanking.com/customers/{}/bills?key={}'.format(customerId,apiKey)
            response = requests.get(url)
            if response.status_code != 404:
                data = response.json()
                total_amount_bills = 0
                for d in data:
                    amount = d['payment_amount']
                    total_amount_bills += amount
            
            url = 'http://api.reimaginebanking.com/customers/{}/purchases?key={}'.format(customerId,apiKey)
            response = requests.get(url)
            if response.status_code != 404:
                data = response.json()
                for d in data:
                    amount = d['amount']
                    total_amount_bills += amount
            
            url = 'http://api.reimaginebanking.com/customers/{}/withdrawals?key={}'.format(customerId,apiKey)
            response = requests.get(url)
            if response.status_code != 404:
                data = response.json()
                for d in data:
                    amount = d['amount']
                    total_amount_bills += amount
            url = 'http://api.reimaginebanking.com/accounts?key={}'.format(customerId,apiKey)
            response = requests.get(url)
            if response.status_code != 404:
                amount_bal
                data = response.json()
                for d in data:
                    amount_bal += d['balance']
                    print(amount_bal)
            if total_amount_bills < amount_bal:
                print('nothing')
                
        else:
            return make_response(jsonify( { 'error': 'error' } ), 400)
        
        
@app.errorhandler(400)
def url_not_found(error):
    return make_response(jsonify( { 'cats': 'bad cat' } ), 400)

@app.errorhandler(404)
def url_not_found(error):
    return make_response(jsonify( { 'cat': 'meow' } ), 404)

api.add_resource(GetTripResponse, '/')
api.add_resource(startSavings, '/savings')
        
if __name__ == '__main__':
    app.run(debug = True)
    


