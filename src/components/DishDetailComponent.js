import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"; 

/*
Task 1.2: Create a new DishDetail class in a file named DishdetailComponent.js 
in the components folder
*/
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    /*
    Task 2.1: Implement a function named renderDish() that takes the dish as a 
    parameter and returns the JSX code for laying out the details of the dish in a 
    reactstrap Card.
    */
    renderDish(dishval){
        if (dishval != null){
            return (
                <Card>
                    <CardImg top src={dishval.image} alt={dishval.name}/>
                    <CardBody>
                        {
                            /* Task 2.2: Display the name of the dish as the Card title, 
                            and the description as the Card text.
                            */
                        }
                        <CardTitle>{dishval.name}</CardTitle>
                        <CardText>{dishval.description}</CardText>
                    </CardBody>
                </Card>
            );
        /*
        Task 1.7 : If the dish is null then you should return an empty <div>
        */
        } else {
            return (
                <div></div>
            );
        }
    }

    /*
    Task 3.1: Implement a function named renderComments() that takes the comments array as a 
    parameter and lays out each comment as shown in the image. Use the Bootstrap list-unstyled 
    class on the list.
    */
    renderComments(dish){
        if (dish != null && dish.comments != null) {
            const commentsval = dish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        {
                            /*
                            Task 3.2: Each comment should be displayed on two lines, the first one 
                            showing the comment, and the second line showing the comment author's name and the date.
                            */
                        }
                        <p>{comment.comment}</p>
                        <p className="blockquote-footer">{comment.author}, {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });
            return (
                /*
                Task 3.4:  enclose the header and comments inside a <div>
                */
                <div>
                    {
                        /*
                        Task 3.3: The comments should contain a <h4> header with the word "Comments"
                        */
                    }
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsval}
                    </ul>
                </div>
            );
        /*
        Task 3.5: If the comments are null, then you should return an empty <div>
        */
        } else {
            return (
                <div></div>
            );
            
        }    
    }
    render() {
        return (
            /*
            Task 1.4: Return a <div> from the render() function. This <div> should use the 
            Bootstrap row class to position the content within the <div>. This 
            div will display both the details of the dish in a Card and the list 
            of comments side-by-side for medium to extra large screens, but will 
            stack them for xs and sm screens.
            */
            <div className="row">
                {
                    /*
                    Task 1.5: The card should be enclosed inside a <div> appropriate Bootstrap column 
                    classes so that it occupies the entire 12 columns for the xs and sm screen sizes, 
                    and 5 columns for md screens and above. Also apply a class of m-1 to this div.
                    */
                }
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                {
                    /*
                    Task 1.6: The comments should be enclosed in a <div> to which you apply appropriate 
                    column classes so that it occupies the entire 12 columns for the xs and sm screen sizes, 
                    and 5 columns for md screens and above. Also apply a class of m-1 to this div.
                    */
                }
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

/*
Task 1.3: Export the DishDetail class from this file so that it can be
imported in MenuComponent.js and used to construct the view of the selected dish.
*/
export default DishDetail;