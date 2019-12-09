import React,{useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import {
  ConnectorModel,
  NodeModel,
  PortVisibility,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import Diagram from './Diagram'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width:"100%",
      backgroundColor:'black',
      display:'flex',
      flexDirection:'row'   
    },
    div1:{
       width:'25%'
    },
    paper:{
        flexDirection:'column',
         display:'flex',
         height:'750px',
         backgroundColor:'#ffebcd'
    }
   
  }),
);
  

const Toolbar=()=>{
 const classes = useStyles();
 const [shapes,setShapes]=useState([])
  const [line,setLine]=useState([])
 

 

  	const handleTringle=()=>{
  		
  		//console.log(A)
  	const Tringle={
    id: Math.random().toString(36).slice(2),
    width: 200,
    borderRadius: 45,
    height: 100,
    offsetX: 500,
    offsetY: 100,
    annotations: [{ content: "node1" }],
    style: { strokeColor: "red", strokeDashArray: "3,3", strokeWidth: 2,  },
    shape: { type: "Flow", shape: "Extract" }
  }
  	 setShapes([...shapes,Tringle])
   console.log(shapes)
    //render()
  }
  const handleCircle=()=>{
  	console.log('Circle is pressed')
  	const Circle={
    id: Math.random().toString(36).slice(3),
    width: 50,
    height: 50,
    offsetX: 300,
    offsetY: 425,
     pivot: {
            x: 0,
            y: 0
        },
    annotations: [{ content: "node" }],
    style: {
      fill: "white",
      strokeColor: "red",
      strokeDashArray: "3,3",
      strokeWidth: 2
    },
    shape: { type: "Basic", shape: "Ellipse" }
  }
  	 setShapes([...shapes,Circle])
   console.log(shapes)
  }
   const handleSquare=()=>{
  	console.log('square is pressed')
  	const square={
    id: Math.random().toString(36).slice(4),
    width: 200,
    borderRadius: 45,
    height: 100,
    offsetX: 600,
    offsetY: 100,
    annotations: [{ content: "node" }],
    style: { strokeColor: "red", strokeDashArray: "3,3", strokeWidth: 2, strokeBorderRadius: 25 },
    shape: { type: "Flow", shape: "Process" }
  }
  	 setShapes([...shapes,square])
   console.log(shapes)
  }
   const handleLine=()=>{
  	console.log('line is pressed')
  	const Line={
     id: Math.random().toString(36).slice(5),
      sourcePoint: {
            x: 300,
            y: 400
        },
        targetPoint: {
            x: 200,
            y: 200
        },
    //sourceID: "node1",
    //targetID: "node2",
    annotations: [{ content: "No" }],
    style: { strokeColor: "grey", strokeDashArray: "3,3", strokeWidth: 2 },
    targetDecorator: { style: { strokeColor: "grey" }, shape: "OpenArrow" }
  }
  setLine([...line,Line])
  console.log(line)
  }
  const handleChart=()=>{
  	console.log(line)
  	console.log(shapes)
   localStorage.setItem('nodes', JSON.stringify(shapes));
   localStorage.setItem('connector',JSON.stringify(line))
  	setLine([])
  	setShapes([])
  	alert('want to create New Press the shapes')

  } 
 
  return(
  	 <div className="content-wrapper" className={classes.root}>
  	 <div className={classes.div1}>
  	  <Paper className={classes.paper}>
         <Button color="default" variant="contained" onClick={()=>handleTringle()}>Tringle</Button>
         <Button color="secondary" variant="contained" onClick={()=>handleCircle()}>Circle</Button>
         <Button color="default" variant="contained" onClick={()=>handleSquare()}>square</Button>
         <Button color="secondary" variant="contained" onClick={()=>handleLine()}>Line</Button>
         {(line.length || shapes.length) ? <Button onClick={()=>handleChart()}>Save</Button>: null}
      </Paper>
    </div>
     <Diagram line={line} shapes={shapes}  />
    </div>
    )
}
export default Toolbar