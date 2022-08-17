function Card(props) {
    return ( 
<div className="card mb-4 box-shadow">
<div className="card-header">
<h4 className="my-0 font-weight-normal">{props.cardData.plan}</h4>
</div>
<div className="card-body">
 <h1 className="card-title pricing-card-title">${props.cardData.price} <small class="text-muted">/ mo</small></h1>
 <ul className="list-unstyled mt-3 mb-4">
 <li>{props.cardData.features[0].title}</li>
 <li>{props.cardData.features[1].title}</li>
 <li>{props.cardData.features[2].title}</li>
 <li>{props.cardData.features[3].title}</li>
 </ul>
 <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
</div>
</div>       
       
);
}
export default Card;