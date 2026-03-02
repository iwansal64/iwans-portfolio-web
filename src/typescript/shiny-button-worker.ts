const shinyElements: HTMLElement[] = Array.from(document.getElementsByClassName("custom-shiny-element")).map(element => element as HTMLElement);
const windowLevelShinyElements: HTMLElement[] = Array.from(document.getElementsByClassName("custom-window-level-shiny-element")).map(element => element as HTMLElement);

shinyElements.forEach((button) => {
      const buttonBoundingClients = button.getBoundingClientRect();

      button.addEventListener("mousemove", (event) => {
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

window.addEventListener("mousemove", (event) => {
      const mouseLeft = event.clientX;
      const mouseTop = event.clientY

      windowLevelShinyElements.forEach((element) => {
            setTimeout(() => {
                  const buttonBoundingClients = element.getBoundingClientRect();
                  const left = mouseLeft-buttonBoundingClients.left
                  const top = mouseTop-buttonBoundingClients.top;
                  element.style.setProperty("--mouse-pos-left", left+"px");
                  element.style.setProperty("--mouse-pos-top", top+"px");
            }, 100);
      })
})