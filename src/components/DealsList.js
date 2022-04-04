import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProgressValue, moneyFormat } from '../utils';


export const DealsList = () => {
  const logo = (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{ borderRadius: '5px' }}
      >
        <rect width="100%" height="100%" fill="#e9ecef"></rect>
        <text x="10%" y="40%" fill="#764abc" dy=".5em">
          logo
        </text>
      </svg>
  )

  const deals = useSelector((state) => state.deals)

  return (
    <>
      <table id="deals" className="table align-middle" data-deals={deals}>
        <thead className="table-light">
          <tr>
            <th scope="col" className="text-center text-uppercase"></th>
            <th scope="col" className="text-center text-uppercase">
              Name
            </th>
            <th scope="col" className="text-center text-uppercase">
              Status
            </th>
            <th scope="col" className="text-center text-uppercase">
              Funds
            </th>
            <th scope="col" className="text-center text-uppercase">
              Progress
            </th>
          </tr>
        </thead>
        <tbody>
          {deals.map((d) => {
            return (
              <tr key={`deal_${d.id}`}>
                <td className="text-center">{logo}</td>
                <td className="text-center">
                  <Link
                    to={`/deals/${d.name.replace(/\W/g, '').toLowerCase()}`}
                    style={{
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      color: '#000',
                    }}
                  >
                    {d.name}
                  </Link>
                  <br />{' '}
                  <span
                    className="badge text-muted"
                    style={{ padding: '0.4rem' }}
                  >
                    {d.nameInfo}
                  </span>
                </td>
                <td className="text-center">
                  <span
                    className={`badge rounded-pill table-${d.status.toLowerCase()}`}
                    style={{ padding: '7px' }}
                  >
                    {d.status}
                  </span>
                </td>
                <td className="text-center">
                  {moneyFormat(d.fundAmount)}
                  <br />
                  <span className="fw-lighter text-muted" style={{ fontSize: '12px' }}>
                    {d.signups} signups
                  </span>
                </td>
                <td className="text-center">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${
                          getProgressValue(d.deal?.raised, d.fundAmount) || 15
                        }%`,
                      }}
                      aria-valuenow={getProgressValue(
                        d.deal?.raised,
                        d.fundAmount
                      )}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {`${getProgressValue(d.deal?.raised, d.fundAmount)}%`}
                    </div>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
