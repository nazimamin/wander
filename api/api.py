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
        if parameter_data.get('cityname') and parameter_data.get('lat') and parameter_data.get('lan'):
            g = geocoder.google(parameter_data.get('cityname'))

            current_city = g.latlng
            destination_city = [parameter_data.get('lat'), parameter_data.get('lan')]

            distance = vincenty(current_city, destination_city).miles
            geolocator = Nominatim()
            location = geolocator.reverse(parameter_data.get('lat'), parameter_data.get('lan'))

            if(distance < 100):
                FlightAPI = "http://www.api.wego.com/flights/api/k/2/searches"
                FlightData = '{"trips": [{"departure_code": '+"New York City"+',"arrival_code": '+"Londond"+',"outbound_date": "2014-01-24","inbound_date": "2014-01-29"}],"adults_count": 1}'
                FlightAPIResponse = requests.get(FlightAPI, data=FlightData)
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
    


