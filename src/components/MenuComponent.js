import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishDetailComponent";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null 
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if (dish != null){
            return (
                <DishDetail dish={dish}/>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=> this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/*
                Task 1.1: Replace the card showing the selected dish in MenuComponent's view 
                with the DishdetailComponent, and make sure to pass the selected dish 
                information as props to the DishdetailComponent.
                */}

            </div>
        )
    }
}

export default Menu;