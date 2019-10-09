class IpInfo {
    constructor () {
        this.addEvents();
    }
  addEvents() {
    fetch('http://ipinfo.io/json').then(r => r.json()).then(r => {
        geo.innerHTML = JSON.stringify(r, 0, '<br>');
})
  }
}

export default IpInfo;