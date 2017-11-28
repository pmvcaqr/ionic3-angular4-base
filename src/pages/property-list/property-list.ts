import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';
import leaflet from 'leaflet';

@Component({selector: 'page-property-list', templateUrl: 'property-list.html'})
export class PropertyListPage {

    properties : Array < any >;
    posts : Array < any >;
    searchKey : string = "";
    viewMode : string = "cardList";
    map;
    markersGroup;

    constructor(public navCtrl : NavController, public service : PropertyService, public config : Config) {
        this.findAll();
    }

    openPropertyDetail(property : any) {
        this
            .navCtrl
            .push(PropertyDetailPage, property);
    }

    onInput(event) {
        this
            .service
            .findByName(this.searchKey)
            .then(data => {
                this.properties = data;
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this
            .service
            .findAll()
            .then(data => this.properties = data)
            .catch(error => alert(error));

        this.posts = [
            {
                description: 'Trying out digital painting',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/63/b0/d563b08194f0a92cc7d381f7f8582' +
                        'a08.jpg'
            }, {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/43/f3/3d/43f33de6f96ca8e6f8dc6ff1ad86b' +
                        '586.jpg'
            }, {
                description: 'Look at this amazing clay humming bird I crafted!',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/68/68/a2/6868a2f821e5d15cc8fcd8cfa1694' +
                        '606.jpg'
            }, {
                description: 'Origami tullip tutorial',
                image: 'https://s-media-cache-ak0.pinimg.com/236x/38/6f/8e/386f8ec1725f09883d827094228d0' +
                        'f82.jpg'
            }, {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/f6/61/5c/f6615ca7068da18157588890f9e9e' +
                        '03a.jpg'
            }, {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/0d/29/35/0d2935d14c17aff1baab75360c9e2' +
                        'bd6.jpg'
            }, {
                description: 'Delicious chocolate bread recipe!',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/06/a9/8e/06a98e67111aae83a481a2c1dbb59' +
                        '4a4.jpg'
            }, {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/8c/37/d58c3783d6ebf79db0f9c05772680' +
                        '0a0.jpg'
            }, {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/f5/35/97/f53597bf16aff91315a0beca27ffd' +
                        'bda.jpg'
            }, {
                description: '',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/cf/fe/6d/cffe6dd7dece1cb0562f65cd3bfba' +
                        '1ac.jpg'
            }, {
                description: 'Fastest car of all times',
                image: 'https://s-media-cache-ak0.pinimg.com/564x/5f/bf/34/5fbf3414f9de301c8f4b868b1c2e2' +
                        '339.jpg'
            }
        ];
    }
}
