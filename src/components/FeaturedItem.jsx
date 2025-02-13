import { useState } from "react"
import {Card, Button, Table} from 'react-bootstrap'

export default function FeaturedItem(props) {

    const [nutritionFacts, setNutritionFacts] = useState('Show Nutrition Facts');
    
    const buttonChange = () => {
        setNutritionFacts(nutritionFacts === 'Show Nutrition Facts' ? 'Hide Nutrition Facts': 'Show Nutrition Facts')
        
    }
    const fat = (props.nutrition.fat === undefined? "0g":props.nutrition.fat )
    const carbohydrate = (props.nutrition.carbohydrates === undefined? "0g":props.nutrition.carbohydrates)
    const protein = (props.nutrition.protein === undefined? "0g":props.nutrition.protein )

    return <Card>
        <img src={props.img} alt={props.name}/>
        <h2>{props  .name}</h2>
        <h4>${props.price} per unit</h4>
        <p>{props.description}</p>
        <Button onClick={buttonChange}>{nutritionFacts}</Button>
        {nutritionFacts ==='Hide Nutrition Facts' && (
            <div>
                <h4> Nutrient Facts</h4>
                <Table striped="columns" variant="dark" bordered hover>
                <thead>
                    <   tr>
                        <th>
                            Calories
                        </th>
                        <th>
                            Fat
                        </th>
                        <th>
                            Carbohydrate
                        </th>
                        <th>
                            Protein
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>    
                        <td>
                            {props.nutrition.calories}
                        </td>
                        <td>
                            {fat}
                        </td>
                        <td>
                            {carbohydrate}
                        </td>
                        <td>
                            {protein}
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>

        )}
    </Card>
}