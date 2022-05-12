import React from 'react'
import './Jobs.css';
import Nav from './Pages/pages_components/Nav';
import Footer from './Pages/pages_components/Footer';



const Jobs = () => {
  return (
    <>
         <Nav/>

         <div class="header" >
        <div className="container">
          <div className='row'>
            <div className='col-12'>
              <h1>Career</h1>
            </div>
          </div>
        </div>


      </div>

      <br />

      <section className='page_content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              <div className='inner_left_box'>
                <p>
                  <a class="btn btn-primary w-100" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Software developer Job

                  </a>


                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    <h4>Job description</h4>
                    <h6>Roles and Responsibilities</h6>
                    <ul>
                      <li>Experience developing applications in C#, ASP.NET or SQL Server essential.</li>
                      <li>Experience working with Angular is preferred</li>
                      <li>High levels of drive and energy.</li>
                      <li>Ability to work in a fast-paced, entrepreneurial environment.</li>
                      <li>Enthusiasm and general interest in Software Development.</li>
                      <li>A passion for user interface</li>
                      <li>Commitment to on-going personal development</li>
                    </ul>

                    <h6>Desired Candidate Profile</h6>
                    <ul>
                      <li>Strong technical knowledge of Web Technologies such as ASP.NET, C#, Web API</li>
                      <li>Good understanding of Design Patterns and Principles.</li>
                      <li>Good experience in MVC and Entity Framework.</li>
                      <li>Fluent in MS SQL Server, database and programming.</li>
                      <li>Good knowledge of Object-Oriented Design and Development.</li>
                      <li>Experience with REST API.</li>
                      <li>Entity Framework,.NET Core,   HTML5, CSS3, JavaScript, jQuery, Angular, Ajax, Restful/SOAP APIs.</li>
                      <li>Familiar with security mechanisms including web and web service security and their implementations.</li>
                    </ul>
                    <h4 className='title-head'>Come and Join Us</h4>
                    
                    <div className='form_apply'>
                    
                      <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Full Name</label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />

                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email</label>
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        </div>

                        <div class="form-group">
                          <label for="exampleInputEmail1">Upload Your Resume</label>
                          <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                        </div>


                        <div class="form-group">
                          <label for="exampleFormControlTextarea1"></label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Give us more details..'></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Apply</button>
                      </form>


                    </div>

                  </div>
                </div>

                <p>
                  <a class="btn btn-primary w-100" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Software developer Job

                  </a>


                </p>
                <div class="collapse" id="collapseExample1">
                  <div class="card card-body">
                    We Deliver Ultra-Secure, Fully-Compliant Healthcare Applications & Solutions That Bring Digital And Healthcare Together & Enable Meaningful Transformation. fcxxc']cfWe’ve Worked Closely With Healthcare Institutions For More Than A Decade. Our Domain Knowledge In The Field Paired With The Long History Of Creating Reliable And Engaging Software Help Healthcare Providers Get Real-Time Alerts And Information For Better Diagnose & Treatment.

                  </div>
                </div>

                <p>
                  <a class="btn btn-primary w-100" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Software developer Job

                  </a>


                </p>
                <div class="collapse" id="collapseExample2">
                  <div class="card card-body">
                    We Deliver Ultra-Secure, Fully-Compliant Healthcare Applications & Solutions That Bring Digital And Healthcare Together & Enable Meaningful Transformation. fcxxc']cfWe’ve Worked Closely With Healthcare Institutions For More Than A Decade. Our Domain Knowledge In The Field Paired With The Long History Of Creating Reliable And Engaging Software Help Healthcare Providers Get Real-Time Alerts And Information For Better Diagnose & Treatment.

                  </div>
                </div>

                <p>
                  <a class="btn btn-primary w-100" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Software developer Job

                  </a>


                </p>
                <div class="collapse" id="collapseExample3">
                  <div class="card card-body">
                    We Deliver Ultra-Secure, Fully-Compliant Healthcare Applications & Solutions That Bring Digital And Healthcare Together & Enable Meaningful Transformation. fcxxc']cfWe’ve Worked Closely With Healthcare Institutions For More Than A Decade. Our Domain Knowledge In The Field Paired With The Long History Of Creating Reliable And Engaging Software Help Healthcare Providers Get Real-Time Alerts And Information For Better Diagnose & Treatment.

                  </div>
                </div>


                <p>
                  <a class="btn btn-primary w-100" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Software developer Job

                  </a>


                </p>
                <div class="collapse" id="collapseExample4">
                  <div class="card card-body">
                    We Deliver Ultra-Secure, Fully-Compliant Healthcare Applications & Solutions That Bring Digital And Healthcare Together & Enable Meaningful Transformation. fcxxc']cfWe’ve Worked Closely With Healthcare Institutions For More Than A Decade. Our Domain Knowledge In The Field Paired With The Long History Of Creating Reliable And Engaging Software Help Healthcare Providers Get Real-Time Alerts And Information For Better Diagnose & Treatment.

                  </div>
                </div>
              </div>

            </div>
            <div className='col-md-3'>


            </div>


          </div>

        </div>
      </section>


    <Footer/>
    </>
  )
}

export default Jobs
