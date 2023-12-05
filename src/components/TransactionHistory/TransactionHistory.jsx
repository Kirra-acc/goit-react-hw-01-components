import s from './TransactionHistory.module.css';

// Option 2 --- not good by mentor
// export const TransactionHistory = ({ items }) => {
//   const Transactions = items.map(({ id, type, amount, currency }) => (
//     <tr className={s.transactionRow} key={id}>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//   ));
      
//   return (
//     <table className={s.transactionHistory}>
//       <thead>
//         <tr className={s.transactionTitle}>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>
      
//       <tbody>{Transactions}</tbody>
//     </table>
//   );
// };

// Option 1 --- error
// export function TransactionHistory({ transactions }) {
//   return (
//     <section className={s.transactionSection}>
//       <table className={s.transactionHistory}>
//         <thead>
//           <tr className={s.transactionTitle}>
//             <th>Type</th>
//             <th>Amount</th>
//             <th>Currency</th>
//           </tr>
//         </thead>

//         <tbody>
//           {transactions.map(({ id, type, amount, currency }) => (
//             <tr className={s.transactionRow} key={id}>
//               <td>{type}</td>
//               <td>{amount}</td>
//               <td>{currency}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// }

export const TransactionHistory = ({ children }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.transactionTitle}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {children}
    </table>
  );
}