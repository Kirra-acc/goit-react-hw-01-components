import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
        const Transactions = items.map((transaction) => (
          <tr className={s.transactionRow} key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ));
      
        return (
          <table className={s.transactionHistory}>
            <thead>
              <tr className={s.transactionTitle}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>
      
            <tbody>{Transactions}</tbody>
          </table>
        );
      };
