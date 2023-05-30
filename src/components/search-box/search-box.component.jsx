import {Component} from 'react';
import './search-box.css';
class SearchBox extends Component {


    render(){
        return (
            <div>
                <label>{this.props.placeholder}</label>
                <input 
                className='search-box'
                type='search'
                placeholder={this.props.placeholder}
                //handler is used only to provide a bit more detail
                //this could also be  onChange in the {}
                onChange={this.props.onChangeHandler}
            />
            </div>
        );
    }
}

export default SearchBox;