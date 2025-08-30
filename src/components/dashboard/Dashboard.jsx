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
    <div>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Sidebar name={name} isMenuOpen={isMenuOpen} onClose={menuClose} />

      <div className={`dashboard ${isMenuOpen ? "blur" : ""}`}>
        <h2 className='dashboard-name'> Hi, {name}</h2>
        <p className='welcome'>Hello, Welcome back!</p>

        <div className='card-container'>
          <div className='card insurance-dash-card'>
            <p>Let's get started </p>
            <h3>Get the best insurance for your farm with us</h3>
            <button className='secure-btn'>Secure now</button>
          </div>

          <div className='card product-card'>
            <p>Get the best product</p>
            <h3>Purchase good quality farm product with quality pricing</h3>
            <button className='buy-btn'>Buy now</button>
          </div>
        </div>

        <div className='recent'>
          <div className='recent-flex'>
            <div className='recent-heading'>
              <h2>
                Recent <br /> transactions
              </h2>
            </div>

            <div className='see-more'>
              <h4>
                See more <br />
                transaction
              </h4>
            </div>
            <div>
              see <br /> more
            </div>
          </div>
          {transactionCard.map((transaction, index) => (
            <div className='recent-cards' key={index}>
              <div className='row'>
                <span className='label'>Type:</span>
                <span className='value'>
                  {transaction.type}
                  <br />
                  <span className='date'>{transaction.date}</span>
                </span>
              </div>
              <div className='row'>
                <span className='label'>Amount:</span>
                <span className='value'>${transaction.amount}</span>
              </div>
              <div className='row'>
                <span className='label'>Status:</span>
                <span className='value'>
                  <span
                    className={`status ${
                      transaction.status === "Completed"
                        ? "completed"
                        : "failed"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </span>
              </div>
              <div className='row'>
                <span className='label'>Method:</span>
                <span className='value'>
                  {transaction.method} <br />
                  **** {""}
                  {transaction.cardNumber}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
