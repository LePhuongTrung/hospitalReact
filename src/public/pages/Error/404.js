import React from "react";
import "./404.module.css";

function errorPage() {
  return (
    <div id="error-page">
      <div class="content">
        <h2 class="header" data-text="404">
          404
        </h2>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <div class="btns">
          <a href="/login">return home</a>
        </div>
      </div>
    </div>
  );
}

export default errorPage;
