  // Инициализация карты
        ymaps.ready(init);
 
        function init () {
            
            //Центрирование и выбор масштаба карты
             
                 var myMap = new ymaps.Map('map', {
                    center: [55.569723, 37.763037 ], 
                    zoom: 3
                }); 
 
           // Создание своей метки 
                var myPlacemark = new ymaps.Placemark(
                // Координаты метки
                  [55.569723,37.763037] , {
                    // Свойства метки
                    hintContent: '<div class="window_market"><div class="market_title">Представительство Рус-Экспресс Екатеринбург</div><div class="market_adress"><span>Адрес:</span> 142715 Московская область, д. Апаринки, стр.1, к.2</div><div class="market_adress"><span>Телефон:</span> 8 (800) 777-08-07</div></div>'                //Подсказка при наведении на маркер
                }, {
                    iconImageHref: 'img/map_marker2.png',  // картинка иконки
                    iconImageSize: [45, 55],                                      // размеры картинки
                    iconImageOffset: [15, -40]                                   // смещение картинки
                    });




                        var myPlacemark2 = new ymaps.Placemark(
                // Координаты метки
                  [34.4669723,37.33037] , {
                    // Свойства метки
                    hintContent: '<div class="window_market"><div class="market_title">Представительство Рус-Экспресс Екатеринбург</div><div class="market_adress"><span>Адрес:</span>  Московская область, д. Апаринки,</div><div class="market_adress"><span>Телефон:</span> 8 (800) 777-08-07</div></div>'                //Подсказка при наведении на маркер
                }, {
                    iconImageHref: 'img/map_marker2.png',  // картинка иконки
                    iconImageSize: [35, 45],                                      // размеры картинки
                    iconImageOffset: [15, -40]                                   // смещение картинки
                    });  



             var myPlacemark3 = new ymaps.Placemark(
                // Координаты метки
                  [34.4669723,32.33037] , {
                    // Свойства метки
                    hintContent: '<div class="window_market"><div class="market_title">Представительство Рус-Экспресс Екатеринбург</div><div class="market_adress"><span>Адрес:</span>  Московская область, д. Апаринки,</div><div class="market_adress"><span>Телефон:</span> 8 (800) 777-08-07</div></div>'                //Подсказка при наведении на маркер
                }, {
                    iconImageHref: 'img/map_marker2.png',  // картинка иконки
                    iconImageSize: [35, 45],                                      // размеры картинки
                    iconImageOffset: [15, -40]                                   // смещение картинки
                    });  



 
                // Добавление метки на карту
                myMap.geoObjects.add(myPlacemark);
                myMap.geoObjects.add(myPlacemark2);
                myMap.geoObjects.add(myPlacemark3);

                //Элементы управления    
                myMap.controls
                // Кнопка изменения масштаба
                    .add('zoomControl')
                    // Список типов карты
                  
                    // Кнопка изменения масштаба - справа
                    .add('smallZoomControl', { right: 5, top: 75 })
                    // Стандартный набор кнопок
               
                    //Линейка масштаба
                
        }