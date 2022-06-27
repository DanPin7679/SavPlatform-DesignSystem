const template = document.createElement("template");
template.innerHTML = `
     <style>
        .tabs { 
            display: flex;
            flex-direction: column;
            height: 500px;
            padding: 20px;
            border: 1px solid hsl(var(--clr-light) / 0.5);
        }
        .tab-content {
            margin-top: 50px
            
        }
    </style>
    <div class="tabs" class="flow" style="margin-bottom: 50vh; --flow-space: 4rem">
        <div id="tablist" class="tab-list underline-indicators flex">
            <button aria-selected="true" class="uppercase ff-sans-cond text-accent letter-spacing-2">Moon</button>
            <button aria-selected="false" class="uppercase ff-sans-cond text-accent letter-spacing-2">Mars</button>
            <button aria-selected="false" class="uppercase ff-sans-cond text-accent letter-spacing-2">Europa</button>
        </div>
        <div class="tab-content">
            Content
        </div>
    </div>
`;

class Tabs extends HTMLElement {
  constructor() {
    super();
    this._items = ["Items 1", "Items 2", "Items 3", "Items 4"];
  }

  connectedCallback() {
    this.createComponent();
  }

  createComponent() {
    const templateContent = document.importNode(template.content, true);
    this.appendChild(templateContent);

    // this._items.map((item) => {
    //   const itemTemplate = document.createElement("template");
    //   itemTemplate.innerHTML = `
    //         <button "aria-selected="false class="uppercase ff-sans-cond text-accent letter-spacing-2">
    //             "test"
    //         </button>`;
    //   const itemTemplateContent = document.importNode(
    //     itemTemplate.content,
    //     true
    //   );
    //   console.log(itemTemplateContent);
    //   this.querySelector(".tab-list").appendChild(itemTemplateContent);
    // });
  }
}

customElements.define("cthink-tabs", Tabs);

export { Tabs };
