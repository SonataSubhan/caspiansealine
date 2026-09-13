/**
 * A real <table> for real tabular data — schedules, tariffs, lane lists.
 *
 * Below 768px `table--stack` turns each row into a labelled card, so a data
 * table never forces a sideways scroll on a phone. The stacked labels come
 * from each cell's data-label, which this component copies from the column
 * definition so the two can never fall out of sync.
 *
 *   columns: [{ key, label, numeric?, render? }]
 *   rows:    [{ id, ...values }]
 */
export default function DataTable({ caption, columns, rows, stack = true }) {
  return (
    <div className="table-scroll">
      <table className={`table ${stack ? "table--stack" : ""}`.trim()}>
        {caption ? <caption className="visually-hidden">{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((col) => (
              <th scope="col" key={col.key} className={col.numeric ? "is-numeric" : undefined}>
                {col.hideLabel ? <span className="visually-hidden">{col.label}</span> : col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  data-label={col.hideLabel ? undefined : col.label}
                  className={[col.numeric ? "is-numeric" : "", col.action ? "table__action" : ""]
                    .filter(Boolean)
                    .join(" ") || undefined}
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
