import React, { Component } from 'react';
import "./footer.css";


var data = [
    {
      meditation: false,
      class: true,
      key: "A",
    },
    {
      meditation: false,
      class: true,
      key: "A",
    },
    {
      meditation: true,
      class: false,
      key: "A",
    },
    {
      meditation: true,
      class: false,
      key: "B",
    },
    {
      meditation: true,
      class: false,
      key: "B",
    },
    {
      meditation: false,
      class: true,
      key: "B",
    },
    {
      meditation: false,
      class: true,
      key: "B",
    },
    {
      meditation: false,
      class: true,
      key: "C",
    },
    {
      meditation: false,
      class: true,
      key: "C",
    },
    {
      meditation: true,
      class: false,
      key: "C",
    },
  ];

class Footer extends Component {
  
  render(){

    let dataSecondary = [];

    data.map( dat => {

      var index = dataSecondary.findIndex( o => o.key == dat.key ); 

      if(index!==-1) {
        if(dat.meditation){
          dataSecondary[index].meditationCount = dataSecondary[index].meditationCount + 1
        }
        if(dat.class){
          dataSecondary[index].classCount = dataSecondary[index].classCount + 1;
        }
      }
      else{
        let classCount = 0, meditationCount = 0;
        if(dat.meditation){
          meditationCount = 1
        }
        if(dat.meditation){
          classCount = 1
        }
        dataSecondary.push({ key: dat.key, meditationCount: meditationCount, classCount: classCount })
      }
    })    

    return(
     
     <div className="footer">
          <div style={{ color:"white" }} className="dataCall">
            {dataSecondary.map(d => 
              <ul style={{ marginTop: '10px' }}>
                <li style={{ width: '10%', padding: '0 20px' }}>key: {d.key}</li>
                <li style={{ width: '20%', padding: '0 20px' }}>meditation Count: {d.meditationCount}</li>
                <li style={{ width: '20%', padding: '0 20px' }}>class Count: {d.classCount}</li>
              </ul>
            )
            }
          </div>
      </div>
    );
  }
}

export default Footer;