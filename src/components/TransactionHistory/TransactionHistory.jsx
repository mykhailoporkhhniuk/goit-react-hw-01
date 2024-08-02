import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead className={css.thead}>
                <tr>
                    <th className={css.tItem}>Type</th>
                    <th className={css.tItem}>Amount</th>
                    <th className={css.tItem}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <td className={css.tItem}>{type}</td>
                            <td className={css.tItem}>{amount}</td>
                            <td className={css.tItem}>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default TransactionHistory