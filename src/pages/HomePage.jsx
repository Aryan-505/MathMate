// src/pages/AdditionPage.js
import React from 'react';

import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="container">
            <>
                <Link
                    to="/addition"
                    className="btn btn-primary mx-4"
                >
                    Addition
                </Link>
                <Link
                    to="/subtraction"
                    className="btn btn-secondary mx-4"
                >
                    Subtraction
                </Link>
                <Link
                    to="/multiplication"
                    className="btn btn-success mx-4"
                >
                    Multiplication
                </Link>
                <Link
                    to="/division"
                    className="btn btn-danger mx-4"
                >
                    Division
                </Link>
            </>
        </div>
    );
}

export default HomePage;
