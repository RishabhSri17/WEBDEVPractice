import logo from './logo.svg';
import './App.css';
import './components/Item'
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const itemTwoName = "SurfExcel";

  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "May",
      itemYear: "2024"
    },
    {
      itemName: "Surf Excel",
      itemDate: "15",
      itemMonth: "June",
      itemYear: "2023"
    },
    {
      itemName: "Tide",
      itemDate: "10",
      itemMonth: "July",
      itemYear: "2022"
    },
    {
      itemName: "Ariel",
      itemDate: "25",
      itemMonth: "August",
      itemYear: "2021"
    },
    {
      itemName: "Rin",
      itemDate: "5",
      itemMonth: "September",
      itemYear: "2020"
    },
    {
      itemName: "Wheel",
      itemDate: "18",
      itemMonth: "October",
      itemYear: "2019"
    },
    {
      itemName: "Ujala",
      itemDate: "7",
      itemMonth: "November",
      itemYear: "2018"
    }
  ]

  return (
    <div>
      <Item name={response[0].itemName}>Hi Its Props Children</Item>  
      <ItemDate ></ItemDate> 

      <Item name={itemTwoName}></Item>  
      <ItemDate></ItemDate>

      <Item name="555"></Item>  
      <ItemDate></ItemDate> 
    <div className="App font-bold">
      Hello World!
    </div>
    </div>
  );
}

export default App;
