import { Injectable } from '@angular/core';

const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBNPjrvs9lTSWrfL6VFCCPsunMRiwY1Ksg&callback=__onGoogleLoaded';

@Injectable()
export class GoogleMapsLoader {
    private static promise;

    constructor() {
      console.log('Hello GoogleMapsLoader Provider');
    }

    public static load() {
        // First time 'load' is called?
        if (!GoogleMapsLoader.promise) {

            // Make promise to load
            GoogleMapsLoader.promise = new Promise( resolve => {

                // Set callback for when google maps is loaded.
                window['__onGoogleLoaded'] = (ev) => {
                    resolve('google maps api loaded');
                };

                let node = document.createElement('script');
                node.src = url;
                node.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(node);
            });
        }

        // Always return promise. When 'load' is called many times, the promise is already resolved.
        return GoogleMapsLoader.promise;
    }
}