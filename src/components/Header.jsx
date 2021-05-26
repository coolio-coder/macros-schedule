// import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <div style={ headingStyle } className="jumbotron jumbotron-fluid App">
            <h1 className="display-2">Welcome to your { title }</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Macro Schedule'
}

// Header.PropTypes = {
//     title: PropTypes.string
// }

const headingStyle = {
    color: 'gray',
    textAlign: 'center',
    marginTop: '20px',
}

export default Header
