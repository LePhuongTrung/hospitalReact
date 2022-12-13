import React from "react";
import "./404.module.css";

function errorPage() {
  return (
    <div id="error-page">
      <div class="content">
        <h4 data-text="Opps! Page not found">You do not have access</h4>
        <p>Sorry, you do not have access to the page you are looking for.</p>
        <div class="btns">
          <a href="/login">return home</a>
        </div>
      </div>
    </div>
  );
}

export default errorPage;
