import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KakaoMap = () => {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(null);
  const [infoWindows, setInfoWindows] = useState({});

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/maps');
        setStores(response.data);
      } catch (error) {
        setError('가게 정보를 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const userLatLng = new window.kakao.maps.LatLng(latitude, longitude);

        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: userLatLng,
          level: 5,
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const newInfoWindows = {};

        stores.forEach((store, index) => {
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(store.address, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              const content = `<div>
                                ${store.storePhotoUrl ? `<img src="${store.storePhotoUrl}" alt="${store.storeName}" style="max-width:200px; max-height:400px;"/>` : ''}
                                <h3>${store.storeName}</h3>
                                <p>가게 번호 : ${store.phoneNumber}</p>
                                <p>운영 시간 : ${store.pickupTime}</p>
                                ${store.storePhotoUrl ? `` : `<div style="margin-bottom: 40px;"></div>`}
                                <!-- 여백 추가 -->
                               </div>`;

              const infowindow = new window.kakao.maps.InfoWindow({
                content: content,
              });

              newInfoWindows[store.storeId] = infowindow;

              window.kakao.maps.event.addListener(marker, 'click', function () {
                if (infowindow.getMap()) {
                  infowindow.close();
                } else {
                  // 모든 정보 창을 닫습니다.
                  Object.values(newInfoWindows).forEach((iw) => iw.close());
                  infowindow.open(map, marker);
                }
              });
            }
          });
        });

        setInfoWindows(newInfoWindows);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, [stores]);

  return (
    <div>
      <h1>근처 가게 찾기</h1>
      {error && <p>{error}</p>}
      <div id="map" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
};

export default KakaoMap;