import React ,{ useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from "@material-ui/core/Zoom";




function CreateArea(props){
    const [isExpand,setIsExpand]=useState(false);
    const [info,setInfo]=useState({
        title:"",
        content:""
    });

    function handleAdd(event){
        const {value,name}=event.target;
        setInfo(preValue =>{
            if(name==='title'){
                return{
                    title:value,
                    content:preValue.content
                };
            }else if(name==='content'){
                return{
                    title:preValue.title,
                    content:value
                };
            }
        });
    }

    function expand(){
        setIsExpand(true);
        
    }
    return (
        <div>
          <form className="create-note">
          {isExpand && 
            <input onChange={handleAdd} name="title"  value={info.title} placeholder="Title" />}
            <textarea onChange={handleAdd} onClick={expand} name="content"  value={info.content} placeholder="Take a note..." rows={isExpand ? 3:1}  />
            <Zoom in={isExpand} >
            <Fab 
            onClick={(event)=>{
                props.onAdd(info);
                setInfo({
                    title:"",
                    content:""
                })
                                    
                event.preventDefault();
            }}><AddIcon /></Fab>
            </Zoom>
            
          </form>
        </div>
      );
}

export default CreateArea;