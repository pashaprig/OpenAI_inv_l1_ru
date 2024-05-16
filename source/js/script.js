// MENU

class App {
  init() {
    this.hideText();
    this.isPolicyChecked();
  }

  constructor() {}

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

  isPolicyChecked() {
    const leadform1 = document.querySelector('#leadform1');

    const isChecked = (form) => {
      const policyCheck = form.querySelector('[name="polycy"]')
      const termsCheck = form.querySelector('[name="terms"]')
      const sbmtBtn = form.querySelector('.submit_btn')

      const checkPolicy = () => {
        if (policyCheck.checked && termsCheck.checked) {
          sbmtBtn.removeAttribute("disabled");
        } else {
          sbmtBtn.setAttribute("disabled", "disabled");
        }
      };

      checkPolicy()
      policyCheck.addEventListener('click', checkPolicy);
      termsCheck.addEventListener('click', checkPolicy);
    }

    leadform1.addEventListener('click', isChecked(leadform1))
  }

}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
