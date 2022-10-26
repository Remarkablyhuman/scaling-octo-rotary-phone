import {useState} from 'react';
import './faq.css';
import { useSpring, animated } from "react-spring";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = (props) => {

    // const [open, setOpen] = useState(false)

    // const openAnimation = useSpring({
    //     from: { opacity: "0", maxHeight: "70px" },
    //     to: { opacity: "1", maxHeight: open ? "200px" : "70px" },
    //     config: { duration: "300" }
    //   });

  return (
        <div className='accordion-container'>

          <div className='faq-border-container'>
              <div className='end-point'></div>
              <div className='header-line'></div>
              <div className='end-point'></div>
          </div>

          <div className={props.open == props.id ? 'accordion-item1' : 'accordion-item2'}>

            <div className='accordion-header' onClick={()=>{props.handleOpen(props.id)}}>
              
              {/* <img className='accordion-border' src={require('../../assets/')} /> */}
              <h4>{props.title}</h4>
              
              {/* <img src={ open ? require('../../assets/minus.png') : require('../../assets/plus.png')} className='sign' /> */}
              {/* <img src={require('../../assets/minus.png')} className='sign' /> */}
              <div className='icon-container'>
                {props.open == props.id ? 
                <AiOutlineMinus size={36} style={{ fill: '#8e9191' }}/>
                :
                <AiOutlinePlus size={36} style={{ fill: '#8e9191' }}/> 
                }
              </div>
            </div>
            
            <p className={props.open == props.id ? 'accordion-content toggleIn' : 'accordion-content'}>{props.content}</p>
          
          </div>
          {/* <div className='accordion-bottom-border'></div> */}

          <div className='faq-border-container2'>
                <div className='end-point'></div>
                <div className='header-line'></div>
                <div className='end-point'></div>
          </div>

        </div>
  )
}

export default Accordion