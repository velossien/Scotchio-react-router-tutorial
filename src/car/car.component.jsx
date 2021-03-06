import React, { Component } from "react";
import { Link } from 'react-router';

class Car extends Component {
    render() {
        const cars = this.props.route.data;

        const carNode = cars.map((car) => {
            return (
                <ul>
                    <li><Link
                        to={"/cars/"+car.id}
                        className="list-group-item"
                        key={car.id}>
                        {car.name}
                    </Link></li>
                </ul>
                    )
        });
        return (
            <div>
                        <h1>Cars page</h1>
                        <div className="list-group">
                            {carNode}
                        </div>
                    </div>
                    );
    };
};

export default Car;