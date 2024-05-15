// MENU

class App {
  init() {
    this.hideText();
  }

  constructor() {
    // this.iframe = document.querySelector('iframe');

  }

  hideText() {
    const cards = document.querySelectorAll(".about__card")

    const togleText = (card) => {
      const toggleButton = card.querySelector("#toggleButton")
      const hiddenText = card.querySelector(".hiddenText");

      toggleButton.addEventListener("click", () => {
        if (hiddenText.classList.contains("close")) {
          toggleButton.classList.remove("close");
          hiddenText.classList.remove("close");
          hiddenText.style.maxHeight = hiddenText.scrollHeight + "px";
        } else {
          toggleButton.classList.add("close");
          hiddenText.style.maxHeight = null;
          hiddenText.classList.add("close");
        }
      });
    }
    cards.forEach((c) => { c.addEventListener('click', togleText(c)) })
  }

}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
