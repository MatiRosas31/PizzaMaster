import React from 'react'

const PizzaCard = ({title, description, thumbnail}) => {
  return (
    <div  className="card pizza-card">
              <img
                src={thumbnail}
                className="card-img-top"
                alt={title}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
  )
}

export default PizzaCard