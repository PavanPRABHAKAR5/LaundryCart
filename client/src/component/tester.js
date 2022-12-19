import {react} from "react"
import { Link } from 'react-router-dom'

const Tester = () => {
    return(
        <div>
            Tester
            <button className='button'><Link className='linkstyle' to='/order'> Enter</Link></button>
        </div>
    )
}
 
export default Tester