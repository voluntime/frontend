function NotFound() {
    return (
        <div className="wrapper" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--yellow)'}}>
                <h1 style={{color: 'var(--dark-slate)'}}>404: PAGE NOT FOUND</h1>
            </div>
            <img src="logo.svg" style={{marginTop: '30vh', width: '8rem', height: '8rem'}}/>
        </div>
    );
}

export default NotFound;