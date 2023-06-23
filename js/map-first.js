let center = [55.39924871498905,43.830310907834324];

    function init() {
        let map = new ymaps.Map('map-first', {
            center: center,
            zoom: 15,
        });
    
        let placemark = new ymaps.Placemark(center, {}, {
            iconLayout: 'default#image',
            iconImageHref: '../assets/img/marker.png',
            iconImageSize: [60, 60],
            iconImageOffset: [28, -50]
        });
    
        map.controls.remove('searchControl');
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl');
    
        map.geoObjects.add(placemark);
    }
    
    ymaps.ready(init);