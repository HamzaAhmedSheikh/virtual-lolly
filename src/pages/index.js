import { navigate } from "gatsby";
import React from "react"
import Header from "../component/Header"
//import Lolly from '../svg/lolly-image.svg'
import Lolly from '../component/Lolly'


export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="listLollies">
        <Lolly fillLollyTop="#d52358" fillLollyMiddle="#e95946" fillLollyBottom="#deaa43"  />
        <Lolly fillLollyTop="red" fillLollyMiddle="green" fillLollyBottom="blue"  />        
      </div>

      <div className="input-wrapper"> 
      <button className='' onClick={() => navigate('/createNew')}> Create New Lolly </button>
        {/* <input type="button"             
             value="Create New Lolly"
             onClick={
              () => {
                navigate("/createNew");
            }
          }
        ></input> */}
      </div>
    </div>

  );
}
