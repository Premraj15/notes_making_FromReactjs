import React , { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [items,setItems]=useState([]);

    function addItem(newinfo){
        setItems(prevalue => {
            return[...prevalue,newinfo];
        });
    }

    function deleteItem(id){
        setItems(preItems => {
            return preItems.filter((items,index) => {
                return index!=id;
            });
        });
    }       
    return(
        <div>
            <Header />
            <CreateArea onAdd={addItem} />
            {items.map((addItem,index)=>{
                return(
                <Note key={index} id={index} title={addItem.title} content={addItem.content} onChecked={deleteItem} />
                );
            }
            )}
            <Footer />
        </div>
    )
}

export default App;