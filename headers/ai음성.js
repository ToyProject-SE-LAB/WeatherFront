async function WeatherReport(region, temp, high, low, description, windDirection, windSpeed, pm10, pm25, overallGrade) {
  // const XI_API_KEY = 'sk_7e72152b5f5beec64e1aa2927034a6b9b3e957a729e9d46b'; // api 
  // const url = 'https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM'; //목소리 불러오는 api 및 목소리 설정
  // const data = {
  //   "text":  `현재 위치는 ${region}이며, 현재 온도는 ${temp}도입니다. 오늘 최고 온도는 ${high}도 이며, 최저 온도는 ${low}도 입니다. 오늘 날씨 상태는 ${description}입니다. 풍향은 ${windDirection}도이며, 풍속은 ${windSpeed}m/s입니다. 미세먼지 농도는 ${pm10}이며, 초미세먼지 농도는 ${pm25}입니다. 공기질 상태는 ${overallGrade}입니다.`,
  //   "model_id": "eleven_multilingual_v2",
  //   "voice_settings": {
  //     "stability": 0.5,
  //     "similarity_boost": 0.7
  //   }
  // }

  // try {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'audio/mpeg',
  //       'Content-Type': 'application/json',
  //       'xi-api-key': XI_API_KEY
  //     },
  //     body: JSON.stringify(data)
  //   });

  //   if (!response.ok) {
  //     throw new Error('네트워크 응답 X');
  //   }

  //   const audioBlob = await response.blob();
  //   const audioUrl = URL.createObjectURL(audioBlob);

  //   document.getElementById("myAudio").src = audioUrl;

  //   // audio.play();

  // }
  // catch (error) {
  //   console.error('에러:', error);
  // }

};