import { useState, useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import AddContact from "./component/AddContact";
import UpdateContact from "./component/UpdateContact";
import ContactList from "./component/ContactList";
import ContactDetails from "./component/ContactDetails";
import Header from "./component/Header";

function App() {
  const [contacts, setContacts] = useState([]);

  // console.log(contacts);

  const getData = async () => {
    const res = await axios.get("/contact");

    if (res.data) {
      setContacts(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                setContacts={setContacts}
              />
            )}
          />

          <Route
            path="/add"
            exact
            render={(props) => (
              <AddContact
                {...props}
                contacts={contacts}
                setContacts={setContacts}
              />
            )}
          />
          <Route path="/contactdetails/:name" component={ContactDetails} />

          <Route
            path="/update"
            exact
            render={(props) => (
              <UpdateContact
                {...props}
                contacts={contacts}
                setContacts={setContacts}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
