const shinyElements: HTMLElement[] = Array.from(document.getElementsByClassName("custom-shiny-element")).map(element => element as HTMLElement);
const windowLevelShinyElements: HTMLElement[] = Array.from(document.getElementsByClassName("custom-window-level-shiny-element")).map(element => element as HTMLElement);

shinyElements.forEach((button) => {
      button.addEventListener("mousemove", (event) => {
            const buttonBoundingClients = button.getBoundingClientRect();
            setTimeout(() => {
                  const left = event.clientX-buttonBoundingClients.left;
                  const top = event.clientY-buttonBoundingClients.top;
                  button.style.setProperty("--mouse-pos-left", left+"px");
                  button.style.setProperty("--mouse-pos-top", top+"px");
            }, 100);
      });

      button.addEventListener("mouseenter", () => {
            button.style.setProperty("--opacity", "100%");
      });

      button.addEventListener("mouseleave", () => {
            button.style.setProperty("--opacity", "0%");
      });
});

let globalMouseLeft = 0;
let globalMouseTop = 0;

function updateWindowLevelShinyElement() {
      windowLevelShinyElements.forEach((element) => {
            setTimeout(() => {
                  const buttonBoundingClients = element.getBoundingClientRect();
                  const left = globalMouseLeft-buttonBoundingClients.left
                  const top = globalMouseTop-buttonBoundingClients.top;
                  element.style.setProperty("--mouse-pos-left", left+"px");
                  element.style.setProperty("--mouse-pos-top", top+"px");
            }, 100);
      });
}

window.addEventListener("mousemove", (event) => {
      globalMouseLeft = event.clientX;
      globalMouseTop = event.clientY;

      updateWindowLevelShinyElement();
});
window.addEventListener("scroll", updateWindowLevelShinyElement);