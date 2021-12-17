<a href="#" onClick={this.logout()}>LOGOUT</a>

logout() {
    localStorage.clear();
    window.location.href = '/';
}