import React from "react";
import Header from '../component/Header';
import Lolly from '../component/Lolly';
import { gql, useQuery } from "@apollo/client";
import { useQueryParam } from "gatsby-query-params";



const GET_LOLLY = gql`
  query getData($lollyPath: String!) {
    getLolly(lollyPath: $lollyPath) {
      recipientName
      message
      senderName
      flavourTop
      flavourMiddle
      flavourBottom
      lollyPath
    }
  }
`;

export default function ShowLolly({ location }) {
  console.log("component started -- ", location);

  const id = useQueryParam("id", "123");
  console.log("id = ", id);

  const { loading, error, data } = useQuery(GET_LOLLY, {
    variables: { lollyPath: id }
  })

  console.log("data = ", data);

  return (
    <div className="container">
      <Header />
      {loading && <p> Loading Client Side Querry.... </p>} 
      {error && <p>Error: ${error.message}</p>}
      {data && data.getLolly && (
        <div className="newLollyForm1">
          <div>
            <Lolly
              fillLollyTop={data.getLolly.flavourTop}
              fillLollyMiddle={data.getLolly.flavourMiddle}
              fillLollyBottom={data.getLolly.flavourBottom}
            />
          </div>
          <div className="result">
            <div className="details">              
              <h4> Your lolly is freezing. Share it with this link: </h4>
              <h3>
                 {location.origin}/showLolly/{data.getLolly.lollyPath}
              </h3>
              <div className="result__details">
                {/* <h1> To: {data.getLolly.recipientName} </h1>
                <p> {data.getLolly.message} </p>
                <h3> From: {data.getLolly.senderName} </h3> */}
                <div id="recipient" className="reciever">
                 <small> to: </small> {data.getLolly.recipientName}
                </div>
                <div id="message" className="message">
                  {data.getLolly.message}
                </div>
                <div id="from" className="sender">
                  <small> from: </small> {data.getLolly.senderName}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

