const PortfolioFilter = (props) => {
  
    const filterUpdate = (event) => {
      event.preventDefault();
      props.filterUpdate(event.target.value);
    } 
      
        return (
          <div className="center">
            <form onChange={filterUpdate}>
              <label>Filter by Category:</label>
              <select type="text" name="category" id="category-input"> 
               <option value="">All</option>
                <option value="React">React</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Ruby on Rails">Work</option> 
                <option value="Ticketing Career">Work</option> 
              </select> 
            </form>
          </div>
          )
      }
  
  export default PortfolioFilter