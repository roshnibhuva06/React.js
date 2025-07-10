import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App(){
  return(
    <div className="container" style={{height:"657px",width:"100%",backgroundColor:"#b4d9a5",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="box" style={{height:"420px",width:"50%",backgroundColor:"white"}}>
<Header/>
     <div style={{ width: '100%', textAlign: 'center' }}>
          <img
            src={"https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=612x612&w=0&k=20&c=R3Tcc6HKc1ixPrBc7qXvXFCicm8jLMMlT99MfmchLNA="}
            alt=""
            style={{ width: '100%', height:"310px"}}
          />
        </div>
          </div>
          <Footer />

    </div>
    
    
  )
}

export default App;
