import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div class="container py-4">
        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Learning System</h1>
            <p class="col-md-8 fs-4">
              This system is using React.js as front-end framework, and Node.js,
              MongoDB as backend server. This kind of project is called MERN
              project, which is one of the most popular way to create modern
              websites.
            </p>
            <button class="btn btn-primary btn-lg" type="button">
              See how it works.
            </button>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
              <h2>As a student</h2>
              <p>
                Students can register in courses they like. This website is for
                practice purpose only, so please do not provide any personal
                information, such as credit card numbers.
              </p>
              <button class="btn btn-outline-light" type="button">
                Login or Register Now
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>As an Instructor</h2>
              <p>
                You can become an instructor by registering as one, and start
                making online courses. This website is for practice purpose
                only, so please do not provide any personal information, such as
                credit card numbers.
              </p>
              <button class="btn btn-outline-secondary" type="button">
                Login or Register Now
              </button>
            </div>
          </div>
        </div>

        <footer class="pt-3 mt-4 text-muted border-top">
          &copy; 2024 Shahana Rifkhan
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
