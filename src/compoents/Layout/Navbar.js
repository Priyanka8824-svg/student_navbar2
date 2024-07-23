const Navbar=()=>
{
    return(
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
        <a className="navbar-brand text-warning fw-bold mx-auto fs-2" href="#"> Student Registration Portal </a>
    
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active fw-bold fs-4 text-danger" aria-current="page" href="#"> Home </a>
        
        <a className="nav-link fw-bold fs-4 text-danger" href="#"> About </a>
        
        <a className="nav-link fw-bold fs-4 text-danger" href="#"> Gallary </a>

        <a className="nav-link fw-bold fs-4 text-danger" href="#"> Show </a>

        <a className="nav-link fw-bold fs-4 text-danger" href="#"> Register </a>

        <form className="d-flex">
            <input className="form-control me-2 text-" type="search" placeholder="Search" aria-label="Search" />
            
            <button className="btn btn-outline-danger fw-bold fs-3" type="submit">Search</button>
        </form>

      </div>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar