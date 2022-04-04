
export const AddDealForm = () => {
  return (
    <>
      <div className="row g-3 row my-4 justify-content-around">
        <div className="col-auto">
            <h3>Showing all deals</h3>
        </div>

        <div className="col-auto">
          <button type="button" className="btn btn-primary mb-3">
            + Add deal
          </button>
        </div>
        
        <div className="col-auto">
          <form name="search">
            <input
              type="text"
              className="form-control"
              placeholder="Search name ..."
            />
          </form>
        </div>
      </div>
    </>
  )
}
