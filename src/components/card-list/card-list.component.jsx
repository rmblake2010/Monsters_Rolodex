
import Card from "../card/card-container.component";
import './card-list.styles.css'

const CardList = ({ monsters }) => {

    return (
        <div className="card-list">
            {monsters.map((monster) => {
                return <Card key={`monster ${monster.name}`} monster={monster} />
            })}
        </div>
    )
}

export default CardList
