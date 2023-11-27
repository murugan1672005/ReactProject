import React from "react";
import '../Assests/Search.css'
class Search extends React.Component
{
    state=
    {
        title:""
    }
    onSearchChanged=(event)=>
    {
        const _title=event.target.value;
        console.log(_title);
        this.setState({title:_title})
    }
    onSubmit=(event)=>
    {
        event.preventDefault();
        this.props.onSearch(this.state.title)
    }
      render()
      {
        return(
            <div>
           <form onSubmit={this.onSubmit}>
            <div className="form-content">
                <label>Search</label>
                <input  value={this.state.title} onChange={this.onSearchChanged} id="video-search" type="text" placeholder="Enter Search KeyWord"/>
            </div>
           </form>
            </div>
        )
      }
}
export default Search