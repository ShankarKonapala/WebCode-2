import './App.css';
import {BrowserRouter, Route, Routes, useNavigate, useParams} from 'react-router-dom';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from "react";
import  Home  from './pages/Home';
import {AddContactPage} from './components/CrudComponents/AddContacts';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {

  const contactList = [
    {
      name: "Prabhas raju",
      contactNo: "8072481551",
      street: "kakkan street",
      city: "Mumbai",
      country: "India",
      zip: "600 069",
      mail: "Prabhas@gmail.com",
      photo: "https://media.chitrajyothy.com/media/2022/20221214/Prabhas_bcaac035ff_V_jpg--799x414-4g.webp",
      id: 1,
    },
    {
      name: "Ravi Teja",
      contactNo: "1-264-371-8422",
      street: "pakkathu street",
      city: "Hyderabad",
      country: "india",
      zip: "97483",
      mail: "Mass@gmail.com",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmy6b_lGvQkX3t-2bYNP4MejOJ4pJ8LxT2r6pqyWPPZTv1YrM",
      id: 2,
    },
    {
      name: "Pavan Kalyan",
      contactNo: "858.924.7561",
      street: "Brycen Camp",
      city: "Hyderabad",
      country: "india",
      zip: "500072",
      mail: "PK@gmail.com",
      photo: "https://www.koimoi.com/wp-content/new-galleries/2022/07/pawan-kalyan-trends-on-twitter-after-he-alters-profile-photo-001.jpg",
      id: 3,
    },
    {
      name: "Ram Charan",
      contactNo: "(912) 561-5464 x83576",
      street: "poes garden",
      city: "Mumbai",
      country: "india",
      zip: "12577-8031",
      mail: "cherry@gmail.com",
      photo: "https://e1.pxfuel.com/desktop-wallpaper/545/280/desktop-wallpaper-rams-ram-charan-rrr-thumbnail.jpg",
      id: 4,
    },
    {
      name: "NTR",
      contactNo: "693.604.8772",
      street: "kurukku street",
      city: "Pallavaram",
      country: "india",
      zip: "44695-3587",
      mail: "nandamuritarakaramarao@gmailmail.com",
      photo: "https://www.pinkvilla.com/english/images/2022/12/186470362_ntr-30-main-image_640*360.jpg",
      id: 5,
    },
  ];
  const [contact, setContact] = useState(contactList);

  const setCon = (newContact) => {
    setContact([...contact, newContact]);
  }

  const [designation, setDesignation]= useState("");

  const onChange = (e) => {
    // console.log('radio checked', e.target.value);
    setDesignation(e.target.value);
  };

  // console.log(`App ${designation}`)

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login onChange={onChange} designation={designation}/>}></Route>
          <Route path='/register' element={<Register onChange={onChange} designation={designation}/>}></Route>
          <Route path="/home" element={<Home contact={contact} setContact={setContact} designation={designation}/>}/>
          <Route path="/add-contact" element={<AddContactPage setCon={setCon} />}/>
          <Route path="/edit-contact/:id" element={<EditContact contact={contact} setContact={setContact} />}/>
          <Route path='/test' element={<Test/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

function EditContact({ contact, setContact }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const cont = contact[id];
  const [name, setName] = useState(cont.name);
  const [contactNo, setContactNo] = useState(cont.contactNo);
  const [mail, setMail] = useState(cont.mail);
  const [street, setStreet] = useState(cont.street);
  const [city, setCity] = useState(cont.city);
  const [country, setCountry] = useState(cont.country);
  const [zip, setZip] = useState(cont.zip);
  const [photo, setPhoto] = useState(cont.photo);
  return (
    <div>

      <div className="form-div">
        <TextField
          required
          className="standard-basic"
          label="Full Name"
          defaultValue={cont.name}
          variant="filled"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Phone No."
          defaultValue={cont.contactNo}
          variant="filled"
          onChange={(event) => setContactNo(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Mail ID"
          defaultValue={cont.mail}
          variant="filled"
          onChange={(event) => setMail(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Street"
          defaultValue={cont.street}
          variant="filled"
          onChange={(event) => setStreet(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="City"
          defaultValue={cont.city}
          variant="filled"
          onChange={(event) => setCity(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Country"
          defaultValue={cont.country}
          variant="filled"
          onChange={(event) => setCountry(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Zip Code"
          defaultValue={cont.zip}
          variant="filled"
          onChange={(event) => setZip(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Photo URL"
          defaultValue={cont.photo}
          variant="filled"
          onChange={(event) => setPhoto(event.target.value)}
        />
        <Button
          className="buttn"
          variant="contained"
          onClick={() => {
            const updatedCont = {
              name,
              contactNo,
              mail,
              street,
              city,
              country,
              zip,
              photo,
            };
            const contactCopy = [...contact];
            contactCopy[id] = updatedCont;
            setContact(contactCopy);
            navigate("/home");
          }}
        >
          <div className="addbtn">SAVE USER</div>
        </Button>
      </div>
    </div>
  );
}

export default App;
