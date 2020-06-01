'use strict'

const myImages = [
  'img/main-bg.png',
  'img/loader.gif',
];

const loadImages =  async function(imageUrlArray) {
  const promiseArray = [];
  const imageArray = [];

  for (let imageUrl of imageUrlArray) {

      promiseArray.push(new Promise(resolve => {
          const img = new Image();
          img.onload = resolve;
          img.src = imageUrl;
          imageArray.push(img);
      }));
  }
  await Promise.all(promiseArray);
  return imageArray;
};

const main = () => {

  window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  const templates = new function() {
    this.desktop = `
      <h1>Palabra</h1>
      <h2>Completa el reto de la Palabra y conocerás tu regalo</h2>
      <p class="italic">"Words are potent weapons for all causes, good or bad."</p>
      <button class="startscreen_button">Empezar</button>`;
    this.mobile = `
      <h1>Error!</h1>
      <h2>Sólo funciono en escritorio y en chrome mejor</h2>
      <h1>:D</h1>`;
    this.startScreen =
    `<main class="main_startscreen startscreen-container">
      <section class="startscreen startscreen-item">
        ${!window.mobileAndTabletcheck() ? this.desktop : this.mobile}   
      </section>
    </main>`;
    this.initStartScreenTemplate = () => {
      document.querySelector('.startscreen').innerHTML = this.startScreen;
    };

    this.main =
    `<main class="main_palabra palabra-container">
    </main>`;
    this.initMainTemplate = () => {
      document.querySelector('.mainscreen').innerHTML = this.main;
    };

    this.finalScreen =
    `<main class="main_finalscreen finalscreen-container">
      <section class="finalscreen finalscreen-item">
        <h1>Enhorabuena</h1>
        <p>Has vencido a la Palabra, tu código es: </p>
        <h1 class="code">"-----"</h1>
        <p>Envía el código a la siguiente dirección:</p>
        <h2>jesuscebader@protonmail.com</h2>
      </section>
    </main>`;
    this.initFinalScreenTemplate = () => {
      document.querySelector('.finalscreen').innerHTML = this.finalScreen;
    };

    this.initAllTemplates = () => {
      this.initStartScreenTemplate();
      this.initMainTemplate();
      this.initFinalScreenTemplate();
    };
  };

  templates.initAllTemplates();

  const selectors = new function () {
    this.page = document.querySelector('body');
    this.palabraContainer = this.page.querySelector('.main_palabra');
    this.mainContainer = this.page.querySelector('.mainscreen');
    this.startscreenContainer = this.page.querySelector('.main_startscreen');
    this.startscreenButton = this.startscreenContainer.querySelector('.startscreen_button');
    this.finalscreenContainer = this.page.querySelector('.main_finalscreen');
    this.finalscreenCode = this.page.querySelector('.code');
  };

  const model = new function(){
    this.palabraArray = []
    this.selectedPalabra = ''
    this.palabraNodes = null
    this.countTolose = 0
    this.sandyContainer = null
    this.sandy = null
  };

  const view = new function() {
    this.fetchPalabrasArray = () => {
      model.countTolose = 5
      fetch('https://spreadsheets.google.com/feeds/cells/1u7fTkRTI5MVgR_mbQWLt5tcU5_mx30nOHI9RqgxpmXQ/1/public/full?alt=json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        model.palabraArray = data.feed.entry[4].gs$cell["$t"].split(','); 
        this.shufflePalabra(model.palabraArray);
        this.createCounter(model.countTolose);
        this.createSandy((model.countTolose));
        this.createCanva();      
        this.createInput();
        return
      });
    };
    this.createCounter = (count) => {
      const counter = document.createElement("p");
      counter.classList.add('palabra-counter');
      counter.innerHTML = `te quedan ${count} intentos`
      selectors.mainContainer.prepend(counter)
    }
    this.createSandy = (count) => {
      const sandyContainer = document.createElement("div");
      sandyContainer.classList.add(`sandy-container-${count}`);
      model.sandyContainer = sandyContainer

      const sandy = document.createElement("div");
      sandy.classList.add(`sandy-${count}`);
      model.sandy = sandy

      const food = document.createElement("div");
      food.classList.add('food');

      sandyContainer.append(sandy)
      sandyContainer.append(food)
      selectors.mainContainer.prepend(sandyContainer)
    }
    this.updateCounter = (count) => {
      const counter = document.querySelector('.palabra-counter')
      counter.innerHTML = `te quedan ${count} intentos`
    }
    this.createCanva = () => {
      model.selectedPalabra.forEach( (letter) => {
        const item = document.createElement("div");
        item.classList.add('palabra')
        item.setAttribute('data', letter )
        selectors.palabraContainer.append(item)
      })
    };
    this.createInput = () => {
        const form = document.createElement("form");
        form.classList.add('palabra-form');

        const input = document.createElement("input");
        input.classList.add('palabra-input');
        input.setAttribute('type','text');
        input.setAttribute('minlength','1');
        input.setAttribute('maxlength','1');

        const button = document.createElement("button");
        button.classList.add('palabra-button');
        button.setAttribute('type','submit');
        button.innerHTML = 'Enviar!'

        form.append(input);
        form.append(button);
        form.addEventListener('submit', this.checkIsWord)
        selectors.mainContainer.append(form);
    };
    this.checkIsWord = (e) => {
      e.preventDefault()
      const inputLetter = e.target[0].value
      model.palabraNodes = [...selectors.palabraContainer.childNodes]

      
      model.palabraNodes.forEach( (letter) => {
        if (letter.attributes) {    
          if(inputLetter.toLowerCase() === letter.attributes[1].value) {
            letter.innerHTML = inputLetter.toLowerCase()
            letter.classList.add('palabra-correct')
          }
        }
      })
      this.checkIfLoser(inputLetter)
      e.target[0].value = ''
      this.checkIsWinner()
    }
    this.shufflePalabra = (array) => {
      const random = Math.floor(Math.random() * array.length);
      model.selectedPalabra = array[ random ].split('')
    }
    this.checkIfLoser = (inputLetter) => {
      const isInPalabra = model.palabraNodes.some((e) =>{ 
        return e.innerHTML === inputLetter
      })
      if (!isInPalabra) {
        model.countTolose = model.countTolose - 1
        this.updateCounter(model.countTolose);
        model.sandyContainer.classList.add(`sandy-container-${model.countTolose}`)
        model.sandy.classList.add(`sandy-${model.countTolose}`)
        if(model.countTolose === 0) {
          this.resetScreen()
        }
      } 
    }
    this.createLoserScreen = () => {
      const modal = `
        <img src="img/init3.png" class="sandy-loser"/>
        <h1> ¡ No lo has conseguido !</div>
        <h2>Prueba de nuevo</h2>
        <button class="restart_button">Probar otra vez</button>`;
      selectors.mainContainer.innerHTML = modal
      const button = document.querySelector('.restart_button')
      button.addEventListener('click', async (e) => {
        templates.initMainTemplate()
        selectors.palabraContainer = selectors.page.querySelector('.main_palabra');
        await view.fetchPalabrasArray()
      })

    }
    this.resetScreen = () => {
      selectors.palabraContainer.innerHTML = ''
      const form = document.querySelector('.palabra-form')
      form.remove()
      this.createLoserScreen()
    }
    this.checkIsWinner = () => {
      let counterWinner = 0
      model.palabraNodes.forEach( (letter) => {
        if (letter.attributes && letter.innerHTML !== '') {
          counterWinner++
          if (counterWinner ===  model.palabraNodes.length - 1) {
            this.loadFinalScreen()
          }
        }
      })
      
    }
    this.loadFinalScreen = () => {
        fetch('https://spreadsheets.google.com/feeds/cells/1u7fTkRTI5MVgR_mbQWLt5tcU5_mx30nOHI9RqgxpmXQ/1/public/full?alt=json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          selectors.palabraContainer.classList.add('scale-bg');
          selectors.finalscreenCode.innerHTML = data.feed.entry[3].gs$cell["$t"];
          selectors.finalscreenContainer.style.display = "flex";
          selectors.finalscreenContainer.style.zIndex = 4;
          return
        });
    };
  };

  const events = new function() {
    this.startPalabra = async (event) => {
      selectors.startscreenContainer.style.display = "none";
      await view.fetchPalabrasArray()
    };
  };

  !window.mobileAndTabletcheck() && 
    selectors.startscreenButton.addEventListener("click", events.startPalabra);

};

loadImages(myImages).then((images) => {
  setTimeout(() => {
    main();
  }, 2000);
});