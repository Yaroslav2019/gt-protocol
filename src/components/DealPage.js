import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProgressValue, moneyFormat } from '../utils'


export const DealPage = ({ match }) => {
  const { dealId } = match.params

  const currentDeal = useSelector((state) =>
    state.deals?.find(
      (deal) => deal.name.replace(/\W/g, '').toLowerCase() === dealId
    )
  )

  if (!currentDeal) {
    return (
      <>
        <div><Link to="/">Back to deals</Link></div>
        <h2>Deal not found!</h2>
      </>
    )
  }

  return (
    <>
      <div><Link to="/">Back to deals</Link></div>
      <div className="deal-wrapper mt-4">
        <h2>
          Contributions by {currentDeal.name}
          <span
            style={{ display: 'block', fontSize: '14px', color: '#6c757d' }}
          >
            Demo deal
          </span>
        </h2>
        <div className="deal-wrapper__progress mt-4">
          <div className="flex d-flex justify-content-between mb-2">
            <div
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'baseline',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#53de7a',
                  marginRight: '5px',
                  borderRadius: ' 50%',
                }}
              ></span>
              <span>{currentDeal.status}</span>
            </div>
            <div style={{ fontWeight: 'bold' }}>{`raised ${moneyFormat(
              currentDeal.deal?.raised
            )} / ${moneyFormat(currentDeal.fundAmount)}`}</div>
          </div>
          <div className="progress" style={{ height: '20px' }}>
            <div
              className="progress-bar progress-bar-striped bg-info"
              role="progressbar"
              style={{
                width: `${
                  getProgressValue(
                    currentDeal.deal?.raised,
                    currentDeal.fundAmount
                  ) || 10
                }%`,
              }}
              aria-valuenow={getProgressValue(
                currentDeal.deal?.raised,
                currentDeal.fundAmount
              )}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {`${getProgressValue(
                currentDeal.deal?.raised,
                currentDeal.fundAmount
              )}%`}
            </div>
          </div>
        </div>
        <div
          className="row deal-wrapper__form my-4 p-3"
          style={{ backgroundColor: '#e9ecef' }}
        >
          <form>
            <div className="col-12">
              <h5 className="text-center">Select a stablecoin</h5>
              <div
                className="btn-group mb-3"
                role="group"
                aria-label="Basic checkbox toggle button group"
                style={{
                  display: 'flex',
                  gap: '30px',
                  justifyContent: 'space-evenly',
                }}
              >
                {currentDeal.deal.stablecoins?.map((s, i) => (
                  <div>
                    <input
                      className="btn-check"
                      id={`btncheck${i + 1}`}
                      autocomplete="off"
                      type="radio"
                      name="exampleRadios"
                      checked
                    />
                    <label
                      className="btn btn-outline-secondary"
                      htmlFor={`btncheck${i + 1}`}
                      style={{ borderRadius: '20px' }}
                    >
                      <div style={{ fontWeight: 'bold' }}>{s.name}</div>
                      <div>{`bal: ${moneyFormat(s.balance)}`}</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter contribution amount ..."
                />
              </div>
              {!currentDeal.dealSummary.minContribution ? null : (
                <div
                  className="contribution-value btn btn-outline-secondary"
                  style={{
                    borderWidth: '2px',
                    color: '#000',
                    borderRadius: '5px',
                    padding: '10px',
                  }}
                >
                  {`min ${moneyFormat(
                    currentDeal.dealSummary.minContribution
                  )}`}
                </div>
              )}
              {!currentDeal.dealSummary.maxContribution ? null : (
                <div
                  className="contribution-value btn btn-outline-secondary"
                  style={{
                    borderWidth: '2px',
                    color: '#000',
                    borderRadius: '5px',
                    padding: '10px',
                  }}
                >
                  {`max ${moneyFormat(
                    currentDeal.dealSummary.maxContribution
                  )}`}
                </div>
              )}
            </div>
            <div className="mt-4">
              <button type="button" className="col-12 btn btn-primary">
                Contribute
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
