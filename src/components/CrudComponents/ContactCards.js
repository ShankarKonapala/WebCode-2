import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function Distributer({ contact, setContact, designation }) {
  return (
    <div className="carddisp">
      {contact.map((cnt, index) => {
        return (
          <ContactCard
            contact={contact}
            name={cnt.name}
            num={cnt.contactNo}
            street={cnt.street}
            city={cnt.city}
            country={cnt.country}
            zip={cnt.zip}
            mail={cnt.mail}
            photo={cnt.photo}
            id={index}
            index={index}
            key={index}
            setContact={setContact}
            designation={designation}
          />
        );
      })}
    </div>
  );
}
function ContactCard({designation,
  name,
  num,
  street,
  city,
  country,
  zip,
  mail,
  photo,
  id,
  index,
  setContact,
  contact,
}) {
  const navigate = useNavigate();
  const address = `${street}, ${city}, ${country}`;
  // console.log(`${designation}`);

  if(designation==="Employee"){
    var isDisabled = false;
  }
  else {
    isDisabled = true;
  }
  // console.log(`${isDisabled}lastcard`);
  return (
    <div>
      <div className="card mb-3" style={{ "maxWidth": "27rem" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="img" src={photo} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Ph.no: {num}</p>
              <p className="card-text">Mail Id: {mail}</p>
              <p className="card-text">
                <small className="text-muted">
                  Address: {address} - {zip}
                </small>
              </p>
            </div>
            <div className="card-action">
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => {
                  navigate("/edit-contact/" + id);
                }}
              >
                {isDisabled ? (<EditIcon />) : (<></>)}
              </IconButton>
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  setContact(contact.filter((cnt, index) => index !== id));
                }}
              >
                {isDisabled ? (<DeleteIcon />) : (<></>
      )}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}