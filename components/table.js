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
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
    </table>
`;

class Table extends HTMLElement {
  connectedCallback() {
    const templateContent = document.importNode(template.content, true);
    this.appendChild(templateContent);
    this.fillTable();
  }

  fillTable() {
    var content = JSON.parse(this.getAttribute("data"));
    const table = this.querySelector("table");
    content.map((item) => {
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `
            <td>${item.firstName}</td>
            <td>${item.lastName}</td>
        `;
      table.appendChild(tableRow);
    });
  }
}

customElements.define("cthink-table", Table);

export { Table };
