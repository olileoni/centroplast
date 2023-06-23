let centerSecond = [55.39213756932102,43.857108499999974];

function init() {
    let mapSecond = new ymaps.Map('map-second', {
        center: centerSecond,
        zoom: 15,
    });

    let placemarkSecond = new ymaps.Placemark(centerSecond, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../assets/img/marker.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-20, -60]
    });

    mapSecond.controls.remove('searchControl');
    mapSecond.controls.remove('zoomControl');
    mapSecond.controls.remove('rulerControl');

    mapSecond.geoObjects.add(placemarkSecond);
}

ymaps.ready(init);