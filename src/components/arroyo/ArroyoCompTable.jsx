function ArroyoCompTable({ columns, competitors }) {
  return (
    <div className="arr-table-wrapper">
      <table className="arr-table">
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="arr-table-th">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {competitors.map((c, i) => (
            <tr
              key={i}
              className={`arr-table-row ${c.highlight ? 'arr-table-row--highlight' : ''} ${i % 2 === 0 ? 'arr-table-row--alt' : ''}`}
            >
              <td className="arr-table-name">
                {c.name}
                {c.highlight && <span className="arr-table-here">&larr; YOU ARE HERE</span>}
              </td>
              <td className="arr-table-cell arr-table-cell--muted">{c.cat}</td>
              <td className={`arr-table-cell ${c.highlight ? 'arr-table-cell--bright' : ''}`}>{c.out}</td>
              {[c.agents, c.scaffold, c.doctrine].map((val, vi) => (
                <td
                  key={vi}
                  className={`arr-table-cell arr-table-cell--mono ${
                    val.startsWith('\u2713') ? 'arr-table-cell--yes' :
                    val.startsWith('~') ? 'arr-table-cell--partial' :
                    'arr-table-cell--no'
                  }`}
                >
                  {val}
                </td>
              ))}
              <td className={`arr-table-cell arr-table-cell--mono ${c.highlight ? 'arr-table-cell--yes' : 'arr-table-cell--muted'}`}>
                {c.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArroyoCompTable;
