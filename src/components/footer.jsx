// import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Footer = ()=> {
    return (
        <footer className="App-footer">
            <>
              <Link
                to="/"
                className="btn btn-primary mx-4"
                
              >
                Back
              </Link>
            </>
          <p>&copy; </p>
        </footer>


    )

}

export default Footer
