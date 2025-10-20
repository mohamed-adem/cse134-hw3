// Hello World custom element (console only, no DOM changes)
class HelloConsole extends HTMLElement {
    connectedCallback() {
      console.log("Hello world from <hello-console>!");
    }
  }
  customElements.define('hello-console', HelloConsole);
  
  // CSS semantic custom element is just a tag like <layout-block> used in HTML.
  // No JS needed or allowed for it. Style via selector if desired (counts toward CSS limit).
  