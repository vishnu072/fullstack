import React from 'react';
import '../assets/css/Dashboard.css'


import { Panel, Placeholder, Row, Col } from 'rsuite';

import  { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
// import axios from 'axios';


class AdminDashBoard extends Component{
  constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	

  // document.getElementById('mySidenav').style.width = '240px';
  render(){
    const card=[
      {
        title: 'Machine Learning',
        tutor: 'Arya',
        time: '23/07/2023'
      },
      {
        title: 'Data Structures',
        tutor: 'Sam',
        time: '18/07/2023'
      },
      {
        title: 'Java Script',
        tutor: 'Balaji',
        time: '18/07/2023'
      }
    ];
    const options = {
			theme: "light2",
			animationEnabled: true,
			title:{
				text: "Usage"
			},
			subtitles: [{
				text: "Data Series"
			}],
			axisX: {
				title: "States"
			},
			axisY: {
				title: "Units Sold",
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD"
			},
			axisY2: {
				title: "Profit in USD",
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0"
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "Units Sold",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0 Units",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 120 },
					{ x: new Date(2017, 1, 1), y: 135 },
					{ x: new Date(2017, 2, 1), y: 144 },
					{ x: new Date(2017, 3, 1), y: 103 },
					{ x: new Date(2017, 4, 1), y: 93 },
					{ x: new Date(2017, 5, 1), y: 129 },
					{ x: new Date(2017, 6, 1), y: 143 },
					{ x: new Date(2017, 7, 1), y: 156 },
					{ x: new Date(2017, 8, 1), y: 122 },
					{ x: new Date(2017, 9, 1), y: 106 },
					{ x: new Date(2017, 10, 1), y: 137 },
					{ x: new Date(2017, 11, 1), y: 142 }
				]
			},
			{
				type: "spline",
				name: "Profit",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.#",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 19034.5 },
					{ x: new Date(2017, 1, 1), y: 20015 },
					{ x: new Date(2017, 2, 1), y: 27342 },
					{ x: new Date(2017, 3, 1), y: 20088 },
					{ x: new Date(2017, 4, 1), y: 20234 },
					{ x: new Date(2017, 5, 1), y: 29034 },
					{ x: new Date(2017, 6, 1), y: 30487 },
					{ x: new Date(2017, 7, 1), y: 32523 },
					{ x: new Date(2017, 8, 1), y: 20234 },
					{ x: new Date(2017, 9, 1), y: 27234 },
					{ x: new Date(2017, 10, 1), y: 33548 },
					{ x: new Date(2017, 11, 1), y: 32534 }
				]
			}]
		}
		
    
    return(
      <div>

      <div className='body-card'>
        <h3 className='class-text' style={{padding:30}}>Dashboard</h3>
        <div className='body-upper-part'>
        <Row style={{marginLeft:70}}>
    <Col md={5} sm={10} style={{marginRight:30}}>
    <Panel bordered header="Total User">
   <h3>7048</h3>
  </Panel>
    </Col>
    <Col md={5} sm={10} style={{marginRight:30}}>
    <Panel bordered header="Students Registered">
   <h3>6204</h3>
  </Panel>
    </Col>
    <Col md={5} sm={10} style={{marginRight:30}}>
    <Panel bordered header="Number of Courses enrolled">
   <h3>5100</h3>
  </Panel>
    </Col>
    <Col md={5} sm={10} style={{marginRight:30}}>
    <Panel bordered header="Live">
   <h3>644</h3>
  </Panel>
    </Col>
  </Row>
        </div>
        <div>
      
	
		<div style={{marginTop:50}}>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>

		</div>
        </div>
   
    </div>
    <div className='body-lower-part'>
    <div className='part1'>
        <h3>Notifications</h3>
        <div className='card3'>
          {card.map((cardvar,index)=>(
            <div className='sub-card3' key={index}>

            <div className='sh-class-name'>
              <h4>{cardvar.tutor}</h4> <p> posted a new assignment on {cardvar.title}</p>
            <div className='sh-time'>
              <h5>Due date :</h5>
              <p>{cardvar.time}</p>
            </div>
            </div>
            </div>
          )
          )}

        </div>
      </div>
      </div>
</div>

);
}
}
export default AdminDashBoard