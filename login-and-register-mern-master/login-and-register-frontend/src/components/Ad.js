import React, { useState } from "react"

import Nav from "./Pages/pages_components/Nav"
import Footer from './Pages/pages_components/Footer'
import "./Ad.css";
import axios from "axios"
import { useHistory } from "react-router-dom"



const Ad = () => {

    const history = useHistory()

  const [user, setUser] = useState({
    title: "",
    description: "",
    lastdate: "",

  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const career_sub = () => {
    const { title, description, lastdate } = user
    alert(user.lastdate);
    if (title && description && lastdate) {
      axios.post("http://localhost:9002/career", user)
        .then(res => {
          alert(res.data.message)
          history.push("/Ad")
        })
    } else {
      alert("invlid input")
    }

  }



  return (
    <>
     <Nav />

     <section class="header">
        <h1>Admin Page</h1>
        {/* <a class="btn-bgstroke">Call To Action</a> */}
      </section>
      <br />
      <div className='container'>

        <div class="row">
          <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Post</a>



              <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Update</a>
              <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Delete</a>
            </div>
          </div>
          <div class="col-9">
            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                <div class="form-group">
                  <input type="text" class="form-control mb-3" name="title" value={user.title} placeholder="Your title" onChange={handleChange}></input>
                  <input type="text" class="form-control mb-3" name="description" value={user.description} placeholder="Your description" onChange={handleChange}></input>
                  <input type="date" class="form-control mb-3" name="lastdate" value={user.lastdate} placeholder="lastdate" onChange={handleChange}></input>
                  <div class="btn btn-primary" onClick={career_sub} > Post</div>


                </div>

              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</div>
              <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.</div>
            </div>
          </div>
        </div>

      </div>



      <Footer />
    
    
    </>
  )
}

export default Ad
