import React from 'react'
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import {
  ConnectorModel,
  NodeModel,
  PortVisibility,
  SnapConstraints,
} from "@syncfusion/ej2-react-diagrams";
import Draggable from 'react-draggable'

//import Diagram from './Diagram'
const Diagram=(props)=>{
	const handleChange=(e)=>{
    console.log("diagraonchange",e.target.value)
    console.log('hello')
	}
	return(
    
	  
	  <DiagramComponent 
        id="diagram"
        width={"80%"}
        height={"750px"}
      
        nodes={props.shapes}
        connectors={props.line} ondrag={(e)=>handleChange(e)} 
      />
      
      
      )
}
export default Diagram