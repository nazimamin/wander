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
            city_lat = parameter_data.get('lat')
            city_lng = parameter_data.get('lng')
            
            g = geocoder.google(parameter_data.get('cityname'))
            
            current_city = [city_lat, city_lng]
            
            destination_city = g.latlng
            
            distance = vincenty(current_city, destination_city).miles
            geolocator = Nominatim()
            location = geolocator.reverse([city_lat, city_lng])
            print(location)
            if(distance < 100):
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
                print(data);
            else:
                print('do nothing')
            
        else:
             return make_response(jsonify( { 'cats': 'school is missing' } ), 400)

@app.errorhandler(400)
def url_not_found(error):
    return make_response(jsonify( { 'cats': 'bad cat' } ), 400)

@app.errorhandler(404)
def url_not_found(error):
    return make_response(jsonify( { 'cat': 'meow' } ), 404)

api.add_resource(GetTripResponse, '/')
        
if __name__ == '__main__':
    app.run(debug = True)
    


