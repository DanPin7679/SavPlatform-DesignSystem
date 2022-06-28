const template = document.createElement("template");
template.innerHTML = `
    <style>
        table {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%;
            border: 1px solid #ddd;
        }

        th, td {
            text-align: left;
            padding: 16px;
        }

        tr:nth-child(even) {
            background-color: hsl(var(--clr-light));
            color: hsl(var(--clr-dark));
        }

        tr:nth-child(odd) {
            color: hsl(var(--clr-light))
            background-color: hsl(var(--clr-900));
        }

        tr:first-child {
            background-color:  hsl(var(--clr-dark));
        }
    </style>
    
    <table>
    </table>
`;

export default class Table extends HTMLElement {
  constructor() {
    super();
    this._data = {
      columnsTitle: ["Column 1", "Column 2"],
      payload: [
        { col1: "Item 1 Col 1", col2: "Item 1 Col 2" },
        { col1: "Item 2 Col 1", col2: "Item 2 Col 2" },
      ],
    };
    this.fillTable();
  }

  get data() {
    return this._data;
  }

  set data(newData) {
    this._data = newData;
    this.fillTable();
  }

  connectedCallback() {
    const templateContent = document.importNode(template.content, true);
    this.appendChild(templateContent);
    this.fillTable();
  }

  fillTable() {
    const table = this.querySelector("table");
    removeAllChildNodes(table);

    const tableHeader = document.createElement("tr");
    this._data.columnsTitle.map((item) => {
      const newTH = document.createElement("th");
      newTH.innerHTML = item;
      tableHeader.appendChild(newTH);
    });
    table.appendChild(tableHeader);

    this._data.payload.map((item) => {
      const tableRow = document.createElement("tr");
      var innerRow = "";
      for (const [key, value] of Object.entries(item)) {
        innerRow += `<td>${value}</td>`;
      }

      tableRow.innerHTML = innerRow;
      table.appendChild(tableRow);
    });
  }
}

customElements.define("cthink-table", Table);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { Table };
