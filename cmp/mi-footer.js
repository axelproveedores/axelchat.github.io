class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Axel Velarde
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
