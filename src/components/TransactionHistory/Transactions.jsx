import s from './TransactionHistory.module.css';

export const Transactions = ({items}) => {
    return (
        <tbody>
       {items.map(({ id, type, amount, currency }) => (
          <tr className={s.transactionRow} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
       ))}
        </tbody>)
}