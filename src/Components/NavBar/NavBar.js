import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ChipuWeb</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">No tocar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Próximamente</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tampoco tocar</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        );
    }
}

export default NavBar;