class Componente extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        h2 { color: red; font-family: sans-serif; }
      </style>
      <h2>Película mala: El conjuro 4: los ultimos ritos </h2>
    `;
  }
}

customElements.define("componente-malo", Componente);
