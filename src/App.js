import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddItems from './appItems';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState,useEffect} from 'react';
import Search from './Search';

function App() {
  const[items,setItems]=useState(JSON.parse(localStorage.getItem('todolist')) || []);

        const [newItem,setNewItem] = useState('')
        const [search,setSearch] = useState('')

        useEffect( () => {
          console.log("load")
        },[]) 

        const addItem =(item) =>{
          const id = items.length ? items[items.length -1].id +1 : 1;
          const addNewItem ={id,checked:false,item}
          const listItems = [...items,addNewItem]
          setItems(listItems)
          localStorage.setItem("todolist",JSON.stringify(listItems))
        }

        const handleCheck =(id) => {
            const listitems = items.map((item)=> item.id===id ? {...item,checked:!item.checked}:item)
            setItems(listitems)
            localStorage.setItem("todolist",JSON.stringify(listitems))
        }

        const deleting = (id) => {
          const listitems = items.filter((item)=> item.id!==id)
          setItems(listitems)
          localStorage.setItem("todolist",JSON.stringify(listitems))
        }

        const handleSumbit =(e) => {
          e.preventDefault()
          if (!newItem) return;
          console.log(newItem)
          addItem(newItem)
          setNewItem('')

        }

  return (
    <div className="App">
      <Header title="To Do List" />
      <Routes>
        <Route path="/" element={
          <>
            <AddItems 
              newItem={newItem}
              setNewItem={setNewItem}
              handleSumbit={handleSumbit}
            />
            <Search 
              search={search}
              setSearch={setSearch}
            />
            <Content
              item={items.filter(item => 
                item?.item?.toLowerCase().includes(search.toLowerCase())
              )}
              handleCheck={handleCheck}
              deleting={deleting}
            />
          </>
        } />
      </Routes>
      <Footer length={items.length} />
    </div>
  );
}

export default App;