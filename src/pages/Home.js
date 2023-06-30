import { Distributer } from "../components/CrudComponents/ContactCards";
import { AddContacts } from "../components/CrudComponents/AddContacts";
import DefaultLayout from '../components/DefaultLayout'

function Home({ contact, setContact, designation, username }) {
  return (
    <div>
        <DefaultLayout username={username}>
            <AddContacts designation={designation}/>
            <Distributer contact={contact} setContact={setContact} designation={designation} />
        </DefaultLayout>
    </div>
  );
}

export default Home;