const PortfolioFilter = (props) => {
  
    const updateFilter = (event) => {
      event.preventDefault();
      props.updateFilter(event.target.value);
    } 
      
        return (
          <div className="center">
            <form onChange={updateFilter}>
              <label>Filter by Category:</label>
              <select type="text" name="category" id="category-input"> 
               <option value="">All</option>
                <option value="React">React</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Ruby on Rails">Ruby on Rails</option> 
                <option value="Ticketing Career">Ticketing Career</option> 
              </select> 
            </form>
          </div>
          )
      }
  
  export default PortfolioFilter