import {Component} from 'react';
import './search-box.css';


const SearchBox = ({id, placeholder, onChangeHandler}) =>  (
            <div>
                <label key={id}>{placeholder}</label>
                <input 
                key={id}
                className='search-box'
                type='search'
                placeholder={placeholder}
                //handler is used only to provide a bit more detail
                //this could also be  onChange in the {}
                onChange={onChangeHandler}
            />
            </div>
        );  





// class SearchBox extends Component {


//     render(){
//         return (
//             <div>
//                 <label>{this.props.placeholder}</label>
//                 <input 
//                 className='search-box'
//                 type='search'
//                 placeholder={this.props.placeholder}
//                 //handler is used only to provide a bit more detail
//                 //this could also be  onChange in the {}
//                 onChange={this.props.onChangeHandler}
//             />
//             </div>
//         );
//     }
// }

export default SearchBox;