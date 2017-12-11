import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {DetailPage} from '../detail/detail';

@Component({selector: 'page-list', templateUrl: 'list.html'})
export class ListPage {

    properties : Array < any >;
    posts : Array < any >;
    searchKey : string = "";
    viewMode : string = "cardList";
    features: string = 'chantiers';
    
    constructor(public navCtrl : NavController, public service : PropertyService, public config : Config) {
        this.findAll();
    }

    openPropertyDetail(property : any) {
        this
            .navCtrl
            .push(DetailPage, property);
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
                description: 'Description',
                image: 'assets/img/pict1.jpg'
            }, {
                description: '',
                image: 'assets/img/pict9.jpg'
            }, {
                description: 'Description',
                image: 'assets/img/pict4.jpg'
            }, {
                description: 'Description',
                image: 'assets/img/pict2.jpg'
            }, {
                description: '',
                image: 'assets/img/pict7.jpg'
            }, {
                description: '',
                image: 'assets/img/pict8.jpg'
            }, {
                description: 'Description',
                image: 'assets/img/pict3.jpg'
            }, {
                description: 'Description',
                image: 'assets/img/pict10.jpg'
            }, {
                description: 'Description',
                image: 'assets/img/pict9.jpg'
            }, {
                description: 'Description',
                image: 'assets/img/pict1.jpg'
            }, {
                description: 'Description',
                image: 'assets/img/pict1.jpg'
            }
        ];
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        
        this
        .service
        .findAll()
        .then(data => {this.properties = data; refresher.complete()})
        .catch(error => {alert(error); refresher.complete()});
    }
}
