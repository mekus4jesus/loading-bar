const counterEl = document.querySelector('.counter'),
      loadingFrontEl = document.querySelector('.loading-bar-front')

      let index = 0
      updateNum()
      function updateNum(){
        counterEl.innerText = index + '%'
        loadingFrontEl.style.width = index + '%'
        index++
        if(index < 101){
            setTimeout(updateNum,50)
        }

      }