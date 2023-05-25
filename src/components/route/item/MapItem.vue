<template>
  <div id="map"></div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  props: {
    plans: Array,
  },
  created() {},
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  },
  methods: {
    initMap() {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(37.45, 126.8),
        level: 6,
      };
      var map = new kakao.maps.Map(container, options);

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);
      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 레벨 정보 저장
      var bounds = new kakao.maps.LatLngBounds();

      if (this.plans > 0) {
        for (let place of this.plans) {
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(place.logtitude, place.latitude), // 마커를 표시할 위치
            title: `${place.order}: ${place.simpleDesc}`, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });

          // 레벨을 변경합니다.
          bounds.extend(new kakao.maps.LatLng(place.logtitude, place.latitude));
        }

        // 첫번째 검색 정보를 이용하여 지도 중심을 이동 시킵니다
        map.setCenter(new kakao.maps.LatLng(this.plans[0].logtitude, this.plans[0].latitude));
        map.setBounds(bounds);

        marker.setMap(map);
      }
    },

    addScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = `http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
      document.head.appendChild(script);
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
