import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";
// import Message from "./Message";
function App() {
  
    const data = [
          {     
        plan : "Free",
        price : 0,
        features: [
          {
          title : "10 users included"
          },
          {
            title : "2 GB storage"
            },
            {
              title : "Email support"
              },
              {
                title : "Help center access"
                }
        ]
      },
      {
        plan : "Paid",
        price : 20,
        features: [
          {
          title : "20 users included"
          },
          {
            title : "10 GB storage"
            },
            {
              title : "Priority Email support"
              },
              {
                title : "Help center access"
                },
        ]
      },
      {
        plan : "pro",
        price : 40,
        features: [
          {
          title : "30 users included"
          },
          {
            title : "15 GB storage"
            },
            {
              title : "Phone and Email support"
              },
              {
                title : "Help center access"
                },
        ]
      }
    ];
    return ( 
<div className="container" >
<div className="card-deck mb-3 text-center"> 
    <Card cardData={data[0]}></Card>
    <Card cardData={data[1]}></Card>   
    <Card cardData={data[2]}></Card>
</div>
</div>


);
}

export default App;
