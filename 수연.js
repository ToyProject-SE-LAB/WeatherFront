        function changeImage(season) {
            // 이미지 요소 선택
            const topImage = document.getElementById('topImage');
            const bottomImage = document.getElementById('bottomImage');

            // 계절별 이미지 변경
            switch (season) {
              case 'spring':
                topImage.src = 'https://item.elandrs.com/r/image/item/2023-07-05/1d66795a-a460-40a0-9019-5df1d6f88ec6.jpg?w=750&h=&q=100'; // 봄 상의 이미지
                bottomImage.src = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxNzA5MTJfMjMz%2FMDAxNTA1MjI4MzY0NzU1.LowF6pFkrAqsblyQITgNjzEfpPhCvbA536MULLMCEy8g.qM5b57Xx7sqW5QLbjGWqUsGEunAqa8YCGttD-GYfDRog.JPEG.sweetkissj%2FexternalFile.jpg&type=sc960_832'; // 봄 하의 이미지
                break;
              case 'summer':
                topImage.src = 'https://sitem.ssgcdn.com/74/14/83/item/1000551831474_i5_750.jpg'; // 여름 상의 이미지
                bottomImage.src = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_4914068%2F49140689058.20240714182556.jpg&type=sc960_832'; // 여름 하의 이미지
                break;
              case 'fall':
                topImage.src = 'https://i.namu.wiki/i/WdY4-OiG4E_z3NW9Y71hv-vUAW7esAmgM6WKB2N8NQ-Wvt0ix1oMRs1yt0pL_kMiu6Ai2jhSEa_tAnwxHrypIg.webp'; // 가을 상의 이미지
                bottomImage.src = 'https://covernat.net/web/product/big/202304/156003770479bea89f94c31cd7de4aef.jpg'; // 가을 하의 이미지
                break;
              case 'winter':
                topImage.src = 'https://sitem.ssgcdn.com/62/42/20/item/1000566204262_i1_750.jpg'; // 겨울 상의 이미지
                bottomImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5vIJkAgd5V2xxX3C3Yt-F1E7rgHnSphrSQ&s'; // 겨울 하의 이미지
                break;
            }
          }
