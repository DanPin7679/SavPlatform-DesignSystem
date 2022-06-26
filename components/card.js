const template = document.createElement("template");
template.innerHTML = `
     <style>
        .card {
            padding: 20px;
            border: 2px solid hsl(var(--clr-light) / 0.3);
            margin: 20px;
            max-width: 300px;
        }

        .card-title {
            font-size: var(--fs-600);
            margin-bottom: 10px;
        }

        .card-content {
            font-size: var(--fs-400);
        }
    </style>
    <div class="card">
        <div class="card-title"></div>
        <div class="card-content">Content</div>
    </div>
`;

class Card extends HTMLElement {
  connectedCallback() {
    const templateContent = document.importNode(template.content, true);
    this.appendChild(templateContent);
    this.querySelector(".card-title").innerHTML = this.getAttribute("title");
    this.querySelector(".card-content").innerHTML =
      this.getAttribute("content");
  }
}

customElements.define("cthink-card", Card);

export { Card };
