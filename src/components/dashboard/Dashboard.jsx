import { useEffect } from "react";
import { Header } from "../common/Header";
import { Sidebar } from "../common/Sidebar";
import { useState } from "react";
import "./dashboard.css";
import { toast } from "react-toastify";

const transactionCard = [
  {
    type: "Chicken vaccine",
    date: "Oct 12th, 2024",
    amount: "10",
    status: "Completed",
    method: "Debit Card",
    cardNumber: "3245",
  },
  {
    type: "Chicken vaccine",
    date: "Oct 12th, 2024",
    amount: "10",
    status: "Completed",
    method: "Debit Card",
    cardNumber: "3245",
  },
  {
    type: "Chicken vaccine",
    date: "Oct 12th, 2024",
    amount: "10",
    status: "Completed",
    method: "Debit Card",
    cardNumber: "3245",
  },
  {
    type: "Chicken vaccine",
    date: "Oct 12th, 2024",
    amount: "10",
    status: "Completed",
    method: "Debit Card",
    cardNumber: "3245",
  },
  {
    type: "Chicken vaccine",
    date: "Oct 12th, 2024",
    amount: "10",
    status: "Failed",
    method: "Debit Card",
    cardNumber: "3245",
  },
];

export const Dashboard = ({ name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const loginSuccess = localStorage.getItem("loginSuccess");

    if (loginSuccess === "true") {
      toast.success("Successfully logged in");
      localStorage.removeItem("loginSuccess");
    }
  }, []);

  return (
    <div className='dashboard'>
      <Sidebar name={name} isMenuOpen={isMenuOpen} onClose={menuClose} />

      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <div className={`container ${isMenuOpen ? "blur" : ""}`}>
        <div className='dashboard-welcome'>
          <div>
            <h1 className='dashboard-greeting'>Hi, {name.split(" ")[0]} </h1>
            <p className='dashboard-subtext'>
              Welcome back! Here's your farm overview.
            </p>
          </div>
        </div>

        <div className='card-container'>
          <div className='card insurance-dash-card'>
            <div className='card-icon'>🛡️</div>
            <p className='card-label'>Let's get started</p>
            <h3>Get the best insurance for your farm with us</h3>
            <button className='secure-btn'>Secure now</button>
          </div>

          <div className='card product-card'>
            <div className='card-icon'>📦</div>
            <p className='card-label'>Get the best product</p>
            <h3>Purchase quality farm products at great pricing</h3>
            <button className='buy-btn'>Buy now</button>
          </div>
        </div>

        <div className='recent'>
          <div className='recent-header'>
            <div>
              <h2 className='recent-title'>Recent Transactions</h2>
              <p className='recent-desc'>Your latest farm activity</p>
            </div>
            <a href='#' className='see-more-link'>
              View all <i className='ri-arrow-right-line'></i>
            </a>
          </div>

          <div className='transactions-list'>
            {transactionCard.map((transaction, index) => (
              <div className='recent-cards' key={index}>
                <div className='transaction-header'>
                  <div className='transaction-info'>
                    <span className='transaction-type'>{transaction.type}</span>
                    <span className='transaction-date'>{transaction.date}</span>
                  </div>
                  <div className='transaction-amount'>
                    ${transaction.amount}
                  </div>
                </div>

                <div className='transaction-footer'>
                  <div className='transaction-method'>
                    <span className='method-label'>{transaction.method}</span>
                    <span className='card-last'>
                      **** {transaction.cardNumber}
                    </span>
                  </div>
                  <span
                    className={`status ${
                      transaction.status === "Completed"
                        ? "completed"
                        : "failed"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
