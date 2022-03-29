import { Navbar, NavbarBrand, Nav, NavItem } from "react-bootstrap";
import GitHubButton from "react-github-btn";

const NavBar = () => {
  return (
    <nav>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <NavbarBrand href="/" className="font-weight-bold">CV Generator App</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavItem className="px-lg-3">
                {/* github download repo button */}
                <abbr title="download the project from github">
                  <GitHubButton
                    href=""
                    data-icon="octicon-github"
                    aria-label="Github link for this project"
                  >
                    Download
                  </GitHubButton>
                </abbr>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </nav>
  );
};

export default NavBar;
